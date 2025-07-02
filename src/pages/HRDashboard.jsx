// // src/pages/HRDashboard.jsx
// import React from "react";
// import { Box, Typography, Grid, Paper } from "@mui/material";

// const HRDashboard = () => {
//   return (
//     <Box sx={{ p: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         HR Dashboard
//       </Typography>

//       <Grid container spacing={2}>
//         <Grid item xs={12} sm={6} md={4}>
//           <Paper elevation={3} sx={{ p: 2 }}>
//             <Typography variant="h6">Total Employees</Typography>
//             <Typography variant="h4">52</Typography>
//           </Paper>
//         </Grid>

//         <Grid item xs={12} sm={6} md={4}>
//           <Paper elevation={3} sx={{ p: 2 }}>
//             <Typography variant="h6">Present Today</Typography>
//             <Typography variant="h4">47</Typography>
//           </Paper>
//         </Grid>

//         <Grid item xs={12} sm={6} md={4}>
//           <Paper elevation={3} sx={{ p: 2 }}>
//             <Typography variant="h6">On Leave</Typography>
//             <Typography variant="h4">5</Typography>
//           </Paper>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default HRDashboard;
import React from "react";
import { Box, Typography, Grid, Paper, Avatar } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EventBusyIcon from "@mui/icons-material/EventBusy";

const stats = [
  {
    label: "Total Employees",
    value: 52,
    icon: <PeopleIcon />,
    color: "#1976d2",
  },
  {
    label: "Present Today",
    value: 47,
    icon: <CheckCircleIcon />,
    color: "#2e7d32",
  },
  {
    label: "On Leave",
    value: 5,
    icon: <EventBusyIcon />,
    color: "#d32f2f",
  },
];

const HRDashboard = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" fontWeight={600} gutterBottom>
        HR Dashboard
      </Typography>

      <Grid container spacing={3}>
        {stats.map((item, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Paper
              elevation={4}
              sx={{
                p: 3,
                borderRadius: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#f9f9f9",
              }}
            >
              <Box>
                <Typography variant="subtitle1" color="text.secondary">
                  {item.label}
                </Typography>
                <Typography variant="h4" fontWeight={700}>
                  {item.value}
                </Typography>
              </Box>
              <Avatar
                sx={{
                  bgcolor: item.color,
                  width: 56,
                  height: 56,
                  boxShadow: 3,
                }}
              >
                {item.icon}
              </Avatar>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HRDashboard;
