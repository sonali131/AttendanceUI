// import React, { useState } from "react";
// import { Box, Typography } from "@mui/material";
// import LeaveLevelPage from "./LeaveLevelPage";

// const EmployeeList = () => {
//   const [employees, setEmployees] = useState([
//     { id: 1, name: "Sonali", role: "Developer" },
//     { id: 2, name: "Rahul", role: "Manager" },
//   ]);

//   const handleLeaveRequest = (id) => {
//     // Remove the employee from the list
//     setEmployees((prev) => prev.filter((emp) => emp.id !== id));
//   };

//   return (
//     <Box>
//       <Typography variant="h5">Employee List</Typography>
//       {employees.map((emp) => (
//         <Box key={emp.id} sx={{ border: "1px solid #ccc", m: 1, p: 2 }}>
//           <Typography>
//             {emp.name} - {emp.role}
//           </Typography>
//           <LeaveLevelPage
//             employeeId={emp.id}
//             onLeaveRequest={handleLeaveRequest}
//           />
//         </Box>
//       ))}
//     </Box>
//   );
// };

// export default EmployeeList;
import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Avatar,
  CardHeader,
} from "@mui/material";
import { deepPurple } from "@mui/material/colors";

const EmployeeList = () => {
  const [employees] = useState([
    { id: 1, name: "John Doe", role: "Manager", mail: "johndoe@gmail.com" },
    { id: 2, name: "Jane Smith", role: "HR", mail: "jane@gmail.com" },
    { id: 3, name: "Mike Chan", role: "Developer", mail: "mikec@gmail.com" },
    {
      id: 4,
      name: "Sonali",
      role: "Web-Dev",
      mail: "sona@gmail.com",
    },
  ]);

  return (
    <Box sx={{ p: 4, ml: 25 }}>
      <Typography variant="h5" gutterBottom fontWeight="bold">
        Employee Directory
      </Typography>
      <Grid container spacing={3}>
        {employees.map((emp) => (
          <Grid item xs={12} sm={6} md={4} key={emp.id}>
            <Card elevation={4} sx={{ borderRadius: 3 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: deepPurple[500] }}>
                    {emp.name.charAt(0)}
                  </Avatar>
                }
                title={emp.name}
                subheader={emp.role}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Email: {emp.mail}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EmployeeList;
