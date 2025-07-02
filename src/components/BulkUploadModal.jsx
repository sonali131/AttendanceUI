// src/components/BulkUploadModal.jsx

import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
  Alert,
  CircularProgress,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { UploadFile } from "@mui/icons-material";
import * as XLSX from "xlsx";

// Define the columns you expect in the Excel file
const EXPECTED_HEADERS = ["name", "email", "department", "designation"];

const BulkUploadModal = ({ open, onClose, onImport }) => {
  const [previewData, setPreviewData] = useState([]);
  const [validationError, setValidationError] = useState("");
  const [loading, setLoading] = useState(false);

  // Columns for the preview DataGrid
  const previewColumns = [
    { field: "id", headerName: "Row", width: 70 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "department", headerName: "Department", width: 150 },
    { field: "designation", headerName: "Designation", width: 150 },
  ];

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setLoading(true);
    setValidationError("");
    setPreviewData([]);

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];

        // Convert sheet to JSON, expecting headers
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        if (jsonData.length === 0) {
          throw new Error("The Excel file is empty.");
        }

        const headers = jsonData[0].map((h) => String(h).toLowerCase().trim());
        const missingHeaders = EXPECTED_HEADERS.filter(
          (h) => !headers.includes(h)
        );

        if (missingHeaders.length > 0) {
          throw new Error(
            `Missing required columns: ${missingHeaders.join(", ")}`
          );
        }

        // Map rows to objects with correct keys
        const dataRows = jsonData.slice(1).map((row, index) => {
          const rowData = {};
          headers.forEach((header, i) => {
            rowData[header] = row[i];
          });
          return { id: index + 1, ...rowData };
        });

        setPreviewData(dataRows);
      } catch (error) {
        setValidationError(
          error.message ||
            "Failed to process the file. Please check the format."
        );
      } finally {
        setLoading(false);
      }
    };
    reader.onerror = () => {
      setValidationError("Failed to read the file.");
      setLoading(false);
    };
    reader.readAsArrayBuffer(file);
  };

  const handleReset = () => {
    setPreviewData([]);
    setValidationError("");
    // This is a trick to reset the file input value
    document.getElementById("bulk-upload-input").value = "";
  };

  const handleConfirmImport = async () => {
    setLoading(true);
    await onImport(previewData);
    setLoading(false);
    handleClose();
  };

  const handleClose = () => {
    handleReset();
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
      <DialogTitle>Bulk Upload Employees</DialogTitle>
      <DialogContent>
        {validationError && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {validationError}
          </Alert>
        )}

        {previewData.length === 0 ? (
          // Step 1: Upload View
          <Box sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Select an Excel (.xlsx) file to upload.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Required columns:{" "}
              <strong>name, email, department, designation</strong>
            </Typography>
            <Button
              variant="outlined"
              component="label"
              startIcon={<UploadFile />}
              disabled={loading}
            >
              Select File
              <input
                id="bulk-upload-input"
                type="file"
                hidden
                accept=".xlsx"
                onChange={handleFileChange}
              />
            </Button>
            {loading && (
              <CircularProgress
                size={24}
                sx={{ display: "block", margin: "16px auto" }}
              />
            )}
          </Box>
        ) : (
          // Step 2: Preview View
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6">Preview Data</Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Please review the data below before importing. Found{" "}
              {previewData.length} records.
            </Typography>
            <Box sx={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={previewData}
                columns={previewColumns}
                pageSize={5}
                rowsPerPageOptions={[5]}
              />
            </Box>
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        {previewData.length > 0 && (
          <Button onClick={handleReset} disabled={loading}>
            Upload a Different File
          </Button>
        )}
        <Button
          onClick={handleConfirmImport}
          variant="contained"
          disabled={previewData.length === 0 || !!validationError || loading}
        >
          {loading ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            `Confirm & Import ${previewData.length} Records`
          )}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BulkUploadModal;
