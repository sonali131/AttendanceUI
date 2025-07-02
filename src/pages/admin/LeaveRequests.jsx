// File: src/pages/admin/LeaveRequests.jsx
import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Typography,
  Chip,
  Box,
  Paper,
} from "@mui/material";

const LeaveRequests = () => {
  const [requests, setRequests] = useState([
    { id: 1, name: "Alice", type: "Sick", status: "Pending" },
    { id: 2, name: "Bob", type: "Casual", status: "Pending" },
  ]);

  const handleStatusChange = (id, newStatus) => {
    const updated = requests.map((req) =>
      req.id === id ? { ...req, status: newStatus } : req
    );
    setRequests(updated);
  };

  const getStatusChip = (status) => {
    const color =
      status === "Approved"
        ? "success"
        : status === "Rejected"
        ? "error"
        : "warning";
    return <Chip label={status} color={color} variant="outlined" />;
  };

  return (
    <Box p={2}>
      <Typography variant="h6" gutterBottom>
        Leave Requests
      </Typography>

      <Paper elevation={3}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {requests.map((req) => (
              <TableRow key={req.id}>
                <TableCell>{req.name}</TableCell>
                <TableCell>{req.type}</TableCell>
                <TableCell>{getStatusChip(req.status)}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="outlined"
                    color="success"
                    size="small"
                    sx={{ mr: 1 }}
                    disabled={req.status !== "Pending"}
                    onClick={() => handleStatusChange(req.id, "Approved")}
                  >
                    Approve
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    disabled={req.status !== "Pending"}
                    onClick={() => handleStatusChange(req.id, "Rejected")}
                  >
                    Reject
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default LeaveRequests;
