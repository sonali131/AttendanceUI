import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Paper,
  TextField,
  Select,
  MenuItem,
  Button,
  List,
  ListItem,
  ListItemText,
  InputLabel,
  FormControl,
  Snackbar,
  Alert,
} from "@mui/material";

const SubmoduleManagement = () => {
  const [modules] = useState([
    { id: "mod1", name: "Attendance" },
    { id: "mod2", name: "Leave" },
    { id: "mod3", name: "Reports" },
  ]);
  const [selectedModule, setSelectedModule] = useState("");
  const [submodules, setSubmodules] = useState([]);
  const [newSubmodule, setNewSubmodule] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // Dummy submodules when a module is selected
    if (selectedModule) {
      const dummy = {
        mod1: ["Smart Attendance", "QR Attendance"],
        mod2: ["Apply Leave", "Approve Leave"],
        mod3: ["Daily Report", "Monthly Report"],
      };
      setSubmodules(dummy[selectedModule] || []);
    }
  }, [selectedModule]);

  const handleAddSubmodule = () => {
    if (newSubmodule.trim()) {
      setSubmodules((prev) => [...prev, newSubmodule.trim()]);
      setNewSubmodule("");
      setSuccess(true);
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 6 }}>
      <Paper sx={{ p: 4 }} elevation={3}>
        <Typography variant="h5" gutterBottom>
          Submodule Management
        </Typography>

        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel>Select Module</InputLabel>
          <Select
            value={selectedModule}
            onChange={(e) => setSelectedModule(e.target.value)}
            label="Select Module"
          >
            {modules.map((mod) => (
              <MenuItem key={mod.id} value={mod.id}>
                {mod.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
          <TextField
            fullWidth
            label="New Submodule"
            value={newSubmodule}
            onChange={(e) => setNewSubmodule(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddSubmodule}
            disabled={!selectedModule || !newSubmodule}
          >
            Add
          </Button>
        </Box>

        {selectedModule && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="subtitle1" gutterBottom>
              Submodules:
            </Typography>
            {submodules.length > 0 ? (
              <List dense>
                {submodules.map((sub, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={sub} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <Typography color="text.secondary">No submodules yet.</Typography>
            )}
          </Box>
        )}
      </Paper>

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
          Submodule added successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SubmoduleManagement;
