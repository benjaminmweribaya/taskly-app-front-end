import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const TaskForm = ({ onSubmit, task }) => {
  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string(),
    dueDate: Yup.date().required("Due date is required"),
    priority: Yup.string().oneOf(["low", "medium", "high"], "Invalid priority").required(),
    assignee: Yup.string().required("Assignee is required"),
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 ml-60 p-6">
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">
          {task ? "Update Task" : "Add Task"}
        </h2>

        <Formik
          initialValues={{
            title: task?.title || "",
            description: task?.description || "",
            dueDate: task?.dueDate || "",
            priority: task?.priority || "low",
            assignee: task?.assignee || "",
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label className="block text-gray-700">Title</label>
                <Field
                  type="text"
                  name="title"
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name="title" component="p" className="text-red-500 text-sm" />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Description</label>
                <Field
                  as="textarea"
                  name="description"
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name="description" component="p" className="text-red-500 text-sm" />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Due Date</label>
                <Field
                  type="date"
                  name="dueDate"
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name="dueDate" component="p" className="text-red-500 text-sm" />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Priority</label>
                <Field
                  as="select"
                  name="priority"
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </Field>
                <ErrorMessage name="priority" component="p" className="text-red-500 text-sm" />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Assignee</label>
                <Field
                  type="text"
                  name="assignee"
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name="assignee" component="p" className="text-red-500 text-sm" />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-all"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : task ? "Update Task" : "Add Task"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default TaskForm;
