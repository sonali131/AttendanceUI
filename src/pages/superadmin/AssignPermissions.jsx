import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Snackbar,
  Alert,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const AssignPermissions = () => {
  const [email, setEmail] = useState("");
  const [modules, setModules] = useState({
    attendance: false,
    leave: false,
    reports: false,
  });

  const [assigned, setAssigned] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    const assignedModules = Object.entries(modules)
      .filter(([, value]) => value)
      .map(([key]) => key);

    setAssigned([...assigned, { email, modules: assignedModules }]);
    setEmail("");
    setModules({ attendance: false, leave: false, reports: false });
    setSuccess(true);
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", p: 3 }}>
      <Paper sx={{ p: 4, mb: 4 }} elevation={3}>
        <Typography variant="h5" gutterBottom>
          Assign Access Permissions
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="User Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
          />
          <FormGroup>
            {["attendance", "leave", "reports"].map((mod) => (
              <FormControlLabel
                key={mod}
                control={
                  <Checkbox
                    checked={modules[mod]}
                    onChange={() =>
                      setModules({ ...modules, [mod]: !modules[mod] })
                    }
                  />
                }
                label={mod.charAt(0).toUpperCase() + mod.slice(1)}
              />
            ))}
          </FormGroup>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Assign Permissions
          </Button>
        </form>
      </Paper>

      {assigned.length > 0 && (
        <Paper sx={{ p: 3 }} elevation={2}>
          <Typography variant="h6" gutterBottom>
            Assigned Permissions
          </Typography>
          <List>
            {assigned.map((entry, index) => (
              <ListItem key={index} alignItems="flex-start">
                <ListItemText
                  primary={`📧 ${entry.email}`}
                  secondary={`Modules: ${entry.modules.join(", ")}`}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      )}

      <Snackbar
        open={success}
        autoHideDuration={3000}
        onClose={() => setSuccess(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          severity="success"
          variant="filled"
          onClose={() => setSuccess(false)}
        >
          Permissions assigned successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AssignPermissions;
