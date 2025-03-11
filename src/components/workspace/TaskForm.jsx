import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";

const TaskForm = ({ onSubmit, task, onClose }) => {
  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string("Description is required"),
    dueDate: Yup.date().required("Due date is required"),
    priority: Yup.string().oneOf(["low", "medium", "high"], "Invalid priority").required(),
    assignee: Yup.string().required("Assignee is required"),
  });

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.id === "modal-overlay") {
        onClose();
      }
    };

    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [onClose]);

  return (
    <div id="modal-overlay" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
   

      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
      <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose}>X</button>
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
            <Form className="space-y-4">
              <div>
                <label className="block text-gray-700">Title</label>
                <Field
                  type="text"
                  name="title"
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name="title" component="p" className="text-red-500 text-sm" />
              </div>

              <div>
                <label className="block text-gray-700">Description</label>
                <Field
                  as="textarea"
                  name="description"
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name="description" component="p" className="text-red-500 text-sm" />
              </div>

              <div>
                <label className="block text-gray-700">Due Date</label>
                <Field
                  type="date"
                  name="dueDate"
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name="dueDate" component="p" className="text-red-500 text-sm" />
              </div>

              <div>
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

              <div>
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






   

//   return (
//     <div id="modal-overlay" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
//         <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose}>X</button>
//         <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">
//           {task ? "Update Task" : "Add Task"}
//         </h2>

//         <Formik
//           initialValues={{
//             title: task?.title || "",
//             description: task?.description || "",
//             dueDate: task?.dueDate || "",
//             priority: task?.priority || "low",
//             assignee: task?.assignee || "",
//           }}
//           validationSchema={validationSchema}
//           onSubmit={onSubmit}
//         >
//           {({ isSubmitting }) => (
//             <Form className="space-y-4">
//               <div>
//                 <label className="block text-gray-700">Title</label>
//                 <Field type="text" name="title" className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500" />
//                 <ErrorMessage name="title" component="p" className="text-red-500 text-sm" />
//               </div>

//               <div>
//                 <label className="block text-gray-700">Description</label>
//                 <Field as="textarea" name="description" className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500" />
//                 <ErrorMessage name="description" component="p" className="text-red-500 text-sm" />
//               </div>

//               <div>
//                 <label className="block text-gray-700">Due Date</label>
//                 <Field type="date" name="dueDate" className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500" />
//                 <ErrorMessage name="dueDate" component="p" className="text-red-500 text-sm" />
//               </div>

//               <div>
//                 <label className="block text-gray-700">Priority</label>
//                 <Field as="select" name="priority" className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500">
//                   <option value="low">Low</option>
//                   <option value="medium">Medium</option>
//                   <option value="high">High</option>
//                 </Field>
//                 <ErrorMessage name="priority" component="p" className="text-red-500 text-sm" />
//               </div>

//               <div>
//                 <label className="block text-gray-700">Assignee</label>
//                 <Field type="text" name="assignee" className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500" />
//                 <ErrorMessage name="assignee" component="p" className="text-red-500 text-sm" />
//               </div>

//               <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-all" disabled={isSubmitting}>
//                 {isSubmitting ? "Processing..." : task ? "Update Task" : "Add Task"}
//               </button>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </div>
//   );
// };

// export default TaskForm;




