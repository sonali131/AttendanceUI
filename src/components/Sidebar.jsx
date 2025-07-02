// src/components/Sidebar.jsx (FINAL - With Manager Panel Updates)

import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Box,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";
import {
  People,
  Dashboard,
  Business,
  Work,
  Event,
  Assessment,
  Face,
  QrCodeScanner,
  Lock,
  AccountCircle,
  CloudUpload,
  AssignmentInd, // ✅ ensure this is included
  VpnKey,
  Apps, // ✅ ADD THIS
  Settings, // ✅ ADD THIS
} from "@mui/icons-material";
import CompanyLogo from "../assets/codelogo.jpg";

const sidebarConfig = {
  superadmin: [
    {
      text: "Dashboard",
      path: "/superadmin/dashboard",
      icon: <Dashboard />,
    },
    {
      text: "Create User",
      path: "/superadmin/create-user",
      icon: <People />,
    },
    {
      text: "Assign Permissions",
      path: "/superadmin/assign-permissions",
      icon: <AssignmentInd />,
    },
    {
      text: "Assign Modules",
      path: "/superadmin/assign-modules",
      icon: <Apps />,
    },
    {
      text: "Assign Submodules",
      path: "/superadmin/assign-submodules",
      icon: <Apps />,
    },
    {
      text: "Reset Password",
      path: "/superadmin/reset-password",
      icon: <VpnKey />,
    },
    {
      text: "Module Management",
      path: "/superadmin/modules",
      icon: <Business />,
    },
    {
      text: "Submodule Management",
      path: "/superadmin/modules/submodules",
      icon: <Settings />,
    },
  ],
  admin: [
    { text: "Dashboard", path: "/admin/dashboard", icon: <Dashboard /> },
    { text: "Employees", path: "/admin/employees", icon: <People /> },
    { text: "Leaves", path: "/admin/leaves", icon: <Event /> },
    { text: "Reports", path: "/admin/reports", icon: <Assessment /> },
    {
      text: "Smart Attendance",
      path: "/admin/smart-attendance",
      icon: <Face />,
    },
    {
      text: "QR Attendance",
      path: "/admin/qr-attendance",
      icon: <QrCodeScanner />,
    },
    { text: "Upload Face", path: "/admin/upload-face", icon: <CloudUpload /> },
    { text: "Bulk Upload", path: "/admin/bulk-upload", icon: <CloudUpload /> },
    {
      text: "Anomaly Review",
      path: "/admin/anomaly-review",
      icon: <Assessment />,
    },
  ],
  hr: [
    { text: "Dashboard", path: "/hr/dashboard", icon: <Dashboard /> },
    { text: "Employees", path: "/hr/employees", icon: <People /> },
    { text: "Leaves", path: "/hr/leaves", icon: <Event /> },
    { text: "Reports", path: "/hr/reports", icon: <Assessment /> },
  ],
  manager: [
    { text: "Team Dashboard", path: "/manager/dashboard", icon: <Dashboard /> },
    { text: "View Team", path: "/manager/employees", icon: <People /> },
    {
      text: "Upload Face Data",
      path: "/manager/upload-face",
      icon: <CloudUpload />,
    },
    {
      text: "Change Password",
      path: "/manager/change-password",
      icon: <Lock />,
    },
    {
      text: "Smart Attendance",
      path: "/manager/smart-attendance",
      icon: <Face />,
    },
    {
      text: "QR Attendance",
      path: "/manager/qr-attendance",
      icon: <QrCodeScanner />,
    },
    { text: "Team Leaves", path: "/manager/leaves", icon: <Event /> },
    { text: "Team Reports", path: "/manager/reports", icon: <Assessment /> },
    {
      text: "Monthly Report",
      path: "/manager/monthly-report",
      icon: <Assessment />,
    },
  ],
  employee: [
    { text: "My Dashboard", path: "/employee/dashboard", icon: <Dashboard /> },
    {
      text: "Mark Attendance",
      path: "/employee/mark-attendance",
      icon: <Face />,
    },
    { text: "Apply for Leave", path: "/employee/leave-apply", icon: <Work /> },
    {
      text: "My Attendance",
      path: "/employee/attendance-log",
      icon: <Assessment />,
    },
    {
      text: "Update Profile",
      path: "/employee/profile",
      icon: <AccountCircle />,
    },
    {
      text: "Change Password",
      path: "/employee/change-password",
      icon: <Lock />,
    },
  ],
};

const Sidebar = ({ drawerWidth }) => {
  const { user } = useAuth();
  const navItems = sidebarConfig[user?.role] || [];

  const drawerContent = (
    <div>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: 2,
        }}
      >
        <Box
          component="img"
          sx={{ height: 80, width: "auto" }}
          alt="Company Logo"
          src={CompanyLogo}
        />
      </Toolbar>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={NavLink}
              to={item.path}
              style={({ isActive }) => ({
                background: isActive ? "#e0e0e0" : "transparent",
              })}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      {drawerContent}
    </Drawer>
  );
};

export default Sidebar;
