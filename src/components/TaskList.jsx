import React, { useState } from "react";
import { Link } from "react-router-dom";
import TaskItem from "./TaskItem";

const TaskList = () => {
  // Dummy data (to be replaced with API fetch)
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
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">📋 Task Lists</h2>
      <div className="grid gap-4">
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
    </div>
  );
};

export default TaskList;
