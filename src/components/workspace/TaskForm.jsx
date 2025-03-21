import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button, MenuItem, FormControl, InputLabel, Select, Typography, Paper, Box, } from "@mui/material";
import { useState, useEffect } from "react";
import api from "../../api/axios";

const TaskForm = ({ onTaskAdded, task, tasklistId, access_token }) => {
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get("/users/", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`
          }
        });
        setUsers(response.data.users);
      } catch (err) {
        console.error("Error fetching users:", err);
        setError("Failed to fetch users");
      }
    };

    fetchUsers();
  }, []);

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string(),
    dueDate: Yup.date().required("Due date is required"),
    priority: Yup.string()
      .oneOf(["low", "medium", "high"], "Invalid priority")
      .required("Priority is required"),
    assignee: Yup.string().nullable(),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setError(null);
    try {
      const taskResponse = await api.post("/tasks/", {
        title: values.title,
        description: values.description,
        due_date: values.dueDate,
        priority: values.priority,
        tasklist_id: tasklistId,
      },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      if (taskResponse.status === 201) {
        const taskId = taskResponse.data.id;

        if (values.assignee && values.assignee !== "") {
          await api.post(`/tasks/${taskId}/assign/`, {
            user_ids: [values.assignee],
          });
        }

        onTaskAdded(taskResponse.data);
        resetForm();
      }
    } catch (err) {
      console.error("Error adding task:", err);
      setError(err.response?.data?.error || "Failed to add task");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f4f6f8"
      p={3}
    >
      <Paper elevation={3} sx={{ width: "100%", maxWidth: 500, p: 4, borderRadius: 2 }}>
        <Typography variant="h5" align="center" fontWeight="bold" color="primary" gutterBottom>
          {task ? "Update Task" : "Add Task"}
        </Typography>

        <Formik
          initialValues={{
            title: task?.title || "",
            description: task?.description || "",
            dueDate: task?.dueDate || "",
            priority: task?.priority || "low",
            assignee: task?.assignee || "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <Box mb={2}>
                <TextField
                  fullWidth
                  label="Title"
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  variant="outlined"
                  error={Boolean(values.title && validationSchema.fields.title.validateSync(values.title))}
                  helperText={<ErrorMessage name="title" />}
                />
              </Box>

              <Box mb={2}>
                <TextField
                  fullWidth
                  label="Description"
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  variant="outlined"
                  multiline
                  rows={3}
                  error={Boolean(values.description && validationSchema.fields.description.validateSync(values.description))}
                  helperText={<ErrorMessage name="description" />}
                />
              </Box>

              <Box mb={2}>
                <TextField
                  fullWidth
                  label="Due Date"
                  name="dueDate"
                  type="date"
                  value={values.dueDate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  error={Boolean(values.dueDate && validationSchema.fields.dueDate.validateSync(values.dueDate))}
                  helperText={<ErrorMessage name="dueDate" />}
                />
              </Box>

              <Box mb={2}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Priority</InputLabel>
                  <Select
                    name="priority"
                    value={values.priority}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Priority"
                  >
                    <MenuItem value="low">Low</MenuItem>
                    <MenuItem value="medium">Medium</MenuItem>
                    <MenuItem value="high">High</MenuItem>
                  </Select>
                  <Typography variant="caption" color="error">
                    <ErrorMessage name="priority" />
                  </Typography>
                </FormControl>
              </Box>

              < Box mb={3}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Assignee  (Optional)</InputLabel>
                  <Select
                    name="assignee"
                    value={values.assignee}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Assignee (Optional)"
                  >
                    <MenuItem value="">None</MenuItem>
                    {users.map((user) => (
                      <MenuItem key={user.id} value={user.id}>
                        {user.username} ({user.email})
                      </MenuItem>
                    ))}
                  </Select>
                  <Typography variant="caption" color="error">
                    <ErrorMessage name="assignee" />
                  </Typography>
                </FormControl>
              </Box >

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                loading={isSubmitting}
              >
                {task ? "Update Task" : "Add Task"}
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Box>
  );
};

export default TaskForm;

