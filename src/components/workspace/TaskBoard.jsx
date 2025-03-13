import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Typography, List, ListItem, ListItemText } from "@mui/material";

const TaskBoard = ({ task, onEditTask, onDragStart }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState({ ...task });
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    const handleAddComment = () => {
        if (newComment.trim() !== "") {
            setComments([...comments, newComment]);
            setNewComment("");
        }
    };

    const handleSaveChanges = () => {
        onEditTask(editedTask);
        setIsEditing(false);
    };

    return (
        <div>
            {task && (
                <div onClick={() => setIsExpanded(true)} className="cursor-pointer p-4 bg-white shadow rounded-lg">
                    <Typography variant="h6" fontWeight="bold">{task.title}</Typography>
                    <Typography variant="body2" color="textSecondary">Assigned to: {task.assignedTo}</Typography>
                </div>
            )}

            <Dialog open={isExpanded} onClose={() => setIsExpanded(false)} fullWidth maxWidth="sm">
                <DialogTitle>
                    {isEditing ? (
                        <TextField
                            fullWidth
                            value={editedTask.title}
                            onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
                        />
                    ) : (
                        task.title
                    )}
                </DialogTitle>
                <DialogContent>
                    {isEditing ? (
                        <>
                            <TextField
                                label="Description"
                                fullWidth
                                multiline
                                value={editedTask.description}
                                onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
                                className="mb-2"
                            />
                            <TextField
                                label="Assigned to"
                                fullWidth
                                value={editedTask.assignedTo}
                                onChange={(e) => setEditedTask({ ...editedTask, assignedTo: e.target.value })}
                            />
                            <TextField
                                label="Priority"
                                fullWidth
                                value={editedTask.priority}
                                onChange={(e) => setEditedTask({ ...editedTask, priority: e.target.value })}
                            />
                            <TextField
                                label="Due Date"
                                fullWidth
                                type="date"
                                value={editedTask.dueDate}
                                onChange={(e) => setEditedTask({ ...editedTask, dueDate: e.target.value })}
                            />
                        </>
                    ) : (
                        <>
                            <Typography variant="body1" paragraph>{task.description}</Typography>
                            <Typography variant="body2" color="textSecondary">Assigned to: {task.assignedTo}</Typography>
                            <Typography variant="body2" color="textSecondary">Priority: {task.priority}</Typography>
                            <Typography variant="body2" color="textSecondary">Due Date: {task.dueDate}</Typography>
                        </>
                    )}

                    <Typography variant="h6" className="mt-4">Comments</Typography>
                    <List>
                        {comments.map((comment, index) => (
                            <ListItem key={index} divider>
                                <ListItemText primary={comment} />
                            </ListItem>
                        ))}
                    </List>


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


                <DialogActions>
                    <Button onClick={() => setIsExpanded(false)} color="secondary">Close</Button>
                    {isEditing ? (
                        <Button onClick={handleSaveChanges} color="primary" variant="contained">Save</Button>
                    ) : (
                        <Button onClick={() => setIsEditing(true)} color="primary">Edit</Button>
                    )}
                    <Button onClick={handleAddComment} color="primary" variant="contained">Add Comment</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default TaskBoard;
