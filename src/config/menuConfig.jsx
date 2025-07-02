// src/config/menuConfig.js
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import AssessmentIcon from "@mui/icons-material/Assessment";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

export const menuItems = [
  {
    text: "Dashboard",
    icon: <DashboardIcon />,
    path: "/dashboard",
    allowedRoles: ["Admin", "HR", "Manager", "Employee"],
  },
  {
    text: "My Profile",
    icon: <AccountBoxIcon />,
    path: "/profile",
    allowedRoles: ["Employee"],
  },
  // Super Admin
  {
    text: "User & Module Mgmt",
    icon: <AdminPanelSettingsIcon />,
    path: "/superadmin/users",
    allowedRoles: ["Super Admin"],
  },
  // Admin & HR
  {
    text: "Employee Management",
    icon: <PeopleIcon />,
    path: "/employees",
    allowedRoles: ["Admin", "HR"],
  },
  {
    text: "Attendance",
    icon: <FactCheckIcon />,
    path: "/attendance/smart",
    allowedRoles: ["Admin", "HR", "Manager"],
  },
  {
    text: "Leave Requests",
    icon: <WorkHistoryIcon />,
    path: "/leave/requests",
    allowedRoles: ["Admin", "HR", "Manager"],
  },
  {
    text: "Reports",
    icon: <AssessmentIcon />,
    path: "/reports/daily",
    allowedRoles: ["Admin", "HR", "Manager"],
  },
  // Employee
  {
    text: "My Attendance",
    icon: <FactCheckIcon />,
    path: "/my-attendance",
    allowedRoles: ["Employee"],
  },
  {
    text: "Apply for Leave",
    icon: <WorkHistoryIcon />,
    path: "/leave/request",
    allowedRoles: ["Employee"],
  },
];
