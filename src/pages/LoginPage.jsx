// // src/pages/auth/Login.jsx
// import React, { useState } from "react";
// import { useAuth } from "../hooks/useAuth";
// import { useNavigate } from "react-router-dom";
// import {
//   Container,
//   Box,
//   TextField,
//   Button,
//   Typography,
//   Paper,
//   Alert,
//   CircularProgress,
// } from "@mui/material";

// const Login = () => {
//   const [email, setEmail] = useState("employee@test.com"); // Default for easy testing
//   const [password, setPassword] = useState("password");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);
//     try {
//       const user = await login(email, password);
//       // Navigate to the user's specific dashboard
//       navigate(`/${user.role}/dashboard`, { replace: true });
//     } catch (err) {
//       setError(err.message || "Login failed.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container component="main" maxWidth="xs">
//       <Paper
//         elevation={6}
//         sx={{
//           marginTop: 8,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           padding: 4,
//         }}
//       >
//         <Typography component="h1" variant="h5">
//           Sign In
//         </Typography>
//         <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             label="Email Address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             label="Password"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           {error && (
//             <Alert severity="error" sx={{ width: "100%", mt: 2 }}>
//               {error}
//             </Alert>
//           )}
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{ mt: 3, mb: 2 }}
//             disabled={loading}
//           >
//             {loading ? <CircularProgress size={24} /> : "Sign In"}
//           </Button>
//           <Typography variant="body2" color="textSecondary" align="center">
//             Try: superadmin@test.com, admin@test.com, hr@test.com,
//             manager@test.com, employee@test.com (pw: password)
//           </Typography>
//         </Box>
//       </Paper>
//     </Container>
//   );
// };

// export default Login;
// import React, { useState } from "react";
// import { useAuth } from "../hooks/useAuth";
// import { useNavigate } from "react-router-dom";
// import {
//   Container,
//   Box,
//   TextField,
//   Button,
//   Typography,
//   Paper,
//   Alert,
//   CircularProgress,
// } from "@mui/material";

// const Login = () => {
//   const [email, setEmail] = useState("employee@test.com");
//   const [password, setPassword] = useState("password");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);
//     try {
//       const user = await login(email, password);
//       navigate(`/${user.role}/dashboard`, { replace: true });
//     } catch (err) {
//       setError(err.message || "Login failed.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         bgcolor: "#f0f4f8",
//         flexDirection: "column",
//         px: 2,
//       }}
//     >
//       <Typography
//         variant="h4"
//         fontWeight="bold"
//         color="primary"
//         mb={3}
//         textAlign="center"
//       >
//         🕒 Smart Attendance System
//       </Typography>

//       <Container maxWidth="xs">
//         <Paper
//           elevation={6}
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             padding: 4,
//             borderRadius: 3,
//           }}
//         >
//           <Typography component="h1" variant="h5">
//             Sign In
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               label="Email Address"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               label="Password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             {error && (
//               <Alert severity="error" sx={{ width: "100%", mt: 2 }}>
//                 {error}
//               </Alert>
//             )}
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//               disabled={loading}
//             >
//               {loading ? <CircularProgress size={24} /> : "Sign In"}
//             </Button>
//             <Typography variant="body2" color="textSecondary" align="center">
//               Try: superadmin@test.com, admin@test.com, hr@test.com,
//               manager@test.com, employee@test.com (pw: password)
//             </Typography>
//           </Box>
//         </Paper>
//       </Container>
//     </Box>
//   );
// };

// export default Login;
import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Alert,
  CircularProgress,
} from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("employee@test.com");
  const [password, setPassword] = useState("password");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const user = await login(email, password);
      navigate(`/${user.role}/dashboard`, { replace: true });
    } catch (err) {
      setError(err.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f0f4f8",
        px: 2,
      }}
    >
      <Container maxWidth="xs">
        <Typography
          variant="h4"
          fontWeight="bold"
          color="primary"
          textAlign="center"
          mb={3}
        >
          🕒 Smart Attendance System
        </Typography>

        <Paper
          elevation={6}
          sx={{
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: 3,
          }}
        >
          <Typography component="h1" variant="h5" gutterBottom>
            Sign In
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ mt: 1, width: "100%" }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && (
              <Alert severity="error" sx={{ width: "100%", mt: 2 }}>
                {error}
              </Alert>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : "Sign In"}
            </Button>

            <Typography variant="body2" color="textSecondary" align="center">
              Test Accounts: superadmin@test.com, admin@test.com, hr@test.com,
              manager@test.com, employee@test.com <br />
              Password: <strong>password</strong>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;
