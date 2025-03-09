import { useAuth } from "../../context/AuthContext";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Settings = () => {
    const { user, setUser } = useAuth();
    
    const validationSchema = Yup.object().shape({
        username: Yup.string().required("Username is required"),
        email: Yup.string().email("Invalid email format").required("Email is required"),
        currentPassword: Yup.string().required("Current password is required"),
        newPassword: Yup.string().min(6, "New password must be at least 6 characters"),
    });

    const handleSubmit = async (values, { setSubmitting, setStatus }) => {
        setStatus({ error: "", success: "" });

        try {
            const response = await axios.patch("/update-profile", values);
            setUser(response.data.user);
            setStatus({ success: "Profile updated successfully!" });
        } catch (error) {
            setStatus({ error: "Error updating profile. Please try again." });
        }

        setSubmitting(false);
    };

    return (
        <div className="flex-1 p-6 ml-60 md:ml-56 lg:ml-72 transition-all">
            <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4 text-center">⚙️ Settings</h2>

                <Formik
                    initialValues={{
                        username: user?.username || "",
                        email: user?.email || "",
                        currentPassword: "",
                        newPassword: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ status, isSubmitting }) => (
                        <Form>
                            {status?.error && <p className="text-red-500 text-sm text-center mb-3">{status.error}</p>}
                            {status?.success && <p className="text-green-500 text-sm text-center mb-3">{status.success}</p>}

                            <label className="block mb-2 text-gray-700">Username</label>
                            <Field type="text" name="username" className="w-full p-2 border rounded mb-2" />
                            <ErrorMessage name="username" component="p" className="text-red-500 text-xs mb-4" />

                            <label className="block mb-2 text-gray-700">Email</label>
                            <Field type="email" name="email" className="w-full p-2 border rounded mb-2" />
                            <ErrorMessage name="email" component="p" className="text-red-500 text-xs mb-4" />

                            <label className="block mb-2 text-gray-700">Current Password</label>
                            <Field type="password" name="currentPassword" className="w-full p-2 border rounded mb-2" required />
                            <ErrorMessage name="currentPassword" component="p" className="text-red-500 text-xs mb-4" />

                            <label className="block mb-2 text-gray-700">New Password</label>
                            <Field type="password" name="newPassword" className="w-full p-2 border rounded mb-2" />
                            <ErrorMessage name="newPassword" component="p" className="text-red-500 text-xs mb-4" />

                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg w-full"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Updating..." : "Update Profile"}
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default Settings