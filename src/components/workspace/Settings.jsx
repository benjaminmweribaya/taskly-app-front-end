import { useAuth } from "../../context/AuthContext";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Box, Button, Card, CardContent, TextField, Typography, Alert, Container } from "@mui/material";

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
        <Container maxWidth="sm" sx={{ ml: { md: 28, lg: 32 }, mt: 4, px: 2 }}>
            <Card sx={{ p: 4, boxShadow: 3 }}>
                <Typography variant="h5" fontWeight="bold" textAlign="center" mb={2}>
                    ⚙️ Settings
                </Typography>

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
                            {status?.error && <Alert severity="error" sx={{ mb: 2 }}>{status.error}</Alert>}
                            {status?.success && <Alert severity="success" sx={{ mb: 2 }}>{status.success}</Alert>}

                            <Box mb={2}>
                                <Field
                                    name="username"
                                    as={TextField}
                                    label="Username"
                                    fullWidth
                                    variant="outlined"
                                    error={status?.username}
                                    helperText={<ErrorMessage name="username" />}
                                />
                            </Box>

                            <Box mb={2}>
                                <Field
                                    name="email"
                                    as={TextField}
                                    label="Email"
                                    fullWidth
                                    variant="outlined"
                                    error={status?.email}
                                    helperText={<ErrorMessage name="email" />}
                                />
                            </Box>

                            <Box mb={2}>
                                <Field
                                    name="currentPassword"
                                    as={TextField}
                                    type="password"
                                    label="Current Password"
                                    fullWidth
                                    variant="outlined"
                                    error={status?.currentPassword}
                                    helperText={<ErrorMessage name="currentPassword" />}
                                />
                            </Box>

                            <Box mb={2}>
                                <Field
                                    name="newPassword"
                                    as={TextField}
                                    type="password"
                                    label="New Password"
                                    fullWidth
                                    variant="outlined"
                                    error={status?.newPassword}
                                    helperText={<ErrorMessage name="newPassword" />}
                                />
                            </Box>

                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                sx={{ mt: 2, py: 1.2 }}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Updating..." : "Update Profile"}
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Card>
        </Container>
    );
}

export default Settings