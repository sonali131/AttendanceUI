// import React, { useState, useEffect } from "react";
// import { Box, Button, Typography, IconButton, Chip } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";
// import { Add, Edit, Delete, Face, CloudUpload } from "@mui/icons-material";

// // ... (aapke saare imports yahaan rahenge)
// import {
//   apiGetEmployees,
//   apiAddEmployee,
//   apiUpdateEmployee,
//   apiDeleteEmployee,
//   apiBulkAddEmployees,
// } from "../api/mock";
// import BulkUploadModal from "../components/BulkUploadModal";
// import EmployeeFormModal from "../components/EmployeeFormModal";
// import FaceUploadModal from "../components/FaceUploadModal";
// import ConfirmationDialog from "../components/ConfirmationDialog";

// const EmployeeManagementPage = () => {
//   // ... (aapka saara state aur functions waise hi rahenge, koi change nahi)
//   const [employees, setEmployees] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [formOpen, setFormOpen] = useState(false);
//   const [confirmOpen, setConfirmOpen] = useState(false);
//   const [faceUploadOpen, setFaceUploadOpen] = useState(false);
//   const [bulkUploadOpen, setBulkUploadOpen] = useState(false);
//   const [editingEmployee, setEditingEmployee] = useState(null);
//   const [selectedEmployee, setSelectedEmployee] = useState(null);

//   const fetchEmployees = async () => {
//     setLoading(true);
//     const data = await apiGetEmployees();
//     setEmployees(data);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   const handleAdd = () => {
//     setEditingEmployee(null);
//     setFormOpen(true);
//   };
//   const handleEdit = (employee) => {
//     setEditingEmployee(employee);
//     setFormOpen(true);
//   };
//   const handleDeleteClick = (employee) => {
//     setSelectedEmployee(employee);
//     setConfirmOpen(true);
//   };
//   const handleFaceUploadClick = (employee) => {
//     setSelectedEmployee(employee);
//     setFaceUploadOpen(true);
//   };

//   const handleFormSubmit = async (formData) => {
//     if (editingEmployee) {
//       await apiUpdateEmployee({ ...formData, id: editingEmployee.id });
//     } else {
//       await apiAddEmployee(formData);
//     }
//     setFormOpen(false);
//     fetchEmployees();
//   };

//   const handleDeleteConfirm = async () => {
//     await apiDeleteEmployee(selectedEmployee.id);
//     setConfirmOpen(false);
//     fetchEmployees();
//   };

//   const handleFaceCapture = () => {
//     const updatedEmployees = employees.map((emp) =>
//       emp.id === selectedEmployee.id
//         ? { ...emp, faceDataStatus: "Uploaded" }
//         : emp
//     );
//     setEmployees(updatedEmployees);
//   };

//   const handleBulkImport = async (newEmployees) => {
//     await apiBulkAddEmployees(newEmployees);
//     fetchEmployees();
//   };

//   const columns = [
//     { field: "id", headerName: "ID", width: 90 },
//     { field: "name", headerName: "Name", width: 200 },
//     { field: "email", headerName: "Email", width: 250 },
//     { field: "department", headerName: "Department", width: 150 },
//     { field: "designation", headerName: "Designation", width: 180 },
//     {
//       field: "faceDataStatus",
//       headerName: "Face Data",
//       width: 150,
//       renderCell: (params) => (
//         <Chip
//           label={params.value}
//           color={params.value === "Uploaded" ? "success" : "default"}
//           size="small"
//         />
//       ),
//     },
//     {
//       field: "actions",
//       headerName: "Actions",
//       width: 200,
//       sortable: false,
//       renderCell: (params) => (
//         <Box>
//           <IconButton size="small" onClick={() => handleEdit(params.row)}>
//             <Edit />
//           </IconButton>
//           <IconButton
//             size="small"
//             onClick={() => handleDeleteClick(params.row)}
//           >
//             <Delete />
//           </IconButton>
//           <IconButton
//             size="small"
//             onClick={() => handleFaceUploadClick(params.row)}
//           >
//             <Face />
//           </IconButton>
//         </Box>
//       ),
//     },
//   ];

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         height: "100vh", // Full height of the viewport
//         p: 3, // Add padding
//         boxSizing: "border-box",
//       }}
//     >
//       {/* Header Section */}
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           mb: 2,
//         }}
//       >
//         <Typography variant="h5">Employee Management</Typography>
//       </Box>

