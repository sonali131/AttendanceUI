// File: src/pages/admin/BulkUpload.jsx
import React, { useState } from "react";
import {
  Button,
  Typography,
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Alert,
} from "@mui/material";
import * as XLSX from "xlsx";

const BulkUpload = () => {
  const [excelData, setExcelData] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });

      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      const jsonData = XLSX.utils.sheet_to_json(sheet);
      setExcelData(jsonData);
      setSuccess(true);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <Box p={2}>
      <Typography variant="h6" mb={2}>
        Upload Employee Excel File
      </Typography>

      <Button variant="contained" component="label">
        Upload Excel
        <input type="file" hidden accept=".xlsx" onChange={handleFileUpload} />
      </Button>

      {success && (
        <Alert severity="success" sx={{ mt: 2 }}>
          ✅ Excel uploaded and parsed successfully!
        </Alert>
      )}

      {excelData.length > 0 && (
        <Box mt={4}>
          <Typography variant="subtitle1" mb={1}>
            Parsed Employee Data:
          </Typography>
          <Table size="small">
            <TableHead>
              <TableRow>
                {Object.keys(excelData[0]).map((key) => (
                  <TableCell key={key}>{key}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {excelData.map((row, idx) => (
                <TableRow key={idx}>
                  {Object.keys(row).map((key) => (
                    <TableCell key={key}>{row[key]}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      )}
    </Box>
  );
};

export default BulkUpload;
