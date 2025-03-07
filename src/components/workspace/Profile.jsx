import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Camera, Settings } from "lucide-react";

const Profile = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className="flex flex-col items-center p-6">
            <div className="relative">
                <img
                    src={user?.avatar || "/default-avatar.png"}
                    alt="Profile"
                    className="w-32 h-32 rounded-full border-2 border-gray-300"
                />
                <button
                    className="absolute bottom-2 right-2 bg-gray-700 p-1 rounded-full text-white"
                    onClick={() => setIsEditing(true)}
                >
                    <Camera size={18} />
                </button>
            </div>
            <h2 className="text-xl font-semibold mt-4">{user?.username}</h2>
            <p className="text-gray-500">{user?.email}</p>
            <button
                className="mt-6 flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg"
                onClick={() => navigate("/settings")}
            >
                <Settings className="mr-2" /> Settings
            </button>
        </div>
    );
};

export default Profile;
