import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Snackbar,
  Alert,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Divider,
} from "@mui/material";

const ModuleManagement = () => {
  const [moduleName, setModuleName] = useState("");
  const [submoduleName, setSubmoduleName] = useState("");
  const [modules, setModules] = useState([]);
  const [selectedModuleIndex, setSelectedModuleIndex] = useState(null);
  const [message, setMessage] = useState("");

  const handleAddModule = () => {
    if (!moduleName.trim()) return;
    setModules([...modules, { name: moduleName.trim(), submodules: [] }]);
    setModuleName("");
    setMessage(`✅ Module '${moduleName.trim()}' created successfully.`);
  };

  const handleAddSubmodule = () => {
    if (selectedModuleIndex === null || !submoduleName.trim()) return;
    const updated = [...modules];
    updated[selectedModuleIndex].submodules.push(submoduleName.trim());
    setModules(updated);
    setSubmoduleName("");
    setMessage(
      `✅ Submodule '${submoduleName.trim()}' added to '${
        updated[selectedModuleIndex].name
      }'.`
    );
  };

  return (
    <Box sx={{ maxWidth: 700, mx: "auto", mt: 4 }}>
      <Paper sx={{ p: 4 }} elevation={3}>
        <Typography variant="h5" gutterBottom>
          Module & Submodule Management
        </Typography>

        {/* Add Module */}
        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle1">Create Module</Typography>
          <TextField
            label="Module Name"
            fullWidth
            value={moduleName}
            onChange={(e) => setModuleName(e.target.value)}
            sx={{ mt: 1 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddModule}
            sx={{ mt: 2 }}
          >
            Add Module
          </Button>
        </Box>

        {/* Show Modules and Submodules */}
        {modules.length > 0 && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="subtitle2" color="text.secondary">
              Modules List (click to add submodules):
            </Typography>
            <List>
              {modules.map((mod, idx) => (
                <Box key={idx}>
                  <ListItemButton
                    selected={selectedModuleIndex === idx}
                    onClick={() => setSelectedModuleIndex(idx)}
                  >
                    <ListItemText
                      primary={mod.name}
                      primaryTypographyProps={{ fontWeight: "bold" }}
                    />
                  </ListItemButton>
                  {mod.submodules.length > 0 && (
                    <List sx={{ pl: 4 }}>
                      {mod.submodules.map((sub, subIdx) => (
                        <ListItem key={subIdx} sx={{ pl: 2 }}>
                          <ListItemText primary={`↳ ${sub}`} />
                        </ListItem>
                      ))}
                    </List>
                  )}
                  <Divider />
                </Box>
              ))}
            </List>
          </Box>
        )}

        {/* Add Submodule */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="subtitle1">
            Add Submodule to:{" "}
            {selectedModuleIndex !== null
              ? modules[selectedModuleIndex].name
              : "Select a module"}
          </Typography>
          <TextField
            fullWidth
            label="Submodule Name"
            value={submoduleName}
            onChange={(e) => setSubmoduleName(e.target.value)}
            sx={{ mt: 1 }}
            disabled={selectedModuleIndex === null}
          />
          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 2 }}
            onClick={handleAddSubmodule}
            disabled={selectedModuleIndex === null || !submoduleName.trim()}
          >
            Add Submodule
          </Button>
        </Box>
      </Paper>

      {/* Success Snackbar */}
      <Snackbar
        open={!!message}
        autoHideDuration={3000}
        onClose={() => setMessage("")}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={() => setMessage("")}
          severity="success"
          variant="filled"
        >
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ModuleManagement;
