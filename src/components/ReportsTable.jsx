// src/components/ReportsTable.jsx
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

// You can pass `department` and `date` props to filter data if needed
const ReportsTable = ({ department, date }) => {
  // 🔹 Replace this with API or filtered data as needed
  const rows = [
    {
      name: "John Doe",
      date: "2025-06-26",
      in: "09:05",
      out: "17:15",
      status: "Present",
    },
    {
      name: "Ram",
      date: "2025-06-26",
      in: "09:04",
      out: "14:15",
      status: "Present",
    },
    { name: "Jane HR", date: "2025-06-26", in: "-", out: "-", status: "Leave" },
  ];
  console.log("Dept:", department);
  console.log("Date:", date);
  return (
    <TableContainer component={Paper} elevation={3} sx={{ borderRadius: 2 }}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#1976d2" }}>
            <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
              Name
            </TableCell>
            <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
              Date
            </TableCell>
            <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
              In Time
            </TableCell>
            <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
              Out Time
            </TableCell>
            <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{
                backgroundColor: index % 2 === 0 ? "#f5f5f5" : "#ffffff",
                "&:hover": { backgroundColor: "#e3f2fd" },
              }}
            >
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.in}</TableCell>
              <TableCell>{row.out}</TableCell>
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
    </TableContainer>
  );
};

export default ReportsTable;
