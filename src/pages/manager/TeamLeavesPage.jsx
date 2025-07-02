import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { getLeaveRequests, updateLeaveStatus } from "../../api/mock";

const TeamLeavesPage = () => {
  const [leaves, setLeaves] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    getLeaveRequests().then(setLeaves);
  }, []);

  const handleUpdate = (id, status) => {
    updateLeaveStatus(id, status).then(() =>
      setLeaves((prev) => prev.map((l) => (l.id === id ? { ...l, status } : l)))
    );
  };

  const filtered =
    filter === "all"
      ? leaves
      : leaves.filter((l) => l.status.toLowerCase() === filter.toLowerCase());

  return (
    <Box>
      <Typography variant="h5" fontWeight="bold">
        Team Leave Requests
      </Typography>
      <FormControl sx={{ my: 2 }}>
        <InputLabel>Status Filter</InputLabel>
        <Select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          label="Status Filter"
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="pending">Pending</MenuItem>
          <MenuItem value="approved">Approved</MenuItem>
          <MenuItem value="rejected">Rejected</MenuItem>
        </Select>
      </FormControl>
      {filtered.map((l) => (
        <Box key={l.id} sx={{ my: 1, p: 2, border: "1px solid #ccc" }}>
          <Typography>
            {l.employeeName} - {l.leaveType} - {l.status}
          </Typography>
          {l.status.toLowerCase() === "pending" && (
            <>
              <Button
                onClick={() => handleUpdate(l.id, "Approved")}
                sx={{ mr: 1 }}
              >
                Approve
              </Button>
              <Button onClick={() => handleUpdate(l.id, "Rejected")}>
                Reject
              </Button>
            </>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default TeamLeavesPage;
