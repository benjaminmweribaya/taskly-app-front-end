import TaskComments from "./TaskComments";
import { useParams } from "react-router-dom";

const TaskDetails = () => {
  const { taskId } = useParams(); 

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Task Details</h1>
      <p className="text-gray-600 mb-4">
        Here you can see task details and discuss with your team.
      </p>

      <div className="border p-4 rounded bg-gray-100">
        <h2 className="text-lg font-semibold">Task Title: Sample Task</h2>
        <p className="text-sm text-gray-500">Assigned to: John Doe</p>
        <p className="text-sm text-gray-500">Due Date: 2025-02-28</p>
        <p className="mt-2">
          Description: This is a placeholder description for the task.
        </p>
      </div>

      <div className="mt-6">
        <TaskComments taskId={taskId} />
      </div>
    </div>
  );
};

export default TaskDetails;
