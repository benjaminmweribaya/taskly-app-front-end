import { useState } from "react";
import { FaCheck, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const TaskItem = ({ task, onComplete, onEdit, onDelete }) => {
    const [isCompleted, setIsCompleted] = useState(task.completed);

    const handleComplete = () => {
        setIsCompleted(true);
        onComplete(task.id);
    };

    // Fallback avatar (uses UI Avatars if no image is provided)
    const getAvatarUrl = (user) => {
        if (user?.avatar) return user.avatar; // Use provided avatar
        return `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || "User")}&background=random&color=fff&size=50`;
    };

    return (
        <div
            className={`p-4 border rounded-lg shadow-md ${isCompleted ? "bg-green-100" : "bg-white"
                }`}
        >
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{task.title}</h3>
                <div className="flex gap-2">
                    {!isCompleted && (
                        <button
                            className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
                            onClick={handleComplete}
                        >
                            <FaCheck />
                        </button>
                    )}
                    <button
                        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                        onClick={() => onEdit(task)}
                    >
                        <FaEdit />
                    </button>
                    <button
                        className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
                        onClick={() => onDelete(task.id)}
                    >
                        <FaTrash />
                    </button>
                </div>
            </div>

            <p className="text-gray-600 mt-2">{task.description}</p>

            <div className="flex items-center mt-2 space-x-2">
                <Link to={task.assignedTo ? `/profile/${task.assignedTo.id}` : "#"} className="flex items-center space-x-2 hover:underline">
                    <img
                        src={getAvatarUrl(task.assignedTo)}
                        alt={task.assignedTo?.name || "Unassigned"}
                        className="w-8 h-8 rounded-full border"
                    />
                    <p className="text-gray-700">
                        <span className="font-semibold">Assigned to:</span> {task.assignedTo || "Unassigned"}
                    </p>
                </Link>
            </div>

            <div className="flex justify-between items-center mt-2 text-sm">
                <span className="text-gray-500">
                    Due:{" "}
                    <span
                        className={`${new Date(task.dueDate) < new Date() ? "text-red-500" : ""
                            }`}
                    >
                        {new Date(task.dueDate).toLocaleDateString()}
                    </span>
                </span>
                <span
                    className={`px-2 py-1 rounded-md ${task.priority === "High"
                        ? "bg-red-500 text-white"
                        : task.priority === "Medium"
                            ? "bg-yellow-500 text-white"
                            : "bg-gray-300 text-black"
                        }`}
                >
                    {task.priority}
                </span>
            </div>
        </div>
    );
};

export default TaskItem;
