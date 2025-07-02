// // src/pages/DashboardPage.jsx
// import { useAuth } from "../contexts/AuthContext";
// import { Typography, Box } from "@mui/material";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar, Line } from "react-chartjs-2";
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const DashboardPage = () => {
//   const { user } = useAuth();
//   return (
//     <Box p={3}>
//       <Typography variant="h4">Welcome, {user?.name}</Typography>
//       <Typography variant="subtitle1">Role: {user?.role}</Typography>
//     </Box>
//   );
// };

// export default DashboardPage;

//--new code
// src/pages/DashboardPage.jsx
// src/pages/DashboardPage.jsx (REPLACE YOUR FILE WITH THIS)
// import React, { useState, useEffect, useMemo } from "react";
// import { useAuth } from "../contexts/AuthContext";
// import { Typography, Box, Grid, Paper, CircularProgress } from "@mui/material";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar, Line } from "react-chartjs-2";
// import { apiGetAttendance } from "../api/mock";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const DashboardPage = () => {
//   const { user } = useAuth();
//   const [attendanceData, setAttendanceData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchAttendance = async () => {
//       // Don't fetch if there's no user or user.id
//       if (!user?.id) {
//         setLoading(false);
//         return;
//       }
//       try {
//         setLoading(true);
//         const data = await apiGetAttendance(user.id);
//         setAttendanceData(Array.isArray(data) ? data : []);
//       } catch (error) {
//         console.error("API Error fetching attendance:", error);
//         setAttendanceData([]);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchAttendance();
//   }, [user]);

//   // Your useMemo for chartData is correct, no changes needed there.
//   const chartData = useMemo(() => {
//     if (!attendanceData || attendanceData.length === 0) {
//       return { barChartData: null, lineChartData: null };
//     }
//     // ... your data processing logic ...
//     const attendanceSummary = attendanceData.reduce((acc, record) => {
//       acc[record.status] = (acc[record.status] || 0) + 1;
//       return acc;
//     }, {});
//     const barChartData = {
//       labels: Object.keys(attendanceSummary),
//       datasets: [
//         {
//           label: "Attendance Status Count",
//           data: Object.values(attendanceSummary),
//           backgroundColor: [
//             "rgba(75, 192, 192, 0.6)",
//             "rgba(255, 99, 132, 0.6)",
//             "rgba(255, 206, 86, 0.6)",
//             "rgba(153, 102, 255, 0.6)",
//           ],
//           borderWidth: 1,
//         },
//       ],
//     };
//     const dailyHours = attendanceData.map((record) => {
//       if (record.status === "Present" && record.inTime && record.outTime) {
//         const inTime = new Date(`1970-01-01T${record.inTime}:00`);
//         const outTime = new Date(`1970-01-01T${record.outTime}:00`);
//         const diffMs = outTime - inTime;
//         return Math.round((diffMs / (1000 * 60 * 60)) * 10) / 10;
//       }
//       return 0;
//     });
//     const lineChartData = {
//       labels: attendanceData.map((record) =>
//         new Date(record.date).toLocaleDateString("en-GB", {
//           day: "numeric",
//           month: "short",
//         })
//       ),
//       datasets: [
//         {
//           label: "Hours Worked Per Day",
//           data: dailyHours,
//           fill: true,
//           backgroundColor: "rgba(75, 192, 192, 0.2)",
//           borderColor: "rgb(75, 192, 192)",
//           tension: 0.3,
//         },
//       ],
//     };
//     return { barChartData, lineChartData };
//   }, [attendanceData]);

//   // This function will decide what to render: spinner, no-data message, or the charts.
//   const renderContent = () => {
//     if (loading) {
//       return (
//         <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
//           <CircularProgress />
//         </Box>
//       );
//     }

//     if (attendanceData.length === 0) {
//       return (
//         <Paper
//           sx={{ p: 3, mt: 4, textAlign: "center", backgroundColor: "#fffbe6" }}
//         >
//           <Typography variant="h6">No Attendance Data Found</Typography>
//           <Typography variant="body1" sx={{ mt: 1 }}>
//             Could not find any attendance records for your account. Please check
//             your employee ID or contact support.
//           </Typography>
//         </Paper>
//       );
//     }

//     return (
//       <Grid container spacing={3} mt={2}>
//         <Grid item xs={12} md={6}>
//           <Paper sx={{ p: 2 }}>
//             <Typography variant="h6" gutterBottom>
//               This Month's Attendance
//             </Typography>
//             {chartData.barChartData && (
//               <Bar
//                 data={chartData.barChartData}
//                 options={{ responsive: true }}
//               />
//             )}
//           </Paper>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Paper sx={{ p: 2 }}>
//             <Typography variant="h6" gutterBottom>
//               Daily Work Hours
//             </Typography>
//             {chartData.lineChartData && (
//               <Line
//                 data={chartData.lineChartData}
//                 options={{ responsive: true }}
//               />
//             )}
//           </Paper>
//         </Grid>
//       </Grid>
//     );
//   };

//   return (
//     <Box>
//       <Typography variant="h4" gutterBottom>
//         Welcome, {user?.name}
//       </Typography>
//       <Typography variant="subtitle1" gutterBottom>
//         Role: {user?.role}
//       </Typography>
//       {renderContent()}
//     </Box>
//   );
// };

// export default DashboardPage;
// src/pages/DashboardPage.jsx (Updated for @mui/x-charts)

import { useState, useEffect, useMemo } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Typography, Box, Grid, Paper, CircularProgress } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart"; // <-- Import from @mui/x-charts
import { LineChart } from "@mui/x-charts/LineChart";

