// import React, { useState, useEffect } from "react";
// import { TextField, Button, Box, Typography } from "@mui/material";

// const UpdateProfilePage = () => {
//   const [profile, setProfile] = useState({
//     name: "",
//     email: "",
//     phone: "",
//   });

//   useEffect(() => {
//     // Fetch profile from backend here
//     setProfile({
//       name: "John Doe",
//       email: "john@example.com",
//       phone: "9876543210",
//     });
//   }, []);

//   const handleChange = (e) => {
//     setProfile({ ...profile, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Send profile update to backend API
//     console.log("Updated profile:", profile);
//   };

//   return (
//     <Box maxWidth={500} mx="auto" mt={4}>
//       <Typography variant="h5" gutterBottom>
//         Update Profile
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           label="Full Name"
//           name="name"
//           fullWidth
//           margin="normal"
//           value={profile.name}
//           onChange={handleChange}
//         />
//         <TextField
//           label="Email"
//           name="email"
//           fullWidth
//           margin="normal"
//           value={profile.email}
//           onChange={handleChange}
//         />
//         <TextField
//           label="Phone Number"
//           name="phone"
//           fullWidth
//           margin="normal"
//           value={profile.phone}
//           onChange={handleChange}
//         />
//         <Button >Upload Picture</Button>
//         <Button variant="contained" type="submit" sx={{ mt: 2 }}>
//           Save Changes
//         </Button>
//       </form>
//     </Box>
//   );
// };

// export default UpdateProfilePage;
// import React, { useState, useEffect, useRef } from "react";
// import { TextField, Button, Box, Typography, Avatar } from "@mui/material";

// const UpdateProfilePage = () => {
//   const [profile, setProfile] = useState({
//     name: "",
//     email: "",
//     phone: "",
//   });

//   const [profileImage, setProfileImage] = useState(null); // Image file
//   const [imagePreview, setImagePreview] = useState(""); // For preview

//   const fileInputRef = useRef();

//   useEffect(() => {
//     // Simulate fetching user profile
//     setProfile({
//       name: "John Doe",
//       email: "john@example.com",
//       phone: "9876543210",
//     });

//     // Simulate existing profile image URL
//     setImagePreview("https://via.placeholder.com/100"); // replace with real one from backend
//   }, []);

//   const handleChange = (e) => {
//     setProfile({ ...profile, [e.target.name]: e.target.value });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setProfileImage(file);
//       setImagePreview(URL.createObjectURL(file));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Construct form data to send image + profile
//     const formData = new FormData();
//     formData.append("name", profile.name);
//     formData.append("email", profile.email);
//     formData.append("phone", profile.phone);
//     if (profileImage) {
//       formData.append("profileImage", profileImage);
//     }

//     // Send `formData` to backend API
//     console.log("Submitting profile update:", formData);

//     // Example: axios.post('/api/update-profile', formData)
//   };

//   return (
//     <Box maxWidth={500} mx="auto" mt={4}>
//       <Typography variant="h5" gutterBottom>
//         Update Profile
//       </Typography>

//       {/* Profile Picture */}
//       <Box display="flex" alignItems="center" mb={2}>
//         <Avatar
//           src={imagePreview}
//           alt="Profile"
//           sx={{ width: 80, height: 80, mr: 2 }}
//         />
//         <input
//           type="file"
//           accept="image/*"
//           ref={fileInputRef}
//           style={{ display: "none" }}
//           onChange={handleImageChange}
//         />
//         <Button variant="outlined" onClick={() => fileInputRef.current.click()}>
//           Upload Picture
//         </Button>
//       </Box>

//       <form onSubmit={handleSubmit}>
//         <TextField
//           label="Full Name"
//           name="name"
//           fullWidth
//           margin="normal"
//           value={profile.name}
//           onChange={handleChange}
//         />
//         <TextField
//           label="Email"
//           name="email"
//           fullWidth
//           margin="normal"
//           value={profile.email}
//           onChange={handleChange}
//         />
//         <TextField
//           label="Phone Number"
//           name="phone"
//           fullWidth
//           margin="normal"
//           value={profile.phone}
//           onChange={handleChange}
//         />

//         <Button variant="contained" type="submit" sx={{ mt: 2 }}>
//           Save Changes
//         </Button>
//       </form>
//     </Box>
//   );
// };

// export default UpdateProfilePage;
import React, { useState, useEffect, useRef } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Avatar,
  Snackbar,
  Alert,
} from "@mui/material";

const UpdateProfilePage = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const fileInputRef = useRef();

  useEffect(() => {
    // Initial profile data
    setProfile({
      name: "John Doe",
      email: "john@example.com",
      phone: "9876543210",
    });

    // Existing image preview
    setImagePreview("https://via.placeholder.com/100");
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Updated Profile:", profile);
    console.log("Uploaded Image:", profileImage);

    // Show snackbar
    setOpenSnackbar(true);
  };

  return (
    <Box maxWidth={500} mx="auto" mt={4}>
      <Typography variant="h5" gutterBottom>
        Update Profile
      </Typography>

      <Box display="flex" alignItems="center" mb={2}>
        <Avatar
          src={imagePreview}
          alt="Profile"
          sx={{ width: 80, height: 80, mr: 2 }}
        />
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
        <Button variant="outlined" onClick={() => fileInputRef.current.click()}>
          Upload Picture
        </Button>
      </Box>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Full Name"
          name="name"
          fullWidth
          margin="normal"
          value={profile.name}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          name="email"
          fullWidth
          margin="normal"
          value={profile.email}
          onChange={handleChange}
        />
        <TextField
          label="Phone Number"
          name="phone"
          fullWidth
          margin="normal"
          value={profile.phone}
          onChange={handleChange}
        />
        <Button variant="contained" type="submit" sx={{ mt: 2 }}>
          Save Changes
        </Button>
      </form>

      {/* Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="success" onClose={() => setOpenSnackbar(false)}>
          Profile updated successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default UpdateProfilePage;
