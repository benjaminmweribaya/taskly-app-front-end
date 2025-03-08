import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Dashboard from "./Dashboard.jsx";
import TaskList from "./TaskList.jsx";
import TaskDetails from "./TaskDetails.jsx";
import TaskComments from "./TaskComments.jsx";
import TaskForm from "./TaskForm.jsx";
import Notifications from "./Notifications.jsx";
import Sidebar from "./Sidebar.jsx";
import Profile from "./Profile.jsx";
import Settings from "./Settings.jsx";
import { useAuth } from "../../context/AuthContext";
//import { socket } from "../../socket.js";

const WorkspaceLayout = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/signup" />;
  }

  //useEffect(() => {
    //if (!socket.connected) {
      //socket.auth = { token: sessionStorage.getItem("access_token") }; 
      //socket.connect();
    //}

    //socket.on("connect", () => {
      //console.log("Connected to WebSocket");
    //});

    //socket.on("disconnect", () => {
      //console.warn("Disconnected from WebSocket");
    //});

    //return () => {
      //socket.disconnect();
    //};
  //}, []);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-4 overflow-auto">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tasks-list" element={<TaskList />} />
          <Route path="/task/:taskId" element={<TaskDetails />} />
          <Route path="/task/:taskId/comments" element={<TaskComments />} />
          <Route path="/create-task" element={<TaskForm />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default WorkspaceLayout;
