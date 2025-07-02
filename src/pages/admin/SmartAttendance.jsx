// File: src/pages/admin/SmartAttendance.jsx
import React, { useState } from "react";
import {
  Typography,
  Button,
  CircularProgress,
  Alert,
  Box,
  Input,
} from "@mui/material";

const SmartAttendance = () => {
  const [faceImage, setFaceImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [attendanceMarked, setAttendanceMarked] = useState(false);

  const handleFaceUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFaceImage(URL.createObjectURL(file)); // Show preview
      setAttendanceMarked(false); // Reset success if re-upload
    }
  };

  const handleMarkAttendance = () => {
    setLoading(true);
    setAttendanceMarked(false);

    // Simulate attendance marking
    setTimeout(() => {
      setLoading(false);
      setAttendanceMarked(true);
    }, 2000);
  };

  return (
    <Box p={2}>
      <Typography variant="h6" mb={2}>
        Smart Attendance (Face + Geo)
      </Typography>

      <Button variant="outlined" component="label" sx={{ mb: 2 }}>
        Upload Face Image
        <input
          type="file"
          hidden
          accept="image/*"
          onChange={handleFaceUpload}
        />
      </Button>

      {faceImage && (
        <Box mt={2}>
          <Typography variant="subtitle1">Face Preview:</Typography>
          <img
            src={faceImage}
            alt="Face Preview"
            style={{
              width: 200,
              height: 200,
              objectFit: "cover",
              borderRadius: 10,
            }}
          />
        </Box>
      )}

      {faceImage && (
        <Box mt={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleMarkAttendance}
            disabled={loading}
          >
            {loading ? "Marking Attendance..." : "Mark Attendance"}
          </Button>
        </Box>
      )}

      {loading && (
        <Box mt={2}>
          <CircularProgress />
        </Box>
      )}

      {attendanceMarked && (
        <Alert severity="success" sx={{ mt: 2 }}>
          ✅ Face + Geo Attendance Marked Successfully!
        </Alert>
      )}
    </Box>
  );
};

export default SmartAttendance;
// File: src/pages/admin/SmartAttendance.jsx
// import React, { useRef, useState } from "react";
// import {
//   Typography,
//   Button,
//   CircularProgress,
//   Alert,
//   Box,
// } from "@mui/material";

// const SmartAttendance = () => {
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);

//   const [hasCameraAccess, setHasCameraAccess] = useState(false);
//   const [capturedImage, setCapturedImage] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const startCamera = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//       videoRef.current.srcObject = stream;
//       setHasCameraAccess(true);
//     } catch (err) {
//       alert("Camera access denied or not available." + err);
//     }
//   };

//   const captureImage = () => {
//     const video = videoRef.current;
//     const canvas = canvasRef.current;
//     const context = canvas.getContext("2d");

//     canvas.width = video.videoWidth;
//     canvas.height = video.videoHeight;

//     context.drawImage(video, 0, 0, canvas.width, canvas.height);
//     const imageDataURL = canvas.toDataURL("image/png");

//     setCapturedImage(imageDataURL);
//     setSuccess(false); // Reset success state
//   };

//   const markAttendance = () => {
//     setLoading(true);
//     setSuccess(false);

//     setTimeout(() => {
//       setLoading(false);
//       setSuccess(true);
//     }, 2000);
//   };

//   return (
//     <Box p={2}>
//       <Typography variant="h6" mb={2}>
//         Smart Attendance (Camera + Geo)
//       </Typography>

//       {!hasCameraAccess ? (
//         <Button variant="contained" onClick={startCamera}>
//           Start Camera
//         </Button>
//       ) : (
//         <Box>
//           <video
//             ref={videoRef}
//             autoPlay
//             style={{
//               width: "100%",
//               maxWidth: "400px",
//               borderRadius: "10px",
//               marginBottom: "10px",
//             }}
//           />

//           <Button variant="outlined" onClick={captureImage}>
//             Capture Selfie
//           </Button>
//         </Box>
//       )}

//       {capturedImage && (
//         <Box mt={2}>
//           <Typography variant="subtitle1">Captured Image:</Typography>
//           <img
//             src={capturedImage}
//             alt="Captured Selfie"
//             style={{ width: 200, height: 200, borderRadius: "10px" }}
//           />
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={markAttendance}
//             disabled={loading}
//             sx={{ display: "block", mt: 2 }}
//           >
//             {loading ? "Marking Attendance..." : "Mark Attendance"}
//           </Button>
//         </Box>
//       )}

//       {loading && (
//         <Box mt={2}>
//           <CircularProgress />
//         </Box>
//       )}

//       {success && (
//         <Alert severity="success" sx={{ mt: 2 }}>
//           ✅ Face + Geo Attendance Marked Successfully!
//         </Alert>
//       )}

//       <canvas ref={canvasRef} style={{ display: "none" }} />
//     </Box>
//   );
// };

// export default SmartAttendance;
