import React, { useState } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    Typography,
    List,
    ListItem,
    ListItemText
} from "@mui/material";

const TaskBoard = ({ task }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    const handleAddComment = () => {
        if (newComment.trim() !== "") {
            setComments([...comments, newComment]);
            setNewComment("");
        }
    };

    return (
        <div>
            {/* Clickable Task Summary */}
            <div onClick={() => setIsExpanded(true)} className="cursor-pointer p-4 bg-white shadow rounded-lg">
                <Typography variant="h6" fontWeight="bold">{task.title}</Typography>
                <Typography variant="body2" color="textSecondary">Assigned to: {task.assignedTo}</Typography>
            </div>

            {/* Task Details Pop-up */}
            <Dialog open={isExpanded} onClose={() => setIsExpanded(false)} fullWidth maxWidth="sm">
                <DialogTitle>{task.title}</DialogTitle>
                <DialogContent>
                    <Typography variant="body1" paragraph>{task.description}</Typography>
                    <Typography variant="body2" color="textSecondary">Assigned to: {task.assignedTo}</Typography>
                    <Typography variant="body2" color="textSecondary">Priority: {task.priority}</Typography>
                    <Typography variant="body2" color="textSecondary">Due Date: {task.dueDate}</Typography>

                    {/* Comments Section */}
                    <Typography variant="h6" className="mt-4">Comments</Typography>
                    <List>
                        {comments.map((comment, index) => (
                            <ListItem key={index} divider>
                                <ListItemText primary={comment} />
                            </ListItem>
                        ))}
                    </List>

                    {/* Add Comment Input */}
                    <TextField
                        label="Add a comment"
                        fullWidth
                        variant="outlined"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && handleAddComment()}
                        className="mt-2"
                    />
                </DialogContent>

                {/* Actions */}
                <DialogActions>
                    <Button onClick={() => setIsExpanded(false)} color="secondary">Close</Button>
                    <Button onClick={handleAddComment} color="primary" variant="contained">Add Comment</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default TaskBoard;
