import React from "react";
import { Link } from "react-router-dom";

const TaskList = () => {
  // Dummy data (to be replaced with API fetch)
  const tasks = [
    { id: 1, title: "Fix bug in login", priority: "High", assignedTo: "John", dueDate: "2025-02-27" },
    { id: 2, title: "Design landing page", priority: "Medium", assignedTo: "Alice", dueDate: "2025-03-01" },
    { id: 3, title: "Update backend API", priority: "Low", assignedTo: "Bob", dueDate: "2025-03-03" },
  ];

  return (
    <div className="task-list-container">
      <h2>📋 Task Lists</h2>
      <table className="task-table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Priority</th>
            <th>Assigned To</th>
            <th>Due Date</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className={`priority-${task.priority.toLowerCase()}`}>
              <td>{task.title}</td>
              <td>{task.priority}</td>
              <td>{task.assignedTo}</td>
              <td>{task.dueDate}</td>
              <td>
                <Link to={`/task/${task.id}`} className="text-blue-500 underline">
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
