import React, { useState } from "react";
import { Box, TextField, Button, Typography, Alert } from "@mui/material";

const ChangePasswordPagem = () => {
  const [form, setForm] = useState({ current: "", new: "" });
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    // Simulate password change logic
    setSuccess(true);

    // Optional: Clear form
    setForm({ current: "", new: "" });

    // Auto-hide message after 3 seconds
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Change Password
      </Typography>

      {success && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Password changed successfully!
        </Alert>
      )}

      <TextField
        label="Current Password"
        type="password"
        fullWidth
        margin="normal"
        value={form.current}
        onChange={(e) => setForm({ ...form, current: e.target.value })}
      />
      <TextField
        label="New Password"
        type="password"
        fullWidth
        margin="normal"
        value={form.new}
        onChange={(e) => setForm({ ...form, new: e.target.value })}
      />
      <Button onClick={handleSubmit} variant="contained" sx={{ mt: 2 }}>
        Change
      </Button>
    </Box>
  );
};

export default ChangePasswordPagem;
