import React, { useState } from "react";

const TaskBoard = ({ task }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [comments, setComments] = useState([]);

    const addComment = (comment) => {
        setComments([...comments, comment]);
    };

    return (
        <div>
            <div onClick={() => setIsExpanded(true)} className="cursor-pointer">
                <h3 className="font-bold">{task.title}</h3>
                <p className="text-sm text-gray-500">{task.assignedTo}</p>
            </div>

            {isExpanded && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg w-1/2">
                        <h2 className="text-lg font-bold">{task.title}</h2>
                        <p className="text-gray-600">{task.description}</p>
                        <p className="text-gray-500 text-sm">Assigned to: {task.assignedTo}</p>
                        <p className="text-gray-500 text-sm">Priority: {task.priority}</p>
                        <p className="text-gray-500 text-sm">Due Date: {task.dueDate}</p>

                        <div className="mt-4">
                            <h3 className="font-bold">Comments</h3>
                            <ul>
                                {comments.map((comment, index) => (
                                    <li key={index} className="border-b py-1">{comment}</li>
                                ))}
                            </ul>

                            <input
                                type="text"
                                className="border rounded p-2 w-full mt-2"
                                placeholder="Add a comment..."
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" && e.target.value.trim() !== "") {
                                        addComment(e.target.value);
                                        e.target.value = "";
                                    }
                                }}
                            />
                        </div>

                        <button onClick={() => setIsExpanded(false)} className="mt-4 bg-gray-300 px-4 py-2 rounded">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TaskBoard;
