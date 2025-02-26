import React from "react";
import TaskList from "../tasks/TaskList";

const Dashboard = () => {
    // Placeholder data (to be fetched dynamically later)
    const taskStats = {
        completed: 12,
        pending: 5,
        overdue: 3,
    };

    const upcomingTasks = [
        { id: 1, title: "Task A", dueDate: "2025-02-25" },
        { id: 2, title: "Task B", dueDate: "2025-02-28" },
        { id: 3, title: "Task C", dueDate: "2025-03-01" },
    ];

    return (
        <div className="dashboard-container">
            <h2>📊 Dashboard</h2>
            <div className="stats grid grid-cols-3 gap-4">
                <div className="stat-card-completed bg-green-100 p-4 rounded">
                    <h3>✅ Completed Tasks</h3>
                    <p>{taskStats.completed}</p>
                </div>
                <div className="stat-card-pending bg-yellow-100 p-4 rounded">
                    <h3>⏳ Pending Tasks</h3>
                    <p>{taskStats.pending}</p>
                </div>
                <div className="stat-card-overdue bg-red-100 p-4 rounded">
                    <h3>⚠️ Overdue Tasks</h3>
                    <p>{taskStats.overdue}</p>
                </div>
            </div>
            <div className="upcoming-tasks">
                <h3>📅 Upcoming Tasks</h3>
                <ul>
                    {upcomingTasks.map((task) => (
                        <li key={task.id}>
                            <span className="task-title">{task.title}</span> - Due:{" "}
                            <strong>{task.dueDate}</strong>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-6">
                <TaskList />
            </div>
        </div>
    );
};

export default Dashboard;
