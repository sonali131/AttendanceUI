// // File: src/pages/admin/QRAttendance.jsx
// import React from "react";
// import { Typography, Button } from "@mui/material";

// const QRAttendance = () => {
//   return (
//     <div>
//       <Typography variant="h6">QR Attendance</Typography>
//       <Button variant="contained">Generate QR for Today</Button>
//     </div>
//   );
// };
// export default QRAttendance;
// File: src/pages/admin/QRAttendance.jsx
import React, { useState } from "react";
import { Typography, Button, Box, Alert } from "@mui/material";
import QRCode from "react-qr-code";

const QRAttendance = () => {
  const [qrData, setQrData] = useState("");
  const [success, setSuccess] = useState(false);

  const generateQR = () => {
    const today = new Date();
    const dateStr = today.toISOString().split("T")[0]; // e.g., "2025-06-30"
    const mockQRPayload = {
      type: "attendance",
      date: dateStr,
    };

    const qrString = JSON.stringify(mockQRPayload);
    setQrData(qrString);
    setSuccess(true);
  };

  return (
    <Box p={2}>
      <Typography variant="h6" mb={2}>
        QR Attendance
      </Typography>

      <Button variant="contained" onClick={generateQR}>
        Generate QR for Today
      </Button>

      {qrData && (
        <Box mt={4} textAlign="center">
          <Typography variant="subtitle1" mb={1}>
            ✅ QR Code for {JSON.parse(qrData).date}
          </Typography>
          <QRCode value={qrData} size={200} />
        </Box>
      )}

      {success && (
        <Alert severity="success" sx={{ mt: 3 }}>
          QR Code generated successfully!
        </Alert>
      )}
    </Box>
  );
};

export default QRAttendance;
