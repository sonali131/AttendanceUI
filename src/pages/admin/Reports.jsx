// File: src/pages/admin/Reports.jsx
import React from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Stack,
} from "@mui/material";
import { CSVLink } from "react-csv";
// import jsPDF from "jspdf";
// import "jspdf-autotable";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable"; // 👈 this is essential

const Reports = () => {
  const data = [
    { name: "Alice", date: "2025-06-30", status: "Present" },
    { name: "Bob", date: "2025-06-30", status: "Absent" },
    { name: "Charlie", date: "2025-06-30", status: "Present" },
  ];

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Attendance Report", 14, 22);

    autoTable(doc, {
      startY: 30,
      head: [["Name", "Date", "Status"]],
      body: data.map((row) => [row.name, row.date, row.status]),
    });

    doc.save("attendance_report.pdf");
  };

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom fontWeight="bold">
        Attendance Reports
      </Typography>

      <Stack direction="row" spacing={2} mb={2}>
        <Button onClick={downloadPDF} variant="contained" color="primary">
          Export as PDF
        </Button>
        <CSVLink
          data={data}
          filename={"attendance_report.csv"}
          style={{ textDecoration: "none" }}
        >
          <Button variant="contained" color="secondary">
            Export as CSV
          </Button>
        </CSVLink>
      </Stack>

      <Paper elevation={4}>
        <Table id="reportTable">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
              <TableCell>
                <strong>Name</strong>
              </TableCell>
              <TableCell>
                <strong>Date</strong>
              </TableCell>
              <TableCell>
                <strong>Status</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell
                  sx={{
                    color: row.status === "Present" ? "green" : "red",
                    fontWeight: "bold",
                  }}
                >
                  {row.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default Reports;
