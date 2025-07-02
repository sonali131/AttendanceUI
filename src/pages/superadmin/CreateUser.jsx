// import React, { useState } from "react";
// import {
//   TextField,
//   Button,
//   Select,
//   MenuItem,
//   InputLabel,
//   FormControl,
//   Snackbar,
//   Alert,
//   Typography,
//   Paper,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   Box,
// } from "@mui/material";

// const CreateUser = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     role: "HR",
//   });

//   const [users, setUsers] = useState([]);
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newUser = {
//       id: Date.now(),
//       name: form.name,
//       email: form.email,
//       role: form.role,
//     };

//     setUsers([...users, newUser]);
//     setForm({ name: "", email: "", role: "HR" });
//     setSuccess(true);
//   };

//   return (
//     <Box sx={{ maxWidth: 700, margin: "auto", p: 3 }}>
//       <Paper sx={{ p: 4, mb: 4 }} elevation={3}>
//         <Typography variant="h5" gutterBottom>
//           Create New User
//         </Typography>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             fullWidth
//             margin="normal"
//             label="Name"
//             value={form.name}
//             onChange={(e) => setForm({ ...form, name: e.target.value })}
//           />
//           <TextField
//             fullWidth
//             margin="normal"
//             type="email"
//             label="Email"
//             value={form.email}
//             onChange={(e) => setForm({ ...form, email: e.target.value })}
//           />
//           <FormControl fullWidth margin="normal">
//             <InputLabel>Role</InputLabel>
//             <Select
//               value={form.role}
//               onChange={(e) => setForm({ ...form, role: e.target.value })}
//               label="Role"
//             >
//               <MenuItem value="HR">HR</MenuItem>
//               <MenuItem value="Manager">Manager</MenuItem>
//               <MenuItem value="DepartmentHead">Department Head</MenuItem>
//             </Select>
//           </FormControl>
//           <Button
//             variant="contained"
//             color="primary"
//             type="submit"
//             fullWidth
//             sx={{ mt: 2 }}
//           >
//             Create User
//           </Button>
//         </form>
//       </Paper>

//       {users.length > 0 && (
//         <Paper sx={{ p: 2 }} elevation={2}>
//           <Typography variant="h6" gutterBottom>
//             User List
//           </Typography>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>#</TableCell>
//                 <TableCell>Name</TableCell>
//                 <TableCell>Email</TableCell>
//                 <TableCell>Role</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {users.map((user, index) => (
//                 <TableRow key={user.id}>
//                   <TableCell>{index + 1}</TableCell>
//                   <TableCell>{user.name}</TableCell>
//                   <TableCell>{user.email}</TableCell>
//                   <TableCell>{user.role}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </Paper>
//       )}

//       {/* Snackbar for success */}
//       <Snackbar
//         open={success}
//         autoHideDuration={3000}
//         onClose={() => setSuccess(false)}
//         anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
//       >
//         <Alert
//           severity="success"
//           variant="filled"
//           onClose={() => setSuccess(false)}
//         >
//           User created successfully!
//         </Alert>
//       </Snackbar>
//     </Box>
//   );
// };

// export default CreateUser;
import React, { useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Snackbar,
  Alert,
  Typography,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
} from "@mui/material";

const CreateUser = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "HR",
  });

  const [users, setUsers] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.role) return;

    const newUser = {
      id: Date.now(),
      name: form.name,
      email: form.email,
      role: form.role,
    };

    setUsers([...users, newUser]);
    setForm({ name: "", email: "", role: "HR" });
    setSuccess(true);
  };

  return (
    <Box sx={{ maxWidth: 700, margin: "auto", p: 3 }}>
      <Paper sx={{ p: 4, mb: 4 }} elevation={3}>
        <Typography variant="h5" gutterBottom>
          Create New User
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <TextField
            fullWidth
            margin="normal"
            type="email"
            label="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Role</InputLabel>
            <Select
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              label="Role"
            >
              <MenuItem value="HR">HR</MenuItem>
              <MenuItem value="Developer">Developer</MenuItem>
              <MenuItem value="Intern">Intern</MenuItem>
              <MenuItem value="Tester">Tester</MenuItem>
              <MenuItem value="Designer">Designer</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            sx={{ mt: 2 }}
          >
            Create User
          </Button>
        </form>
      </Paper>

      {users.length > 0 && (
        <Paper sx={{ p: 2 }} elevation={2}>
          <Typography variant="h6" gutterBottom>
            User List
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user, index) => (
                <TableRow key={user.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      )}

      {/* Success Message Snackbar */}
      <Snackbar
        open={success}
        autoHideDuration={3000}
        onClose={() => setSuccess(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          severity="success"
          variant="filled"
          onClose={() => setSuccess(false)}
        >
          User created successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default CreateUser;
