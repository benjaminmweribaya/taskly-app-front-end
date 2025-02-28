import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaTasks, FaUser, FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {/* Mobile Toggle Button */}
            <button
                className="md:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white p-2 rounded"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {/* Sidebar */}
            <div
                className={`fixed inset-y-0 left-0 w-64 bg-gray-900 text-white transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } md:translate-x-0 transition-transform duration-300 ease-in-out z-40`}
            >
                <div className="p-4 text-xl font-bold border-b border-gray-700">
                    Taskly App
                </div>
                <nav className="flex flex-col p-4 space-y-4">
                    <Link
                        to="/dashboard"
                        className="flex items-center space-x-2 p-2 rounded hover:bg-blue-700"
                    >
                        <FaHome /> <span>Dashboard</span>
                    </Link>
                    <Link
                        to="/tasks"
                        className="flex items-center space-x-2 p-2 rounded hover:bg-blue-700"
                    >
                        <FaTasks /> <span>Tasks</span>
                    </Link>
                    <Link to="/profile" className="flex items-center space-x-2 p-2 rounded hover:bg-blue-700">
                        <FaUser /> <span>Profile</span>
                    </Link>
                    <button className="flex items-center space-x-2 p-2 rounded hover:bg-red-600">
                        <FaSignOutAlt /> <span>Logout</span>
                    </button>
                </nav>
            </div>

            {/* Overlay for Mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </div>
    );
};

export default Sidebar;
