// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   TextField,
//   Typography,
//   Snackbar,
//   Alert,
//   Paper,
// } from "@mui/material";

// const ResetPassword = () => {
//   const [email, setEmail] = useState("");
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState("");

//   const handleReset = () => {
//     // Email validation
//     if (!email || !email.includes("@")) {
//       setError("Please enter a valid email address.");
//       return;
//     }

//     // Simulate sending reset link
//     setSuccess(true);
//     setError("");
//     setEmail("");
//   };

//   return (
//     <Box sx={{ maxWidth: 500, mx: "auto", p: 3 }}>
//       <Paper sx={{ p: 4 }} elevation={3}>
//         <Typography variant="h5" gutterBottom>
//           Reset User Password
//         </Typography>
//         <Typography variant="body2" color="textSecondary" mb={2}>
//           Enter the email address of the user to send a password reset link.
//         </Typography>
//         <TextField
//           fullWidth
//           label="User Email"
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           error={!!error}
//           helperText={error}
//           margin="normal"
//         />
//         <Button
//           fullWidth
//           variant="contained"
//           color="error"
//           onClick={handleReset}
//           sx={{ mt: 2 }}
//         >
//           Send Reset Link
//         </Button>
//       </Paper>

//       {/* ✅ Success Message */}
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
//           Password reset link sent! You can now change your password.
//         </Alert>
//       </Snackbar>
//     </Box>
//   );
// };

// export default ResetPassword;
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  TextField,
  Button,
  Snackbar,
  Alert,
  Typography,
  Paper,
} from "@mui/material";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleReset = async () => {
    const templateParams = {
      email: email,
      link: `https://yourapp.com/reset-password?email=${encodeURIComponent(
        email
      )}`, // ✅ Replace with actual reset link logic
    };

    try {
      await emailjs.send(
        "service_4qoeinl", // ✅ Your service ID
        "template_06pcpa9", // ✅ Your template ID
        templateParams,
        "0Vmfdnb26hC0upNcU" // ✅ Your public key
      );

      setSuccess(true);
      setEmail("");
    } catch (err) {
      console.error("Error sending email:", err);
      setError("Failed to send email. Please try again.");
    }
  };

  return (
    <Box sx={{ maxWidth: 500, margin: "auto", mt: 6 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          Reset User Password
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          label="User Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          variant="contained"
          color="error"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleReset}
          disabled={!email}
        >
          Send Reset Link
        </Button>
      </Paper>

      {/* Success Snackbar */}
      <Snackbar
        open={success}
        autoHideDuration={3000}
        onClose={() => setSuccess(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={() => setSuccess(false)}
          severity="success"
          variant="filled"
        >
          Reset email sent successfully!
        </Alert>
      </Snackbar>

      {/* Error Snackbar */}
      <Snackbar
        open={!!error}
        autoHideDuration={3000}
        onClose={() => setError("")}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={() => setError("")} severity="error" variant="filled">
          {error}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ResetPassword;
