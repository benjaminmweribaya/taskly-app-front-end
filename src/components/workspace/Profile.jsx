import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Camera, Settings } from "lucide-react";

const Profile = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className="flex-1 p-6 ml-60 md:ml-56 lg:ml-72 transition-all">
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <div className="relative w-32 h-32 mx-auto">
                    <img
                        src={user?.avatar || "/default-avatar.png"}
                        alt="Profile"
                        className="w-32 h-32 rounded-full border-2 border-gray-300 object-cover"
                    />
                    <button
                        className="absolute bottom-2 right-2 bg-gray-700 p-1 rounded-full text-white hover:bg-gray-800"
                        onClick={() => setIsEditing(true)}
                    >
                        <Camera size={18} />
                    </button>
                </div>
                <h2 className="text-xl font-semibold mt-4">{user?.username}</h2>
                <p className="text-gray-500">{user?.email || "No email available"}</p>
                <button
                    className="mt-6 flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg mx-auto"
                    onClick={() => navigate("/workspace/settings")}
                >
                    <Settings className="mr-2" /> Settings
                </button>
            </div>
        </div >
    );
};

export default Profile;
