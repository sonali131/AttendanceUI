import React from "react";
// --- 1. Zaroori cheezein import karein ---
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  useTheme,
} from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useAuth } from "../contexts/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
// --- 2. Apna naya ThemeContext import karein ---
import { useThemeContext } from "../contexts/ThemeContext.jsx";

const Navbar = ({ drawerWidth }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // --- 3. Theme aur toggle function ko context se nikalein ---
  const muiTheme = useTheme(); // Ye MUI ka built-in hook hai
  const { toggleColorMode } = useThemeContext();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <AppBar
      position="fixed"
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          Smart Attendance System
        </Typography>
        <Typography sx={{ mr: 2 }}>Welcome, {user?.name}</Typography>

        {/* --- 4. Theme toggle button add karein --- */}
        <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
          {muiTheme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
        </IconButton>

        <Button color="inherit" onClick={handleLogout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
