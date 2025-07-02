// File: src/pages/admin/AnomalyReview.jsx
import React, { useState } from "react";
import {
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  Alert,
  Box,
} from "@mui/material";

const AnomalyReview = () => {
  const anomalies = [
    { id: 1, name: "Alice", issue: "Late Entry" },
    { id: 2, name: "Bob", issue: "Missed Punch" },
  ];

  const [comments, setComments] = useState({});
  const [saved, setSaved] = useState({});

  const handleCommentChange = (id, value) => {
    setComments((prev) => ({ ...prev, [id]: value }));
    setSaved((prev) => ({ ...prev, [id]: false }));
  };

  const handleBlur = (id) => {
    setSaved((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <Box p={2}>
      <Typography variant="h6" gutterBottom>
        Anomaly Detection
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Issue</TableCell>
            <TableCell>Comment</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {anomalies.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.issue}</TableCell>
              <TableCell>
                <TextField
                  fullWidth
                  placeholder="Add review comment"
                  value={comments[item.id] || ""}
                  onChange={(e) => handleCommentChange(item.id, e.target.value)}
                  onBlur={() => handleBlur(item.id)}
                  size="small"
                />
                {saved[item.id] && (
                  <Alert severity="success" sx={{ mt: 1 }}>
                    ✅ Review saved!
                  </Alert>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default AnomalyReview;
