import React, { useEffect, useState } from "react";
import Notifications from "./Notifications";
import { useAuth } from "../../context/AuthContext";
//import axios from "axios";

const Dashboard = () => {
    const { user } = useAuth();
    const [taskStats, setTaskStats] = useState({ completed: 0, pending: 0, overdue: 0 });
    const [upcomingTasks, setUpcomingTasks] = useState([]);

    //useEffect(() => {
    // Fetch task stats
    //axios.get("/api/task-stats").then((response) => {
    //setTaskStats(response.data);
    //}).catch((error) => console.error("Error fetching task stats:", error));

    // Fetch upcoming tasks
    // axios.get("/api/upcoming-tasks").then((response) => {
    //setUpcomingTasks(response.data);
    //}).catch((error) => console.error("Error fetching upcoming tasks:", error));
    // }, []);

    return (
        <div className="flex h-screen">
            <div className="flex-grow p-6 overflow-auto ml-60">
                <h2 className="text-2xl font-bold mb-4">👋 Hi, {user?.username}!</h2>

                <Notifications />

                <div className="grid grid-cols-3 gap-4 my-6">
                    <div className=" bg-green-100 p-4 rounded shadow">
                        <h3 className="text-lg font-semibold">✅ Completed Tasks</h3>
                        <p className="text-xl">{taskStats.completed}</p>
                    </div>
                    <div className=" bg-yellow-100 p-4 rounded shadow">
                        <h3 className="text-lg font-semibold">⏳ Pending Tasks</h3>
                        <p className="text-xl">{taskStats.pending}</p>
                    </div>
                    <div className=" bg-red-100 p-4 rounded shadow">
                        <h3 className="text-lg font-semibold">⚠️ Overdue Tasks</h3>
                        <p className="text-xl">{taskStats.overdue}</p>
                    </div>
                </div>
                <div className="upcoming-tasks">
                    <h3 className="text-lg font-semibold">📅 Upcoming Tasks</h3>
                    <ul className="list-disc pl-5">
                        {upcomingTasks.length > 0 ? (
                            upcomingTasks.map((task) => (
                                <li key={task.id} className="mb-2" >
                                    <span className="task-title font-semibold">{task.title}</span> - Due:{" "}
                                    <strong>{task.dueDate}</strong>
                                </li>
                            ))
                        ) : (
                            <p className="text-gray-500">No upcoming tasks</p>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
