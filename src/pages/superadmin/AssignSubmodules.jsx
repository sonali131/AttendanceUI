import React, { useEffect, useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Snackbar,
  Alert,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const AssignSubmodules = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [tree, setTree] = useState({});
  const [success, setSuccess] = useState(false);
  const [assignedData, setAssignedData] = useState(null); // ✅ Store assigned permissions

  useEffect(() => {
    const dummyUsers = [
      { id: "u1", name: "Amit", role: "hr" },
      { id: "u2", name: "Priya", role: "manager" },
      { id: "u3", name: "Ravi", role: "departmenthead" },
    ];

    const dummyTree = {
      Attendance: [
        { name: "Smart Attendance", checked: false },
        { name: "QR Attendance", checked: false },
      ],
      Leave: [
        { name: "Apply Leave", checked: false },
        { name: "Approve Leave", checked: false },
      ],
      Reports: [
        { name: "View Daily Report", checked: false },
        { name: "Monthly Report", checked: false },
      ],
    };

    setUsers(dummyUsers);
    setTree(dummyTree);
  }, []);

  const handleCheckboxToggle = (module, index) => {
    const updatedTree = { ...tree };
    updatedTree[module][index].checked = !updatedTree[module][index].checked;
    setTree(updatedTree);
  };

  const handleAssign = () => {
    const assigned = {};
    Object.entries(tree).forEach(([module, subs]) => {
      assigned[module] = subs.filter((s) => s.checked).map((s) => s.name);
    });

    const userObj = users.find((u) => u.id === selectedUser);
    setAssignedData({ user: userObj, permissions: assigned });
    setSuccess(true);
  };

  return (
    <Box sx={{ maxWidth: 700, mx: "auto", p: 3 }}>
      <Paper sx={{ p: 4 }} elevation={3}>
        <Typography variant="h5" gutterBottom>
          Assign Submodules
        </Typography>

        <FormControl fullWidth margin="normal">
          <InputLabel>Select User</InputLabel>
          <Select
            value={selectedUser}
            label="Select User"
            onChange={(e) => setSelectedUser(e.target.value)}
          >
            {users.map((user) => (
              <MenuItem key={user.id} value={user.id}>
                {user.name} ({user.role})
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Divider sx={{ my: 3 }} />

        {Object.entries(tree).map(([module, submodules]) => (
          <Box key={module} sx={{ mb: 3 }}>
            <Typography variant="subtitle1" color="primary" gutterBottom>
              {module}
            </Typography>
            <FormGroup>
              {submodules.map((sub, index) => (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      checked={sub.checked}
                      onChange={() => handleCheckboxToggle(module, index)}
                    />
                  }
                  label={sub.name}
                />
              ))}
            </FormGroup>
          </Box>
        ))}

        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleAssign}
          disabled={!selectedUser}
        >
          Assign Submodules
        </Button>
      </Paper>

      {/* ✅ Success Snackbar */}
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
          Submodules assigned successfully!
        </Alert>
      </Snackbar>

      {/* ✅ Display Assigned Data */}
      {assignedData && (
        <Paper sx={{ p: 3, mt: 4 }} elevation={2}>
          <Typography variant="h6" gutterBottom>
            Assigned Permissions for {assignedData.user.name} (
            {assignedData.user.role})
          </Typography>
          {Object.entries(assignedData.permissions).map(
            ([module, subs]) =>
              subs.length > 0 && (
                <Box key={module} sx={{ mb: 2 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                    {module}
                  </Typography>
                  <List dense>
                    {subs.map((sub, idx) => (
                      <ListItem key={idx}>
                        <ListItemText primary={`• ${sub}`} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              )
          )}
        </Paper>
      )}
    </Box>
  );
};

export default AssignSubmodules;
