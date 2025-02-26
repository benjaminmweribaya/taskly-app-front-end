import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notifications from "./components/common/Notifications.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import TaskList from "./components/tasks/TaskList.jsx";
import TaskDetails from "./components/tasks/TaskDetails.jsx";
import { socket } from "./socket";
import ContactUs from "./components/pages/ContactUs.js";
import Footer from "./components/pages/Footer.js";
import Navbar from "./components/pages/Navbar.js";
import LandingPage from "./components/pages/LandingPage.js";


function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    socket.connect();
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <Route>
      <Notifications />
      <div className="p-4">
        <h1 className="text-2xl font-bold">Taskly App</h1>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/task/:taskId" element={<TaskDetails />} />
        </Routes>
        <ContactUs/>
        <Footer/>
        <Navbar/>
        <LandingPage/>
        
        <button
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Count is {count}
        </button>
      </div>
    </Route>
  );
}

export default App;
