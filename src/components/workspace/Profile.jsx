import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Camera, Settings } from "lucide-react";
import { Avatar, Box, Button, Card, CardContent, Typography, Container } from "@mui/material";

const Profile = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);

    const avatarUrl = user?.username
        ? `https://api.dicebear.com/7.x/identicon/svg?seed=${user.username}`
        : "/default-avatar.png";

    return (
        <Container maxWidth="md" sx={{ ml: { md: 28, lg: 32 }, mt: 4, px: 2 }}>
            <Card sx={{ p: 4, textAlign: "center", boxShadow: 3 }}>
                <Box sx={{ position: "relative", display: "inline-block" }}>
                    <Avatar
                        src={avatarUrl}
                        alt="Profile"
                        sx={{ width: 128, height: 128, border: "2px solid #ccc" }}
                    />
                    <Button
                        size="small"
                        sx={{
                            position: "absolute",
                            bottom: 8,
                            right: 8,
                            bgcolor: "grey.700",
                            color: "white",
                            "&:hover": { bgcolor: "grey.800" },
                            minWidth: "auto",
                            p: 0.5,
                        }}
                        onClick={() => setIsEditing(true)}
                    >
                        <Camera size={18} />
                    </Button>
                </Box>
                <CardContent>
                    <Typography variant="h5" fontWeight="bold">
                        {user?.username || "Guest User"}
                    </Typography>
                    <Typography color="textSecondary">
                        {user?.email || "No email available"}
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3 }}
                        startIcon={<Settings />}
                        onClick={() => navigate("/workspace/settings")}
                    >
                        Settings
                    </Button>
                </CardContent>
            </Card>
        </Container>
    );
};

export default Profile;
