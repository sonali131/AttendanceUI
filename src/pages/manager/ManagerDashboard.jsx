// 📁 src/pages/manager/ManagerDashboard.jsx
import React from "react";
import AttendanceChart from "../../components/AttendanceChart";
import { Typography, Box } from "@mui/material";

const ManagerDashboard = () => {
  return (
    <Box>
      <AttendanceChart role="manager" />
      <Typography variant="h5" mt={4} fontWeight="bold"></Typography>
    </Box>
  );
};

export default ManagerDashboard;