//       {/* DataGrid Section */}
//       <Box
//         sx={{
//           flexGrow: 1,
//           overflow: "hidden",
//           "& .MuiDataGrid-root": {
//             borderRadius: 1,
//           },
//         }}
//       >
//         <DataGrid
//           rows={employees}
//           columns={columns}
//           loading={loading}
//           disableRowSelectionOnClick
//           sx={{ height: "100%", width: "100%" }}
//         />
//       </Box>

//       {/* Action Buttons */}
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           gap: 2,
//           mt: 3,
//         }}
//       >
//         <Button
//           variant="outlined"
//           startIcon={<CloudUpload />}
//           onClick={() => setBulkUploadOpen(true)}
//         >
//           Bulk Upload
//         </Button>
//         <Button variant="contained" startIcon={<Add />} onClick={handleAdd}>
//           Add Employee
//         </Button>
//       </Box>

//       {/* Modals */}
//       <BulkUploadModal
//         open={bulkUploadOpen}
//         onClose={() => setBulkUploadOpen(false)}
//         onImport={handleBulkImport}
//       />
//       <EmployeeFormModal
//         open={formOpen}
//         onClose={() => setFormOpen(false)}
//         onSubmit={handleFormSubmit}
//         initialData={editingEmployee}
//       />
//       <FaceUploadModal
//         open={faceUploadOpen}
//         onClose={() => setFaceUploadOpen(false)}
//         onCapture={handleFaceCapture}
//         employeeName={selectedEmployee?.name}
//       />
//       <ConfirmationDialog
//         open={confirmOpen}
//         onClose={() => setConfirmOpen(false)}
//         onConfirm={handleDeleteConfirm}
//         title="Delete Employee"
//         message={`Are you sure you want to delete ${selectedEmployee?.name}? This action cannot be undone.`}
//       />
//     </Box>
//   );
// };

// export default EmployeeManagementPage;
import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  IconButton,
  Chip,
  Paper,
  Stack,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import {
  Add,
  Edit,
  Delete,
  Face,
  CloudUpload,
  Group,
} from "@mui/icons-material";

// ✅ Mock APIs
import {
  apiGetEmployees,
  apiAddEmployee,
  apiUpdateEmployee,
  apiDeleteEmployee,
  apiBulkAddEmployees,
} from "../api/mock";

// ✅ Modals
import BulkUploadModal from "../components/BulkUploadModal";
import EmployeeFormModal from "../components/EmployeeFormModal";
import FaceUploadModal from "../components/FaceUploadModal";
import ConfirmationDialog from "../components/ConfirmationDialog";