// Mock API import
import { apiGetAttendance } from "../api/mock";

const DashboardPage = () => {
  const { user } = useAuth();
  const [attendanceData, setAttendanceData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAttendance = async () => {
      if (!user?.id) {
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        const data = await apiGetAttendance(user.id);
        setAttendanceData(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("API Error fetching attendance:", error);
        setAttendanceData([]);
      } finally {
        setLoading(false);
      }
    };
    fetchAttendance();
  }, [user]);

  // --- Data processing for @mui/x-charts ---

  // Bar Chart Data
  const barChartData = useMemo(() => {
    if (attendanceData.length === 0) return null;

    // Convert data to a format that @mui/x-charts understands
    const summary = attendanceData.reduce((acc, record) => {
      acc[record.status] = (acc[record.status] || 0) + 1;
      return acc;
    }, {});

    return {
      dataset: [summary], // Needs to be an array of objects
      xAxis: [{ scaleType: "band", data: Object.keys(summary) }],
      series: [{ data: Object.values(summary), label: "Count" }],
      height: 300,
    };
  }, [attendanceData]);

  // Line Chart Data
  const lineChartData = useMemo(() => {
    if (attendanceData.length === 0) return null;

    const presentDays = attendanceData.filter(
      (r) => r.status === "Present" && r.inTime && r.outTime
    );

    const workingHours = presentDays.map((record) => {
      const inTime = new Date(`1970-01-01T${record.inTime}:00`);
      const outTime = new Date(`1970-01-01T${record.outTime}:00`);
      const diffMs = outTime - inTime;
      return Math.round((diffMs / (1000 * 60 * 60)) * 10) / 10;
    });

    const dates = presentDays.map((record) =>
      new Date(record.date).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
      })
    );

    return {
      xAxis: [{ scaleType: "point", data: dates }],
      series: [{ data: workingHours, label: "Hours Worked", area: true }],
      height: 300,
    };
  }, [attendanceData]);

  const renderContent = () => {
    if (loading) {
      return (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      );
    }
    if (attendanceData.length === 0) {
      return (
        <Paper sx={{ p: 3, mt: 4, textAlign: "center" }}>
          <Typography variant="h6">No attendance data found.</Typography>
        </Paper>
      );
    }
    return (
      <Grid container spacing={3} mt={2}>
        {/* Bar Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              This Month's Attendance
            </Typography>
            {barChartData && <BarChart {...barChartData} />}
          </Paper>
        </Grid>

        {/* Line Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Daily Work Hours
            </Typography>
            {lineChartData && <LineChart {...lineChartData} />}
          </Paper>
        </Grid>
      </Grid>
    );
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Welcome, {user?.name}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Role: {user?.role}
      </Typography>
      {renderContent()}
    </Box>
  );
};

export default DashboardPage;
