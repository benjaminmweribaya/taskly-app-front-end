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

  const [listNames, setListNames] = useState({
    backlog: "Backlog",
    todo: "Todo",
    doing: "Doing",
    codeReview: "Code Review",
    testing: "Testing",
    done: "Done",
  });

  const [showTaskForm, setShowTaskForm] = useState(null);
  const [selectedListId, setSelectedListId] = useState(null);
  const [editingList, setEditingList] = useState(null);

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


  const renameList = async (listId, newName) => {
    setListNames((prev) => ({ ...prev, [listId]: newName }));
    setEditingList(null);
  };

  const addTaskList = () => {
    const newListId = `list-${Date.now()}`;
    setTaskLists((prev) => ({ ...prev, [newListId]: [] }));
    setListNames((prev) => ({ ...prev, [newListId]: "New List" }));
  };

  const deleteTaskList = (listId) => {
    setTaskLists((prev) => {
      const updated = { ...prev };
      delete updated[listId];
      return updated;
    });
    setListNames((prev) => {
      const updated = { ...prev };
      delete updated[listId];
      return updated;
    });
  };

  return (
    <>
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
                  <div className="flex justify-between items-center pb-2 border-b border-gray-300">
                    {editingList === listId ? (
                      <input
                        type="text"
                        className="text-lg font-bold text-gray-700 bg-transparent border-b border-gray-500 focus:outline-none"
                        value={listNames[listId]}
                        onChange={(e) => renameList(listId, e.target.value)}
                        onBlur={() => setEditingList(null)}
                        onKeyDown={(e) => e.key === "Enter" && setEditingList(null)}
                        autoFocus
                      />
                    ) : (

                      <h3 className="text-lg font-bold capitalize text-gray-700 cursor-pointer" onClick={() => setEditingList(listId)}>
                        {listNames[listId]}
                      </h3>
                      // <h3 className="text-lg font-bold capitalize text-gray-700 pb-2 border-b border-gray-300">{listId.replace(/([A-Z])/g, ' $1')}</h3>
                    )}
                    <button onClick={() => deleteTaskList(listId)} className="text-red-600 hover:text-red-800 text-xl">✖</button>
                  </div>
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
          <button
            onClick={addTaskList}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition h-[80vh] min-w-[280px] max-w-[300px]"
          >
            +
          </button>
        </div>

      </DragDropContext>
      {showTaskForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={() => setShowTaskForm(false)}>
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative" onClick={(e) => e.stopPropagation()}>
            <TaskForm onSubmit={addTask} onClose={() => setShowTaskForm(false)} />
          </div>
        </div>
      )}
    </>

  );
};

export default TaskList;



// const TaskList = () => {
//   const [taskLists, setTaskLists] = useState({
//     backlog: [
//       { id: "1", title: "Fix login bug", description: "Investigate and resolve the login issue.", assignedTo: "John", priority: "High", dueDate: "2025-02-27" },
//     ],
//     todo: [
//       { id: "2", title: "Design homepage", description: "Create UI for the landing page.", assignedTo: "Alice", priority: "Medium", dueDate: "2025-03-01" },
//     ],
//     doing: [],
//     codeReview: [],
//     testing: [],
//     done: [],
//   });

// const [listNames, setListNames] = useState({
//   backlog: "Backlog",
//   todo: "Todo",
//   doing: "Doing",
//   codeReview: "Code Review",
//   testing: "Testing",
//   done: "Done",
// });

// const [showTaskForm, setShowTaskForm] = useState(false);
// const [selectedListId, setSelectedListId] = useState(null);
// const [editingList, setEditingList] = useState(null);

// const handleDragEnd = (result) => {
//   if (!result.destination) return;

//   const { source, destination } = result;
//   const sourceList = [...taskLists[source.droppableId]];
//   const destList = [...taskLists[destination.droppableId]];

//   const [movedTask] = sourceList.splice(source.index, 1);
//   destList.splice(destination.index, 0, movedTask);

//   setTaskLists((prev) => ({
//     ...prev,
//     [source.droppableId]: sourceList,
//     [destination.droppableId]: destList,
//   }));
// };

