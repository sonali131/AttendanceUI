import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";

const ChangePasswordPage = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success"); // or 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { newPassword, confirmPassword } = formData;

    if (newPassword !== confirmPassword) {
      setSnackbarMessage("New passwords do not match!");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return;
    }

    // Simulate password update
    console.log("Password change submitted:", formData);

    // Show success message
    setSnackbarMessage("Your password has been changed!");
    setSnackbarSeverity("success");
    setSnackbarOpen(true);

    // Optional: Clear form
    setFormData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  return (
    <Box maxWidth={500} mx="auto" mt={4}>
      <Typography variant="h5" gutterBottom>
        Change Password
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Current Password"
          type="password"
          name="currentPassword"
          fullWidth
          margin="normal"
          value={formData.currentPassword}
          onChange={handleChange}
        />
        <TextField
          label="New Password"
          type="password"
          name="newPassword"
          fullWidth
          margin="normal"
          value={formData.newPassword}
          onChange={handleChange}
        />
        <TextField
          label="Confirm New Password"
          type="password"
          name="confirmPassword"
          fullWidth
          margin="normal"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <Button variant="contained" type="submit" sx={{ mt: 2 }}>
          Update Password
        </Button>
      </form>

      {/* Snackbar Notification */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ChangePasswordPage;
