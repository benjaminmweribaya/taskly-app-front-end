import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import TaskBoard from "./TaskBoard";
import TaskForm from "./TaskForm";
import { Card, Typography, IconButton, Modal, TextField, Button } from "@mui/material";
import { Delete, Edit, Add } from "@mui/icons-material";
import api from "../../api/axios";


const TaskList = () => {
  const [taskLists, setTaskLists] = useState({});
  const [openTaskForm, setOpenTaskForm] = useState(false);
  const [editingListId, setEditingListId] = useState(null);
  const [newListTitle, setNewListTitle] = useState("");
  const authToken = localStorage.getItem("access_token");

  useEffect(() => {
    fetchTaskLists();
  }, [authToken]);

  const fetchTaskLists = async () => {
    try {
      const response = await api.get("/tasklists/", { headers: { Authorization: `Bearer ${authToken}` } });
      const userTaskLists = response.data.reduce((acc, taskList) => {
        acc[taskList.id] = { name: taskList.name, tasks: taskList.tasks || [] };
        return acc;
      }, {});
      setTaskLists(userTaskLists);
    } catch (error) {
      console.error("Error fetching task lists:", error);
    }
  };


  const addTaskList = async () => {
    const taskListName = `New Task List ${Date.now()}`;
    try {
      const response = await api.post("/tasklists/", { name: taskListName }, { headers: { Authorization: `Bearer ${authToken}` } });
      const new_tasklist_id = response.data.id;
      setTaskLists((prevLists) => ({
        ...prevLists, [new_tasklist_id]: { name: taskListName, tasks: [] },
      }));
    } catch (error) {
      console.error("Error creating task list:", error);
    }
  };


  const editTaskListName = async (tasklist_id, newTaskListName) => {
    if (!newTaskListName.trim()) return;
    try {
      await api.put(`/tasklists/${tasklist_id}`, { name: newTaskListName }, { headers: { Authorization: `Bearer ${authToken}` } });

      setTaskLists((prevLists) => ({
        ...prevLists,
        [tasklist_id]: { ...prevLists[tasklist_id], name: newTaskListName },
      }));
    } catch (error) {
      console.error("Error updating task list:", error);
    }
  };


  const deleteTaskList = async (tasklist_id) => {
    if (!window.confirm("Are you sure you want to delete this list?")) return;
    try {
      await api.delete(`/tasklists/${tasklist_id}`, { headers: { Authorization: `Bearer ${authToken}` } });

      setTaskLists((prevLists) => {
        const updatedLists = { ...prevLists };
        delete updatedLists[tasklist_id];
        return updatedLists;
      });
    } catch (error) {
      console.error("Error deleting task list:", error);
    }
  };

  const handleDragEnd = async (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    const sourceList = [...taskLists[source.droppableId].tasks];
    const destList = [...taskLists[destination.droppableId].tasks];

    const [movedTask] = sourceList.splice(source.index, 1);

    destList.splice(destination.index, 0, movedTask);

    setTaskLists((prevLists) => ({
      ...prevLists,
      [source.droppableId]: { ...prevLists[source.droppableId], tasks: sourceList },
      [destination.droppableId]: { ...prevLists[destination.droppableId], tasks: destList },
    }));


    try {
      await api.put(`/tasks/${movedTask.id}`, {
        taskListId: destination.droppableId,
      }, { headers: { Authorization: `Bearer ${authToken}` } });
    } catch (error) {
      console.error("Error updating task list after drag:", error);
    }
  };

  const addTask = (tasklist_id, newTask) => {
    setTaskLists((prevLists) => ({
      ...prevLists,
      [tasklist_id]: {
        ...prevLists[tasklist_id],
        tasks: [...prevLists[tasklist_id].tasks, newTask],
      },
    }));
  };

  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="flex space-x-4 p-6 overflow-x-auto h-screen bg-gray-100 ml-[260px]">
          {Object.keys(taskLists).map((tasklist_id) => (
            <Droppable key={tasklist_id} droppableId={String(tasklist_id)}>
              {(provided) => (
                <Card
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="w-72 p-4 rounded-lg shadow-lg flex flex-col h-[80vh] min-w-[280px] max-w-[300px] bg-white"
                >
                  <div className="flex justify-between items-center pb-2 border-b border-gray-300">
                    {editingListId === tasklist_id ? (
                      <TextField
                        value={newListTitle}
                        onChange={(e) => setNewListTitle(e.target.value)}
                        onBlur={() => {
                          if (newListTitle.trim() && newListTitle !== taskLists[tasklist_id].name) {
                            editTaskListName(tasklist_id, newListTitle);
                          }
                          setEditingListId(null);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            if (newListTitle.trim() && newListTitle !== taskLists[tasklist_id].name) {
                              editTaskListName(tasklist_id, newListTitle);
                            }
                            setEditingListId(null);
                          }
                        }}
                        autoFocus
                      />
                    ) : (
                      <Typography variant="h6" className="capitalize text-gray-700 cursor-pointer" onClick={() => {
                        setEditingListId(tasklist_id);
                        setNewListTitle(taskLists[tasklist_id].name);
                      }}>
                        {taskLists[tasklist_id].name.replace(/([A-Z])/g, " $1")}
                      </Typography>
                    )}
                    <IconButton onClick={() => deleteTaskList(tasklist_id)}>
                      <Delete color="error" />
                    </IconButton>
                  </div>

                  <div className="flex-1 overflow-y-auto mt-2 space-y-3">
                    {(taskLists[tasklist_id]?.tasks || []).map((task, index) => (
                      <Draggable key={task.id} draggableId={String(task.id)} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="bg-gray-200 p-3 rounded-lg shadow my-2 cursor-pointer"
                          >
                            <TaskBoard task={task} />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>

                  <div className="mt-auto flex justify-center">
                    <Button variant="contained" color="primary" onClick={() => setOpenTaskForm(tasklist_id)} startIcon={<Add />}>
                      Add Task
                    </Button>
                  </div>

                  {openTaskForm === tasklist_id && (
                    <Modal open onClose={() => setOpenTaskForm(null)}>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg">
                        <TaskForm
                          onTaskAdded={(task) => addTask(tasklist_id, task)}
                          tasklistId={tasklist_id}
                          access_token={authToken}
                        />
                      </div>
                    </Modal>
                  )}
                </Card>
              )}
            </Droppable>
          ))}

          <Button variant="outlined" color="secondary" startIcon={<Add />} onClick={addTaskList}>
            Add Task List
          </Button>
        </div>
      </DragDropContext>
    </>
  );
};

export default TaskList;
