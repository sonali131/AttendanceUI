// File: src/pages/admin/Dashboard.jsx
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
  Box,
  Paper,
  Container,
} from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const stats = [
  {
    label: "Total Employees",
    value: 120,
    icon: <GroupIcon />,
    bgColor: "#1976d2",
  },
  {
    label: "Present Today",
    value: 95,
    icon: <EventAvailableIcon />,
    bgColor: "#2e7d32",
  },
  {
    label: "On Leave",
    value: 10,
    icon: <BeachAccessIcon />,
    bgColor: "#f57c00",
  },
];

const attendanceTrend = [
  { date: "Mon", present: 90, absent: 10 },
  { date: "Tue", present: 95, absent: 5 },
  { date: "Wed", present: 92, absent: 8 },
  { date: "Thu", present: 97, absent: 3 },
  { date: "Fri", present: 94, absent: 6 },
];

const leaveStats = [
  { type: "Sick", count: 5 },
  { type: "Casual", count: 3 },
  { type: "Paid", count: 2 },
];

const AdminDashboard = () => {
  return (
    <Container maxWidth="xl">
      <Box py={3}>
        <Typography variant="h5" gutterBottom>
          Admin Dashboard
        </Typography>

        <Grid container spacing={4}>
          {stats.map((stat, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card
                sx={{
                  display: "flex",
                  alignItems: "center",
                  p: 2,
                  boxShadow: 3,
                  height: "100%",
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: stat.bgColor,
                    width: 56,
                    height: 56,
                    mr: 2,
                  }}
                >
                  {stat.icon}
                </Avatar>
                <Box>
                  <Typography variant="subtitle2" color="textSecondary">
                    {stat.label}
                  </Typography>
                  <Typography variant="h5" fontWeight="bold">
                    {stat.value}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={4} mt={1}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="subtitle1" gutterBottom>
                Weekly Attendance Trend
              </Typography>
              <ResponsiveContainer width="100%" height={280}>
                <LineChart data={attendanceTrend}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="present" stroke="#2e7d32" />
                  <Line type="monotone" dataKey="absent" stroke="#d32f2f" />
                </LineChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="subtitle1" gutterBottom>
                Leave Type Distribution
              </Typography>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={leaveStats}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="type" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#1976d2" />
                </BarChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AdminDashboard;
