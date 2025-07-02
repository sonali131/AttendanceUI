// src/layouts/DashboardLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import Sidebar from "../components/Sidebar"; // We will create this next
import Navbar from "../components/Navbar"; // And this one too

const DRAWER_WIDTH = 240;

const DashboardLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Navbar drawerWidth={DRAWER_WIDTH} />
      <Sidebar drawerWidth={DRAWER_WIDTH} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
        }}
      >
        <Toolbar /> {/* This is a spacer for the fixed Navbar */}
        <Outlet /> {/* Child routes will be rendered here */}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
