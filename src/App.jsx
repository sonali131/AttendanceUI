// import { useState } from "react";
// import LeaveLevelPage from "./pages/LeaveLevelPage";
// import FaceCamera from "./components/FaceCamera";
// import {
//   Add,
//   Edit,
//   Delete,
//   Face,
//   CloudUpload,
//   Group,
// } from "@mui/icons-material";
// import { Button, Box, Typography, Paper, Divider, Stack } from "@mui/material";

// import AppRoutes from "./routes/AppRoutes";
// import DataGridDemo from "./components/DataGridDemo";
// import BulkUploadModal from "./components/BulkUploadModal";
// import AttendanceChart from "./components/AttendanceChart";
// import EmployeeList from "./components/EmployeeList";

// function App() {
//   const [employees, setEmployees] = useState([
//     { id: 1, name: "John Doe", role: "Manager", mail: "johndoe@gmail.com" },
//     { id: 2, name: "Jane Smith", role: "HR", mail: "jane@gmail.com" },
//   ]);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
//   const [showCamera, setShowCamera] = useState(false);

//   // const handleLeave = (id) => {
//   //   console.log(`Employee ${id} left`);
//   //   setEmployees((prev) => prev.filter((emp) => emp.id !== id));
//   // };

//   const handleAddEmployee = () => {
//     const newEmployee = {
//       id: Date.now(),
//       name: "New Employee",
//       role: "Developer",
//       mail: "newemp@gmail.com",
//     };
//     setEmployees([...employees, newEmployee]);
//   };

//   const handleEditEmployee = () => {
//     setEmployees(
//       employees.map((emp) =>
//         emp.id === selectedEmployeeId ? { ...emp, name: "Updated Name" } : emp
//       )
//     );
//   };

//   const handleDeleteEmployee = () => {
//     setEmployees(employees.filter((emp) => emp.id !== selectedEmployeeId));
//     setSelectedEmployeeId(null);
//   };

//   return (
//     <Box sx={{ p: 4, mt: 2, backgroundColor: "#f4f6f8" }}>
//       {/* {selectedEmployeeId && (
//         <LeaveLevelPage
//           employeeId={selectedEmployeeId}
//           onLeaveRequest={handleLeave}
//         />
//       )} */}

//       <Paper elevation={4} sx={{ p: 3, borderRadius: 4, mb: 4, ml: 28, mt: 2 }}>
//         <Typography variant="h5" fontWeight="bold" color="primary" mb={2}>
//           Employee Actions
//         </Typography>

//         <Stack
//           direction="row"
//           spacing={2}
//           justifyContent="center"
//           alignItems="center"
//           flexWrap="wrap"
//         >
//           <Button
//             variant="contained"
//             ml="6"
//             startIcon={<Add />}
//             onClick={handleAddEmployee}
//           >
//             Add
//           </Button>
//           <Button
//             variant="contained"
//             startIcon={<Edit />}
//             onClick={handleEditEmployee}
//             disabled={!selectedEmployeeId}
//           >
//             Edit
//           </Button>
//           <Button
//             variant="contained"
//             startIcon={<Delete />}
//             onClick={handleDeleteEmployee}
//             disabled={!selectedEmployeeId}
//           >
//             Delete
//           </Button>
//           <Button
//             variant="contained"
//             startIcon={<Face />}
//             onClick={() => setShowCamera(true)}
//           >
//             Face Capture
//           </Button>
//           <Button
//             variant="outlined"
//             startIcon={<CloudUpload />}
//             onClick={() => setModalOpen(true)}
//           >
//             Bulk Upload
//           </Button>
//         </Stack>
//       </Paper>

//       {showCamera && <FaceCamera onClose={() => setShowCamera(false)} />}

//       <BulkUploadModal
//         open={modalOpen}
//         onClose={() => setModalOpen(false)}
//         onImport={(data) => {
//           console.log("Imported Data:", data);
//           setEmployees([...employees, ...data]);
//         }}
//       />

//       <EmployeeList />

//       <Box display="flex" alignItems="center" mb={2}>
//         <Group sx={{ mr: 1, color: "primary.main" }} />
//       </Box>

//       {/* <Divider sx={{ mb: 2 }} /> */}

//       <DataGridDemo
//         rows={employees}
//         onRowSelect={(id) => setSelectedEmployeeId(id)}
//       />

//       <Box mt={4}>
//         <AttendanceChart />
//       </Box>

//       <AppRoutes />
//     </Box>
//   );
// }

// export default App;
// src/App.jsx
import React from "react";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return <AppRoutes />;
}

export default App;
