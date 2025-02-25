import { useState } from "react";

const TaskForm = ({ onSubmit, task }) => {
  const [title, setTitle] = useState(task ? task.title : "");
  const [description, setDescription] = useState(task ? task.description : "");
  const [dueDate, setDueDate] = useState(task ? task.dueDate : "");
  const [priority, setPriority] = useState(task ? task.priority : "low");
  const [assignee, setAssignee] = useState(task ? task.assignee : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, dueDate, priority, assignee });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded-lg">
      <div className="mb-4">
        <label className="block text-gray-700">Title</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea
          className="w-full p-2 border rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Due Date</label>
        <input
          type="date"
          className="w-full p-2 border rounded"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Priority</label>
        <select
          className="w-full p-2 border rounded"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Assignee</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        {task ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default TaskForm;
