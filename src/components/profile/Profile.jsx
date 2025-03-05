import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const Profile = () => {
    const { user, updateUser } = useAuth();

    const [formData, setFormData] = useState({
        username: user?.username || "",
        email: user?.email || "",
        password: "",
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // FIX: updateUser(formData) returns a Promise, so we should use await
            await updateUser(formData);
            setMessage("Profile updated successfully!");
        } catch (error) {
            setMessage("Failed to update profile.");
        }
            
    };

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">User Profile</h2>
            {message && <p className="text-green-600 mb-4">{message}</p>}
            <form onSubmit={handleSubmit}>
                <label className="block mb-2">Username</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-4"
                />

                <label className="block mb-2">Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-4"
                />

                <label className="block mb-2">New Password</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-4"
                />

                <button type="submit" className="bg-blue-600 text-white p-2 rounded w-full">
                   Update Profile
                </button>
            </form>
        </div>
    );
};

export default Profile;
