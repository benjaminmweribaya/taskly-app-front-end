import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaTasks, FaUser, FaSignOutAlt, FaBars, FaTimes, FaPlus, FaCog } from "react-icons/fa";
import LoginModal from "../auth/LoginModal";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const navigate = useNavigate();

    const handleLogout = async () => {
        const token = localStorage.getItem("access_token");
        if (!token) {
            alert("You are already logged out!");
            setShowLoginModal(true);
            navigate("/");
            return;
        }

        try {
            const response = await fetch("https://taskly-app-q35u.onrender.com/logout", {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.removeItem("access_token");
                localStorage.removeItem("refresh_token");

                alert("Logged out successfully!");

                navigate("/");
                setShowLoginModal(true);
            } else {
                alert(data.error || "Logout failed!");
            }
        } catch (error) {
            console.error("Logout error:", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <div>
            <button
                className="md:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white p-2 rounded"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            <div
                className={`fixed inset-y-0 left-0 w-64 bg-gray-900 text-white transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } md:translate-x-0 transition-transform duration-300 ease-in-out z-40`}
            >
                <div className="p-4 text-xl font-bold border-b border-gray-700">
                    Taskly App
                </div>
                <nav className="flex flex-col p-4 space-y-4">
                    <Link
                        to="/workspace/dashboard"
                        className="flex items-center space-x-2 p-2 rounded hover:bg-blue-700"
                    >
                        <FaHome /> <span>Dashboard</span>
                    </Link>
                    <Link
                        to="/workspace/tasks-list"
                        className="flex items-center space-x-2 p-2 rounded hover:bg-blue-700"
                    >
                        <FaTasks /> <span>Task Lists</span>
                    </Link>
                    <Link
                        to="/workspace/create-task"
                        className="flex items-center space-x-2 p-2 rounded hover:bg-blue-700"
                    >
                        <FaPlus /> <span>Create Task</span>
                    </Link>
                    <Link to="/workspace/profile" className="flex items-center space-x-2 p-2 rounded hover:bg-blue-700">
                        <FaUser /> <span>Profile</span>
                    </Link>
                    <Link
                        to="/workspace/settings"
                        className="flex items-center space-x-2 p-2 rounded hover:bg-blue-700"
                    >
                        <FaCog /> <span>Settings</span>
                    </Link>
                    <Link
                        to="/"
                        className="flex items-center space-x-2 p-2 rounded hover:bg-blue-700"
                    >
                        <FaHome /> <span>Home</span>
                    </Link>
                    <button onClick={handleLogout} className="flex items-center space-x-2 p-2 rounded hover:bg-red-600">
                        <FaSignOutAlt /> <span>Logout</span>
                    </button>
                </nav>
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
        </div>
    );
};

export default Sidebar;
