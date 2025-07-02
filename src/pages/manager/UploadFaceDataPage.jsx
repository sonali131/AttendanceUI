// 📁 src/pages/manager/UploadFaceDataPage.jsx
import React, { useState, useEffect } from "react";
import {
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Input,
  Snackbar,
  Alert,
} from "@mui/material";
import { uploadFaceData, getTeamEmployees } from "../../api/mock";

const UploadFaceDataPage = () => {
  const [team, setTeam] = useState([]);
  const [selectedEmp, setSelectedEmp] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  useEffect(() => {
    getTeamEmployees().then(setTeam);
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    if (!selectedEmp) {
      return setSnackbar({
        open: true,
        message: "Please select an employee.",
        severity: "warning",
      });
    }
    if (!imageFile) {
      return setSnackbar({
        open: true,
        message: "Please select an image.",
        severity: "warning",
      });
    }

    uploadFaceData(selectedEmp, preview).then((res) => {
      setSnackbar({ open: true, message: res.message, severity: "success" });
      setImageFile(null);
      setPreview(null);
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box>
      <Typography variant="h5" mb={2} fontWeight="bold">
        Upload Face Data
      </Typography>

      {/* Select Employee */}
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Select Employee</InputLabel>
        <Select
          value={selectedEmp}
          label="Select Employee"
          onChange={(e) => setSelectedEmp(e.target.value)}
        >
          {team.map((emp) => (
            <MenuItem key={emp.id} value={emp.id}>
              {emp.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Image Input */}
      <FormControl fullWidth sx={{ mb: 2 }}>
        <Input type="file" accept="image/*" onChange={handleFileChange} />
      </FormControl>

      {/* Preview */}
      {preview && (
        <Box mb={2}>
          <Typography variant="subtitle2" mb={1}>
            Preview:
          </Typography>
          <img
            src={preview}
            alt="Preview"
            style={{ maxWidth: "100%", height: 200, borderRadius: 8 }}
          />
        </Box>
      )}

      {/* Upload Button */}
      <Button
        onClick={handleUpload}
        variant="contained"
        color="primary"
        disabled={!selectedEmp || !imageFile}
      >
        Upload Face Data
      </Button>

      {/* Snackbar for Success/Error */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default UploadFaceDataPage;
