import { useState } from "react";

const TaskComments = ({ taskId }) => {
  const [comments, setComments] = useState([
    { id: 1, text: "This task needs to be completed by Friday.", author: "Alice" },
    { id: 2, text: "I'll handle the backend part.", author: "Bob" }
  ]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() === "") return;

    const newCommentObj = {
      id: comments.length + 1,
      text: newComment,
      author: "You" 
    };

    setComments([...comments, newCommentObj]);
    setNewComment("");
  };

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-semibold mb-3">Comments</h2>
      
      <div className="space-y-2">
        {comments.map((comment) => (
          <div key={comment.id} className="p-2 bg-gray-100 rounded">
            <p className="text-sm">
              <strong>{comment.author}:</strong> {comment.text}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-3 flex gap-2">
        <input
          type="text"
          className="border p-2 flex-grow rounded"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleAddComment}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default TaskComments;