const EmployeeManagementPage = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formOpen, setFormOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [faceUploadOpen, setFaceUploadOpen] = useState(false);
  const [bulkUploadOpen, setBulkUploadOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const fetchEmployees = async () => {
    setLoading(true);
    const data = await apiGetEmployees();
    setEmployees(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleAdd = () => {
    setEditingEmployee(null);
    setFormOpen(true);
  };

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
    setFormOpen(true);
  };

  const handleDeleteClick = (employee) => {
    setSelectedEmployee(employee);
    setConfirmOpen(true);
  };

  const handleFaceUploadClick = (employee) => {
    setSelectedEmployee(employee);
    setFaceUploadOpen(true);
  };

  const handleFormSubmit = async (formData) => {
    if (editingEmployee) {
      await apiUpdateEmployee({ ...formData, id: editingEmployee.id });
    } else {
      await apiAddEmployee(formData);
    }
    setFormOpen(false);
    fetchEmployees();
  };

  const handleDeleteConfirm = async () => {
    await apiDeleteEmployee(selectedEmployee.id);
    setConfirmOpen(false);
    fetchEmployees();
  };

  const handleFaceCapture = () => {
    const updatedEmployees = employees.map((emp) =>
      emp.id === selectedEmployee.id
        ? { ...emp, faceDataStatus: "Uploaded" }
        : emp
    );
    setEmployees(updatedEmployees);
  };

  const handleBulkImport = async (newEmployees) => {
    await apiBulkAddEmployees(newEmployees);
    fetchEmployees();
  };

  const columns = [
    { field: "id", headerName: "ID", width: 80 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "department", headerName: "Department", width: 180 },
    { field: "designation", headerName: "Designation", width: 180 },
    {
      field: "faceDataStatus",
      headerName: "Face Data",
      width: 150,
      renderCell: (params) => (
        <Chip
          label={params.value}
          color={params.value === "Uploaded" ? "success" : "default"}
          size="small"
          variant="outlined"
        />
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 180,
      sortable: false,
      renderCell: (params) => (
        <Stack direction="row" spacing={1}>
          <IconButton
            color="primary"
            size="small"
            onClick={() => handleEdit(params.row)}
          >
            <Edit fontSize="small" />
          </IconButton>
          <IconButton
            color="error"
            size="small"
            onClick={() => handleDeleteClick(params.row)}
          >
            <Delete fontSize="small" />
          </IconButton>
          <IconButton
            color="secondary"
            size="small"
            onClick={() => handleFaceUploadClick(params.row)}
          >
            <Face fontSize="small" />
          </IconButton>
        </Stack>
      ),
    },
  ];

  return (
    <Box
      sx={{
        p: 3,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        backgroundColor: "#f8f9fa",
      }}
    >
      {/* Header */}
      <Paper
        elevation={1}
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Group color="primary" fontSize="large" />
        <Typography variant="h5" fontWeight={600}>
          Employee Management
        </Typography>
      </Paper>

      {/* Data Grid */}
      <Paper
        elevation={2}
        sx={{
          flexGrow: 1,
          p: 2,
          height: "100%",
        }}
      >
        <DataGrid
          rows={employees}
          columns={columns}
          loading={loading}
          disableRowSelectionOnClick
          pageSizeOptions={[5, 10, 20]}
          sx={{
            borderRadius: 2,
            ".MuiDataGrid-columnHeaders": {
              backgroundColor: "#e3f2fd",
              fontWeight: "bold",
            },
          }}
        />
      </Paper>

      {/* Action Buttons */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<CloudUpload />}
          onClick={() => setBulkUploadOpen(true)}
        >
          Bulk Upload
        </Button>
        <Button variant="contained" startIcon={<Add />} onClick={handleAdd}>
          Add Employee
        </Button>
      </Box>

      {/* Modals */}
      <BulkUploadModal
        open={bulkUploadOpen}
        onClose={() => setBulkUploadOpen(false)}
        onImport={handleBulkImport}
      />
      <EmployeeFormModal
        open={formOpen}
        onClose={() => setFormOpen(false)}
        onSubmit={handleFormSubmit}
        initialData={editingEmployee}
      />
      <FaceUploadModal
        open={faceUploadOpen}
        onClose={() => setFaceUploadOpen(false)}
        onCapture={handleFaceCapture}
        employeeName={selectedEmployee?.name}
      />
      <ConfirmationDialog
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={handleDeleteConfirm}
        title="Delete Employee"
        message={`Are you sure you want to delete ${selectedEmployee?.name}? This action cannot be undone.`}
      />
    </Box>
  );
};

export default EmployeeManagementPage;
