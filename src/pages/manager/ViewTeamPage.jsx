// 📁 src/pages/manager/ViewTeamPage.jsx
import React, { useEffect, useState } from "react";
import { getTeamEmployees } from "../../api/mock";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const ViewTeamPage = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    getTeamEmployees().then(setTeam);
  }, []);

  return (
    <>
      <Typography variant="h5" mb={2} fontWeight="bold">
        Team Members
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Face Registered</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {team.map((emp) => (
              <TableRow key={emp.id}>
                <TableCell>{emp.name}</TableCell>
                <TableCell>{emp.email}</TableCell>
                <TableCell>{emp.department}</TableCell>
                <TableCell>{emp.faceRegistered ? "✅" : "❌"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ViewTeamPage;
