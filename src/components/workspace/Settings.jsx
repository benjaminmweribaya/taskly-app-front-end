import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";

const Settings = () => {
    const { user, setUser } = useAuth();
    const [formData, setFormData] = useState({
        username: user?.username || "",
        email: user?.email || "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.patch("/update-profile", formData);
            setUser(response.data.user);
            alert("Profile updated successfully");
        } catch (error) {
            alert("Error updating profile");
        }
    };

    return (
        <div className="p-6 max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Settings</h2>
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

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full"
                >
                    Update Profile
                </button>
            </form>
        </div>
    );
}

export default Settings