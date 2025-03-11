import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import TaskBoard from "./TaskBoard";
import TaskForm from "./TaskForm";
import { Card, Typography, IconButton, Modal, TextField, Button } from "@mui/material";
import { Delete, Edit, Add } from "@mui/icons-material";
import axios from "axios";

const PREMADE_TASKLISTS = {
  backlog: [{ id: "task-1", title: "Research project scope" }],
  todo: [{ id: "task-2", title: "Design database schema" }],
  doing: [{ id: "task-3", title: "Develop API endpoints" }],
  codeReview: [{ id: "task-4", title: "Review PR #12" }],
  testing: [{ id: "task-5", title: "Run integration tests" }],
  done: [{ id: "task-6", title: "Deploy to production" }],
};

const API_BASE_URL = "https://taskly-app-q35u.onrender.com/tasklists";


const TaskList = () => {
  const [taskLists, setTaskLists] = useState({});
  const [openTaskForm, setOpenTaskForm] = useState(false);
  const [editingListId, setEditingListId] = useState(null);
  const [newListTitle, setNewListTitle] = useState("");
  const [authToken, setAuthToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    fetchTaskLists();
  }, []);

  const fetchTaskLists = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      if (response.data.length > 0) {
        const userTaskLists = response.data.reduce((acc, list) => {
          acc[list.id] = { name: list.name, tasks: list.tasks || [] };
          return acc;
        }, {});

        setTaskLists({ ...PREMADE_TASKLISTS, ...userTaskLists });
      } else {
        setTaskLists(PREMADE_TASKLISTS);
      }
    } catch (error) {
      console.error("Error fetching task lists:", error);
    }
  };


  const addTaskList = async () => {
    const listName = `New List ${Date.now()}`;

    try {
      const response = await axios.post(
        `${API_BASE_URL}/`,
        { name: listName },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );

      const newListId = response.data.id;
      setTaskLists({ ...taskLists, [newListId]: { name: listName, tasks: [] } });
    } catch (error) {
      console.error("Error creating task list:", error);
    }
  };


  const editTaskListName = async (listId, newName) => {
    try {
      await axios.put(
        `${API_BASE_URL}/${listId}`,
        { name: newName },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );

      setTaskLists((prevLists) => {
        const updatedLists = { ...prevLists };
        updatedLists[listId].name = newName;
        return updatedLists;
      });
    } catch (error) {
      console.error("Error updating task list:", error);
    }
  };


  const deleteTaskList = async (listId) => {
    if (!window.confirm("Are you sure you want to delete this list?")) return;

    try {
      await axios.delete(`${API_BASE_URL}/${listId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      setTaskLists((prevLists) => {
        const updatedLists = { ...prevLists };
        delete updatedLists[listId];
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

    setTaskLists({
      ...taskLists,
      [source.droppableId]: { ...taskLists[source.droppableId], tasks: sourceList },
      [destination.droppableId]: { ...taskLists[destination.droppableId], tasks: destList },
    });

    try {
      await axios.put(`${API_BASE_URL}/tasks/${movedTask.id}`, {
        taskListId: destination.droppableId,
      }, { headers: { Authorization: `Bearer ${authToken}` } });
    } catch (error) {
      console.error("Error updating task list after drag:", error);
    }
  };

  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="flex space-x-4 p-6 overflow-x-auto h-screen bg-gray-100 ml-[260px]">
          {Object.keys(taskLists).map((listId) => (
            <Droppable key={listId} droppableId={listId}>
              {(provided) => (
                <Card
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="w-72 p-4 rounded-lg shadow-lg flex flex-col h-[80vh] min-w-[280px] max-w-[300px] bg-white"
                >
                  <div className="flex justify-between items-center pb-2 border-b border-gray-300">
                    {editingListId === listId ? (
                      <TextField
                        value={newListTitle}
                        onChange={(e) => setNewListTitle(e.target.value)}
                        onBlur={() => {
                          if (newListTitle.trim()) {
                            editTaskListName(listId, newListTitle);
                          }
                          setEditingListId(null);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            if (newListTitle.trim()) {
                              editTaskListName(listId, newListTitle);
                            }
                            setEditingListId(null);
                          }
                        }}
                        autoFocus
                      />
                    ) : (
                      <Typography variant="h6" className="capitalize text-gray-700 cursor-pointer" onClick={() => {
                        setEditingListId(listId);
                        setNewListTitle(listId);
                      }}>
                        {listId.replace(/([A-Z])/g, " $1")}
                      </Typography>
                    )}
                    <IconButton onClick={() => deleteTaskList(listId)}>
                      <Delete color="error" />
                    </IconButton>
                  </div>

                  <div className="flex-1 overflow-y-auto mt-2 space-y-3">
                    {taskLists[listId].map((task, index) => (
                      <Draggable key={task.id} draggableId={task.id} index={index}>
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
                    <Button variant="contained" color="primary" onClick={() => setOpenTaskForm(listId)} startIcon={<Add />}>
                      Add Task
                    </Button>
                  </div>

                  {openTaskForm === listId && (
                    <Modal open onClose={() => setOpenTaskForm(null)}>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg">
                        <TaskForm onSubmit={(task) => addTask(listId, task)} />
                      </div>
                    </Modal>
                  )}
                </Card>
              )}
            </Droppable>
          ))}

          <Button variant="outlined" color="secondary" startIcon={<Add />} onClick={() => setTaskLists({ ...taskLists, [`newList${Date.now()}`]: [] })}>
            Add Task List
          </Button>
        </div>
      </DragDropContext>
    </>
  );
};

export default TaskList;