// const addTask = (newTask) => {
//   setTaskLists((prev) => ({
//     ...prev,
//     [selectedListId]: [...prev[selectedListId], { ...newTask, id: Date.now().toString() }],
//   }));
//   setShowTaskForm(false);
// };

// const renameList = async (listId, newName) => {
//   setListNames((prev) => ({ ...prev, [listId]: newName }));
//   setEditingList(null);
// };

// const addTaskList = () => {
//   const newListId = `list-${Date.now()}`;
//   setTaskLists((prev) => ({ ...prev, [newListId]: [] }));
//   setListNames((prev) => ({ ...prev, [newListId]: "New List" }));
// };

// const deleteTaskList = (listId) => {
//   setTaskLists((prev) => {
//     const updated = { ...prev };
//     delete updated[listId];
//     return updated;
//   });
//   setListNames((prev) => {
//     const updated = { ...prev };
//     delete updated[listId];
//     return updated;
//   });
// };

// return (
//   <>
//     <DragDropContext onDragEnd={handleDragEnd}>
//       <div className="flex space-x-4 p-6 overflow-x-auto h-screen bg-gray-100 ml-[260px]">
//         {Object.keys(taskLists).map((listId) => (
//           <Droppable key={listId} droppableId={listId}>
//             {(provided) => (
//               <div
//                 ref={provided.innerRef}
//                 {...provided.droppableProps}
//                 className="w-72 bg-blue-100 p-4 rounded-lg shadow-lg flex flex-col h-[80vh] min-w-[280px] max-w-[300px]"
//               >
//                 <div className="flex justify-between items-center pb-2 border-b border-gray-300">
//                   {editingList === listId ? (
//                     <input
//                       type="text"
//                       className="text-lg font-bold text-gray-700 bg-transparent border-b border-gray-500 focus:outline-none"
//                       value={listNames[listId]}
//                       onChange={(e) => renameList(listId, e.target.value)}
//                       onBlur={() => setEditingList(null)}
//                       onKeyDown={(e) => e.key === "Enter" && setEditingList(null)}
//                       autoFocus
//                     />
//                   ) : (
//                     <h3 className="text-lg font-bold capitalize text-gray-700 cursor-pointer" onClick={() => setEditingList(listId)}>
//                       {listNames[listId]}
//                     </h3>
//                   )}
//                   <button onClick={() => deleteTaskList(listId)} className="text-red-600 hover:text-red-800 text-xl">✖</button>
//                 </div>

//                 <div className="flex-1 overflow-y-auto mt-2 space-y-3">
//                   {taskLists[listId].map((task, index) => (
//                     <Draggable key={task.id} draggableId={task.id} index={index}>
//                       {(provided) => (
//                         <div
//                           ref={provided.innerRef}
//                           {...provided.draggableProps}
//                           {...provided.dragHandleProps}
//                           className="bg-white p-3 rounded-lg shadow border-l-4 my-2 cursor-pointer"
//                         >
//                           <TaskBoard task={task} />
//                         </div>
//                       )}
//                     </Draggable>
//                   ))}
//                   {provided.placeholder}
//                 </div>

//                 <div className="mt-auto flex justify-center">
//                   <button
//                     onClick={() => {
//                       setSelectedListId(listId);
//                       setShowTaskForm(true);
//                     }}
//                     className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
//                   >
//                     + Add Item
//                   </button>
//                 </div>
//               </div>
//             )}
//           </Droppable>
//         ))}
//         <button
//           onClick={addTaskList}
//           className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition h-[80vh] min-w-[280px] max-w-[300px]"
//         >
//           +
//         </button>
//       </div>
//     </DragDropContext>

//     {showTaskForm && (
//       <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={() => setShowTaskForm(false)}>
//         <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative" onClick={(e) => e.stopPropagation()}>
//           <TaskForm onSubmit={addTask} onClose={() => setShowTaskForm(false)} />
//         </div>
//       </div>
//     )}
//   </>
// );
// };

// export default TaskList;
