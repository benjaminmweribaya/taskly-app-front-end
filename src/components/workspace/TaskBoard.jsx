import React, { useState, useEffect } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import TaskForm from "./TaskForm";

const TaskBoard = ({ tasks, setTasks, onDelete, onEdit }) => {
    const handleAddTask = (newTask) => {
        setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
    };

    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow">
            <TaskForm onSubmit={handleAddTask} />

            <Droppable droppableId="taskBoard">
                {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef} className="p-4 bg-gray-100 rounded-lg shadow">
                        {tasks.map((task, index) => (
                            <Draggable key={task.id} draggableId={String(task.id)} index={index}>
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        className="p-4 bg-white rounded-lg shadow mb-2 flex justify-between"
                                    >
                                        <div>
                                            <h3 className="font-semibold">{task.title}</h3>
                                            <p className="text-sm text-gray-600">{task.description}</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <button onClick={() => onEdit(task)} className="text-blue-500">Edit</button>
                                            <button onClick={() => onDelete(task.id)} className="text-red-500">Delete</button>
                                        </div>
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
};

export default TaskBoard;
