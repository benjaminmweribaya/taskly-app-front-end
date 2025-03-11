import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
  Box,
  Card,
  CardActionArea,
  useMediaQuery,
} from "@mui/material";
import {
  Home as HomeIcon,
  ListAlt as TasksIcon,
  Person as ProfileIcon,
  Settings as SettingsIcon,
  ExitToApp as LogoutIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import LoginModal from "../auth/LoginModal";
import { useTheme } from "@mui/system";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const navigate = useNavigate();
  
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md")); 

  const handleLogout = async () => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      alert("You are already logged out!");
      setShowLoginModal(true);
      navigate("/");
      return;
    }

    try {
      const response = await fetch("https://taskly-app-q35u.onrender.com/logout", {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");

        alert("Logged out successfully!");

        navigate("/");
        setShowLoginModal(true);
      } else {
        alert(data.error || "Logout failed!");
      }
    } catch (error) {
      console.error("Logout error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const navigationLinks = [
    { name: "Dashboard", icon: <HomeIcon />, path: "/workspace/dashboard" },
    { name: "Task Lists", icon: <TasksIcon />, path: "/workspace/tasks-list" },
    { name: "Shareboard", icon: <TasksIcon />, path: "/workspace/shareboard" },
    { name: "Profile", icon: <ProfileIcon />, path: "/workspace/profile" },
    { name: "Settings", icon: <SettingsIcon />, path: "/workspace/settings" },
    { name: "Home", icon: <HomeIcon />, path: "/" },
  ];

    return (
        <>
      {/* Sidebar for Large Screens */}
      {isLargeScreen ? (
        <Box
          sx={{
            width: 250,
            bgcolor: "#1E1E1E",
            color: "white",
            height: "100vh",
            position: "fixed",
            top: 0,
            left: 0,
            padding: "20px",
          }}
        >
          {/* Sidebar Header */}
          <Typography variant="h6" fontWeight="bold">
            Taskly App
          </Typography>

          {/* Navigation List */}
          <List>
            {navigationLinks.map((link) => (
              <ListItem key={link.name} disablePadding>
                <Card sx={{ width: "100%", bgcolor: "primary.main", my: 1 }}>
                  <CardActionArea
                    component={Link}
                    to={link.path}
                    sx={{ display: "flex", alignItems: "center", p: 1 }}
                  >
                    <ListItemIcon sx={{ color: "white" }}>{link.icon}</ListItemIcon>
                    <ListItemText primary={link.name} sx={{ color: "white" }} />
                  </CardActionArea>
                </Card>
              </ListItem>
            ))}
            {/* Logout Button */}
            <ListItem disablePadding>
              <Card sx={{ width: "100%", bgcolor: "error.main", my: 1 }}>
                <CardActionArea onClick={handleLogout} sx={{ display: "flex", alignItems: "center", p: 1 }}>
                  <ListItemIcon sx={{ color: "white" }}>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText primary="Logout" sx={{ color: "white" }} />
                </CardActionArea>
              </Card>
            </ListItem>
          </List>
        </Box>
      ) : (
        /* Drawer for Small Screens */
        <Drawer
          anchor="left"
          open={isOpen}
          onClose={() => setIsOpen(false)}
          sx={{
            "& .MuiDrawer-paper": {
              bgcolor: "#1E1E1E",
              color: "white",
              width: 250,
              padding: "20px",
            },
          }}
        >
          {/* Sidebar Header */}
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h6" fontWeight="bold">
              Taskly App
            </Typography>
            <IconButton onClick={() => setIsOpen(false)} sx={{ color: "white" }}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Navigation List */}
          <List>
            {navigationLinks.map((link) => (
              <ListItem key={link.name} disablePadding>
                <Card sx={{ width: "100%", bgcolor: "primary.main", my: 1 }}>
                  <CardActionArea
                    component={Link}
                    to={link.path}
                    sx={{ display: "flex", alignItems: "center", p: 1 }}
                  >
                    <ListItemIcon sx={{ color: "white" }}>{link.icon}</ListItemIcon>
                    <ListItemText primary={link.name} sx={{ color: "white" }} />
                  </CardActionArea>
                </Card>
              </ListItem>
            ))}
            {/* Logout Button */}
            <ListItem disablePadding>
              <Card sx={{ width: "100%", bgcolor: "error.main", my: 1 }}>
                <CardActionArea onClick={handleLogout} sx={{ display: "flex", alignItems: "center", p: 1 }}>
                  <ListItemIcon sx={{ color: "white" }}>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText primary="Logout" sx={{ color: "white" }} />
                </CardActionArea>
              </Card>
            </ListItem>
          </List>
        </Drawer>
      )}

      {/* Show Login Modal */}
      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
    </>
  );
};

export default Sidebar;


