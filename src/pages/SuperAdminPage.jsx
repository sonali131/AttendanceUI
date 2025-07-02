// src/pages/SuperAdminPage.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Modal,
  TextField,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const SuperAdminPage = () => {
  const [openUserModal, setOpenUserModal] = useState(false);
  const [openModuleModal, setOpenModuleModal] = useState(false);
  const [modules, setModules] = useState([]);
  const [subModules, setSubModules] = useState({}); // { moduleName: [sub1, sub2] }

  const handleAddModule = (e) => {
    e.preventDefault();
    const form = e.target;
    const moduleName = form.moduleName.value;
    if (moduleName) {
      setModules((prev) => [...prev, moduleName]);
      form.reset();
    }
  };

  const handleAddSubmodule = (module, subName) => {
    setSubModules((prev) => ({
      ...prev,
      [module]: [...(prev[module] || []), subName],
    }));
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Super Admin Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Create User */}
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Create Admin User</Typography>
            <Button
              variant="contained"
              onClick={() => setOpenUserModal(true)}
              sx={{ mt: 2 }}
            >
              Add User
            </Button>
          </Paper>
        </Grid>

        {/* Module Management */}
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Module Management</Typography>
            <Button
              variant="contained"
              onClick={() => setOpenModuleModal(true)}
              sx={{ mt: 2 }}
            >
              Add Module
            </Button>
          </Paper>
        </Grid>
      </Grid>

      {/* Module & Submodule Viewer */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">Modules & Submodules</Typography>
        <List>
          {modules.map((module, index) => (
            <ListItem
              key={index}
              sx={{ flexDirection: "column", alignItems: "start" }}
            >
              <ListItemText primary={module} />
              <Box
                component="form"
                onSubmit={(e) => {
                  e.preventDefault();
                  const sub = e.target[`sub-${module}`].value;
                  if (sub) {
                    handleAddSubmodule(module, sub);
                    e.target.reset();
                  }
                }}
                sx={{ mt: 1 }}
              >
                <TextField
                  name={`sub-${module}`}
                  placeholder="Add Submodule"
                  size="small"
                  sx={{ mr: 1 }}
                />
                <Button type="submit" variant="outlined" size="small">
                  Add
                </Button>
              </Box>
              <List sx={{ pl: 2 }}>
                {(subModules[module] || []).map((sub, i) => (
                  <ListItem key={i}>
                    <ListItemText primary={`• ${sub}`} />
                  </ListItem>
                ))}
              </List>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Modal: Add User */}
      <Modal open={openUserModal} onClose={() => setOpenUserModal(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            p: 4,
            boxShadow: 24,
            borderRadius: 2,
            width: 400,
          }}
        >
          <Typography variant="h6">Add Admin User</Typography>
          <Box component="form" sx={{ mt: 2 }}>
            <TextField fullWidth label="Name" margin="normal" />
            <TextField fullWidth label="Email" margin="normal" />
            <TextField fullWidth label="Role" margin="normal" />
            <TextField fullWidth label="Password" margin="normal" />
            <Button variant="contained" sx={{ mt: 2 }} fullWidth>
              Create
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* Modal: Add Module */}
      <Modal open={openModuleModal} onClose={() => setOpenModuleModal(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            p: 4,
            boxShadow: 24,
            borderRadius: 2,
            width: 400,
          }}
        >
          <Typography variant="h6">Add Module</Typography>
          <Box component="form" onSubmit={handleAddModule} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              name="moduleName"
              label="Module Name"
              margin="normal"
            />
            <Button variant="contained" type="submit" sx={{ mt: 2 }} fullWidth>
              Add Module
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default SuperAdminPage;
