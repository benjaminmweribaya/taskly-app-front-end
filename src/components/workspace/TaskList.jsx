import React, { useState } from "react";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Fix bug in login", priority: "High", assignedTo: "John", dueDate: "2025-02-27" },
    { id: 2, title: "Design landing page", priority: "Medium", assignedTo: "Alice", dueDate: "2025-03-01" },
    { id: 3, title: "Update backend API", priority: "Low", assignedTo: "Bob", dueDate: "2025-03-03" },
  ]);

  const handleComplete = (taskId) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: true } : task));
  };

  const handleEdit = (task) => {
    console.log("Edit Task:", task);
  };

  const handleDelete = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="flex-1 p-6 ml-60 md:ml-56 lg:ml-72 transition-all">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-700 mb-6 flex items-center">📋 Task Lists</h2>
        {tasks.length === 0 ? (
          <p className="text-gray-500 text-center">No tasks available.</p>
        ) : (
          <div className="space-y-4">
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onComplete={handleComplete}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskList;
