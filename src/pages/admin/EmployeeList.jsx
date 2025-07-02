// File: src/pages/admin/EmployeeList.jsx
import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import EmployeeForm from "./EmployeeForm";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: "Alice", dept: "IT", designation: "Developer" },
    { id: 2, name: "Bob", dept: "HR", designation: "Manager" },
  ]);

  const [open, setOpen] = useState(false);
  const [editEmployee, setEditEmployee] = useState(null);

  const handleAddClick = () => {
    setEditEmployee(null);
    setOpen(true);
  };

  const handleEditClick = (employee) => {
    setEditEmployee(employee);
    setOpen(true);
  };

  const handleDelete = (id) => {
    setEmployees((prev) => prev.filter((emp) => emp.id !== id));
  };

  const handleSave = (empData) => {
    if (empData.id) {
      // Update
      setEmployees((prev) =>
        prev.map((emp) => (emp.id === empData.id ? empData : emp))
      );
    } else {
      // Add
      const newId = Math.max(...employees.map((e) => e.id)) + 1;
      setEmployees((prev) => [...prev, { ...empData, id: newId }]);
    }
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        startIcon={<AddCircleOutlineIcon />}
        onClick={handleAddClick}
        sx={{ mb: 2 }}
      >
        Add Employee
      </Button>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Designation</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((emp) => (
            <TableRow key={emp.id}>
              <TableCell>{emp.name}</TableCell>
              <TableCell>{emp.dept}</TableCell>
              <TableCell>{emp.designation}</TableCell>
              <TableCell>
                <IconButton
                  onClick={() => handleEditClick(emp)}
                  color="primary"
                >
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(emp.id)} color="error">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
        <DialogTitle>
          {editEmployee ? "Edit Employee" : "Add Employee"}
        </DialogTitle>
        <DialogContent>
          <EmployeeForm onSave={handleSave} initialData={editEmployee} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EmployeeList;
