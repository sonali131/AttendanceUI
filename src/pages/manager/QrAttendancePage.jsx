// // src/pages/manager/QrAttendancePage.jsx

// import React, { useState } from "react";
// import QrScannerModal from "../../components/QrScannerModal";
// import {
//   Button,
//   Typography,
//   Box,
//   CircularProgress,
//   Alert,
// } from "@mui/material";

// // ✅ CORRECTED: Use the exact "Raw text" from the decoder.
// const VALID_QR_CODE = "https://qr.me-qr.com/Rkt6aeLd";

// const QrAttendancePage = () => {
//   // State to control if the scanner modal is open or closed
//   const [isModalOpen, setModalOpen] = useState(false);

//   // State to manage the UI feedback (loading, success, error)
//   const [scanStatus, setScanStatus] = useState({
//     loading: false,
//     error: null,
//     success: null,
//   });

//   const handleScanSuccess = (scannedData) => {
//     setModalOpen(false);
//     setScanStatus({ loading: true, error: null, success: null });

//     setTimeout(() => {
//       // This comparison will now succeed when you scan the correct QR code.
//       if (scannedData === VALID_QR_CODE) {
//         setScanStatus({
//           loading: false,
//           success: "Success! Attendance has been marked.",
//           error: null,
//         });
//       } else {
//         setScanStatus({
//           loading: false,
//           error: "Invalid or expired QR code. Please try again.",
//           success: null,
//         });
//       }
//     }, 1500);
//   };

//   const openScanner = () => {
//     setScanStatus({ loading: false, error: null, success: null });
//     setModalOpen(true);
//   };

//   return (
//     <Box p={3}>
//       <Typography variant="h5" mb={2} fontWeight="bold">
//         QR Code Attendance
//       </Typography>

//       <Button variant="contained" onClick={openScanner}>
//         Scan Attendance QR Code
//       </Button>

//       <Box mt={3} sx={{ height: "60px" }}>
//         {scanStatus.loading && (
//           <Box display="flex" alignItems="center">
//             <CircularProgress size={24} sx={{ mr: 2 }} />
//             <Typography>Verifying QR Code...</Typography>
//           </Box>
//         )}
//         {scanStatus.error && <Alert severity="error">{scanStatus.error}</Alert>}
//         {scanStatus.success && (
//           <Alert severity="success">{scanStatus.success}</Alert>
//         )}
//       </Box>

//       <QrScannerModal
//         open={isModalOpen}
//         onClose={() => setModalOpen(false)}
//         onScan={handleScanSuccess}
//       />
//     </Box>
//   );
// };

// export default QrAttendancePage;
// src/pages/manager/QrAttendancePage.jsx

import React, { useState, useRef } from "react";
// Import the core class for file scanning
import { Html5Qrcode } from "html5-qrcode";
import QrScannerModal from "../../components/QrScannerModal";
import {
  Button,
  Typography,
  Box,
  CircularProgress,
  Alert,
  Stack, // Used to space the buttons
} from "@mui/material";

const VALID_QR_CODE = "https://qr.me-qr.com/Rkt6aeLd";

const QrAttendancePage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [scanStatus, setScanStatus] = useState({
    loading: false,
    error: null,
    success: null,
  });

  // Create a ref for the hidden file input element
  const fileInputRef = useRef(null);

  /**
   * This function is the central logic for handling a successful scan,
   * regardless of whether it came from the camera or a file upload.
   */
  const handleScanSuccess = (scannedData) => {
    // Close the camera modal if it was open
    setModalOpen(false);

    // Set loading state
    setScanStatus({ loading: true, error: null, success: null });

    setTimeout(() => {
      if (scannedData === VALID_QR_CODE) {
        setScanStatus({
          loading: false,
          success: "Success! Attendance has been marked.",
          error: null,
        });
      } else {
        setScanStatus({
          loading: false,
          error: "Invalid or expired QR code. Please try again.",
          success: null,
        });
      }
    }, 1500); // Simulate network delay
  };

  /**
   * This function handles the file selection from the user's device.
   */
  const handleFileSelect = async (event) => {
    const file = event.target.files?.[0];
    if (!file) {
      return; // Exit if no file was selected
    }

    // This is a dummy element ID required by the library for initialization
    const readerElementId = "file-qr-reader";
    const html5QrCode = new Html5Qrcode(readerElementId);

    try {
      // Show the loading spinner while the file is being processed
      setScanStatus({ loading: true, error: null, success: null });
      const decodedText = await html5QrCode.scanFile(file, false);
      // If scan is successful, call the main handler
      handleScanSuccess(decodedText);
    } catch (err) {
      // If the library can't find a QR code in the image
      console.error("Error scanning file:", err);
      setScanStatus({
        loading: false,
        error:
          "Could not find a QR code in the selected image. Please try another file.",
        success: null,
      });
    } finally {
      // Important: Clear the file input so the user can select the same file again
      event.target.value = "";
    }
  };

  // --- Functions to trigger UI actions ---
  const openCameraScanner = () => {
    setScanStatus({ loading: false, error: null, success: null });
    setModalOpen(true);
  };

  const openFilePicker = () => {
    setScanStatus({ loading: false, error: null, success: null });
    fileInputRef.current?.click(); // Programmatically click the hidden file input
  };

  return (
    <Box p={3}>
      <Typography variant="h5" mb={3} fontWeight="bold">
        QR Code Attendance
      </Typography>

      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={openCameraScanner}>
          Scan with Camera
        </Button>
        <Button variant="outlined" onClick={openFilePicker}>
          Upload from Gallery
        </Button>
      </Stack>

      {/* Hidden file input for uploading QR code images */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        accept="image/*" // Only allow image files
        style={{ display: "none" }}
      />

      {/* Hidden div required by html5-qrcode for file scanning */}
      <div id="file-qr-reader" style={{ display: "none" }}></div>

      {/* This section displays feedback to the user */}
      <Box mt={3} sx={{ height: "60px" }}>
        {scanStatus.loading && (
          <Box display="flex" alignItems="center">
            <CircularProgress size={24} sx={{ mr: 2 }} />
            <Typography>Verifying QR Code...</Typography>
          </Box>
        )}
        {scanStatus.error && <Alert severity="error">{scanStatus.error}</Alert>}
        {scanStatus.success && (
          <Alert severity="success">{scanStatus.success}</Alert>
        )}
      </Box>

      {/* The QR Scanner Modal for the camera (remains unchanged) */}
      <QrScannerModal
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
        onScan={handleScanSuccess}
      />
    </Box>
  );
};

export default QrAttendancePage;
