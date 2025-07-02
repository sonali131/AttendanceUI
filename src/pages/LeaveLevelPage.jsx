// src/pages/LeaveLevelPage.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";

const LeaveLevelPage = () => {
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleLevelUp = async () => {
    setLoading(true);

    try {
      // Simulating API request
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // If using real API, replace above with:
      // const response = await fetch("/api/leave-level-up", { method: "POST" });
      // const result = await response.json();

      setSnackbar({
        open: true,
        message: "Leave level up request sent successfully!",
        severity: "success",
      });
    } catch {
      setSnackbar({
        open: true,
        message: "Failed to send leave level up request.",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ p: 4, ml: 25 }}>
      <Typography variant="h4" gutterBottom>
        Leave Level Request
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        This section allows employees to request for a leave approval level
        escalation or check leave-related status level.
      </Typography>

      <Button variant="contained" onClick={handleLevelUp} disabled={loading}>
        {loading ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          "Request Level Approval"
        )}
      </Button>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert
          severity={snackbar.severity}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default LeaveLevelPage;
// src/pages/LeaveLevelPage.jsx
// import React, { useState } from "react";
// import { Box, Button, Snackbar, Alert } from "@mui/material";

// const LeaveLevelPage = ({ employeeId, onLeaveRequest }) => {
//   const [loading, setLoading] = useState(false);
//   const [snackbar, setSnackbar] = useState({
//     open: false,
//     message: "",
//     severity: "success",
//   });

//   const handleLevelUp = async () => {
//     setLoading(true);
//     try {
//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       // Callback to parent to remove employee
//       onLeaveRequest(employeeId);

//       setSnackbar({
//         open: true,
//         message: "You have successfully left the company!",
//         severity: "success",
//       });
//     } catch {
//       setSnackbar({
//         open: true,
//         message: "Error processing leave request",
//         severity: "error",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Box sx={{ mt: 1 }}>
//       <Button
//         variant="outlined"
//         color="error"
//         onClick={handleLevelUp}
//         disabled={loading}
//       >
//         {loading ? "Processing..." : "Leave"}
//       </Button>
//       <Snackbar
//         open={snackbar.open}
//         autoHideDuration={3000}
//         onClose={() => setSnackbar({ ...snackbar, open: false })}
//       >
//         <Alert severity={snackbar.severity}>{snackbar.message}</Alert>
//       </Snackbar>
//     </Box>
//   );
// };

// export default LeaveLevelPage;
