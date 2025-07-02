// File: src/pages/admin/EmployeeForm.jsx
import React, { useState, useEffect } from "react";
import { TextField, Button, Box } from "@mui/material";

const EmployeeForm = ({ onSave, initialData }) => {
  const [formData, setFormData] = useState({
    name: "",
    dept: "",
    designation: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({ name: "", dept: "", designation: "" });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.dept && formData.designation) {
      onSave({ ...formData, id: initialData?.id });
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} mt={2}>
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Department"
        name="dept"
        value={formData.dept}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Designation"
        name="designation"
        value={formData.designation}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <Button variant="contained" type="submit" sx={{ mt: 2 }}>
        Save
      </Button>
    </Box>
  );
};

export default EmployeeForm;
