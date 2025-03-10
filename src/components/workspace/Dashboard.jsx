import React, { useEffect, useState } from "react";
import Notifications from "./Notifications";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
    const { user } = useAuth();
    const [taskStats, setTaskStats] = useState({ completed: 0, pending: 0, inProgress: 0, overdue: 0 });
    const [upcomingTasks, setUpcomingTasks] = useState([]);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await axios.get("/api/task-stats", { withCredentials: true });
                setTaskStats(response.data);
            } catch (error) {
                console.error("Error fetching task stats:", error);
            }
        };

        const fetchUpcomingTasks = async () => {
            try {
                const response = await axios.get("/api/upcoming-tasks", { withCredentials: true });
                console.log("Upcoming tasks response:", response.data);
                setUpcomingTasks(Array.isArray(response.data) ? response.data : []);
            } catch (error) {
                console.error("Error fetching upcoming tasks:", error);
                setUpcomingTasks([]);
            }
        };

        fetchStats();
        fetchUpcomingTasks();
    }, []);

    const stats = [
        { title: "✅ Completed Tasks", count: taskStats.completed, color: "#4CAF50" },
        { title: "⏳ Pending Tasks", count: taskStats.pending, color: "#FFC107" },
        { title: "🚀 Ongoing Tasks", count: taskStats.inProgress, color: "#03A9F4" },
        { title: "⚠️ Overdue Tasks", count: taskStats.overdue, color: "#F44336" }
    ];


    const chartData = {
        labels: ["Completed", "Pending", "In Progress", "Overdue"],
        datasets: [
            {
                label: "Task Status",
                data: [taskStats.completed, taskStats.pending, taskStats.inProgress, taskStats.overdue],
                backgroundColor: ["#4CAF50", "#FFC107", "#03A9F4", "#F44336"],
                borderRadius: 5,
            }
        ]
    };

    return (
        <Box sx={{ flexGrow: 1, p: 6, ml: "250px", minHeight: "100vh", bgcolor: "#F5F5F5", overflow: "auto" }}>
            <Typography variant="h4" fontWeight="bold" mb={4}>
                👋 Hi, {user?.username}!
            </Typography>

            <Notifications />

            <Grid container spacing={3}>
                {stats.map((stat, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <Paper sx={{ p: 3, textAlign: "center", bgcolor: stat.color, color: "#fff", borderRadius: 2 }}>
                                <Typography variant="h6">{stat.title}</Typography>
                                <Typography variant="h4" fontWeight="bold">
                                    {stat.count}
                                </Typography>
                            </Paper>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>

            <Box mt={5} sx={{ bgcolor: "#fff", p: 3, borderRadius: 2, boxShadow: "0px 4px 6px rgba(0,0,0,0.1)" }}>
                <Typography variant="h6" fontWeight="bold" mb={2}>
                    📊 Task Distribution
                </Typography>
                <Bar data={chartData} />
            </Box>

            <Box mt={5}>
                <Typography variant="h6" fontWeight="bold">
                    📅 Upcoming Tasks
                </Typography>
                {upcomingTasks.length > 0 ? (
                    <Box component="ul" sx={{ mt: 2 }}>
                        {upcomingTasks.map((task) => (
                            <motion.li
                                key={task.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                                style={{ listStyle: "none", marginBottom: "10px", padding: "10px", background: "#fff", borderRadius: "5px", boxShadow: "0px 4px 6px rgba(0,0,0,0.1)" }}
                            >
                                <Typography variant="subtitle1" fontWeight="bold">
                                    {task.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Due: {task.dueDate}
                                </Typography>
                            </motion.li>
                        ))}
                    </Box>
                ) : (
                    <Typography color="textSecondary">No upcoming tasks</Typography>
                )}
            </Box>
        </Box>
    );
};

export default Dashboard;
