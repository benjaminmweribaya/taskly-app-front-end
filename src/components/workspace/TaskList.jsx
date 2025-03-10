import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import TaskBoard from "./TaskBoard";
import TaskForm from "./TaskForm";

const TaskList = () => {
  const [taskLists, setTaskLists] = useState({
    backlog: [
      { id: "1", title: "Fix login bug", description: "Investigate and resolve the login issue.", assignedTo: "John", priority: "High", dueDate: "2025-02-27" },
    ],
    todo: [
      { id: "2", title: "Design homepage", description: "Create UI for the landing page.", assignedTo: "Alice", priority: "Medium", dueDate: "2025-03-01" },
    ],
    doing: [],
    codeReview: [],
    testing: [],
    done: [],
  });

  const [showTaskForm, setShowTaskForm] = useState(null);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    const sourceList = taskLists[source.droppableId];
    const destList = taskLists[destination.droppableId];

    const [movedTask] = sourceList.splice(source.index, 1);
    destList.splice(destination.index, 0, movedTask);

    setTaskLists({
      ...taskLists,
      [source.droppableId]: sourceList,
      [destination.droppableId]: destList,
    });
  };


  const addTask = (listId, newTask) => {
    setTaskLists({
      ...taskLists,
      [listId]: [...taskLists[listId], { ...newTask, id: Date.now().toString() }],
    });

    setShowTaskForm(null);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="flex space-x-4 p-6 overflow-x-auto h-screen bg-gray-100 ml-[260px]">

        {Object.keys(taskLists).map((listId) => (
          <Droppable key={listId} droppableId={listId}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="w-72 bg-blue-100 p-4 rounded-lg shadow-lg flex flex-col h-[80vh] min-w-[280px] max-w-[300px]"
              >
                <h3 className="text-lg font-bold capitalize text-gray-700 pb-2 border-b border-gray-300">{listId.replace(/([A-Z])/g, ' $1')}</h3>

                <div className="flex-1 overflow-y-auto mt-2 space-y-3">
                  {taskLists[listId].map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="bg-white p-3 rounded-lg shadowborder-l-4 my-2 cursor-pointer"
                        >
                          <TaskBoard task={task} />
                        </div>
                      )}
                    </Draggable>
                  ))}

                  {provided.placeholder}
                </div>

                 <div className="mt-auto flex justify-center">
                  <button
                    onClick={() => setShowTaskForm(listId)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                  >
                    + Add Task
                  </button>
                </div>

                {showTaskForm === listId && (
                  <div className="mt-2 p-3 bg-white rounded-lg shadow-md">
                    <TaskForm onSubmit={(task) => addTask(listId, task)} />
                  </div>
                )}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default TaskList;
