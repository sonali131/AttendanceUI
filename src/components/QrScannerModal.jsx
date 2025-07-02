// import React, { useEffect, useRef } from "react";
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   Box,
//   Typography,
// } from "@mui/material";
// import { Html5QrcodeScanner } from "html5-qrcode";

// const QrScannerModal = ({ open, onClose, onScan }) => {
//   const scannerRef = useRef(null); // To hold scanner instance
//   const containerId = "qr-scanner";

//   useEffect(() => {
//     let scanner = null;

//     if (open) {
//       const timeout = setTimeout(() => {
//         scanner = new Html5QrcodeScanner(
//           containerId,
//           {
//             qrbox: { width: 250, height: 250 },
//             fps: 10,
//           },
//           false // verbose
//         );

//         const onScanSuccess = (decodedText) => {
//           scanner.clear();
//           onScan(decodedText);
//         };

//         const onScanFailure = (error) => {
//           console.warn(`QR error = ${error}`);
//         };

//         scanner.render(onScanSuccess, onScanFailure);
//         scannerRef.current = scanner;
//       }, 300); // Give time for DOM to render

//       return () => {
//         clearTimeout(timeout);
//         if (scannerRef.current) {
//           scannerRef.current
//             .clear()
//             .catch((err) => console.error("Failed to clear scanner:", err));
//         }
//       };
//     }
//   }, [open, onScan]);

//   return (
//     <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
//       <DialogTitle>Scan QR Code</DialogTitle>
//       <DialogContent>
//         <Box
//           sx={{
//             p: 2,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           <Typography sx={{ mb: 2 }}>
//             Point your camera at the daily QR code.
//           </Typography>

//           {/* Scanner container */}
//           <Box
//             id={containerId}
//             sx={{ width: "100%", maxWidth: "400px", minHeight: "300px" }}
//           ></Box>
//         </Box>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default QrScannerModal;
// src/components/QrScannerModal.jsx

import React, { useEffect, useRef } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Typography,
} from "@mui/material";
import { Html5QrcodeScanner } from "html5-qrcode";

//import QRCode from "qrcode.react"; // ✅ CORRECT

{
  /* <QRCode value="https://your-image-or-link.com" size={200} />; */
}
const QrScannerModal = ({ open, onClose, onScan }) => {
  const scannerRef = useRef(null); // Holds scanner instance
  const containerId = "qr-scanner"; // Matches the element id in JSX

  useEffect(() => {
    let scanner = null;
    let timeout = null;

    if (open) {
      timeout = setTimeout(() => {
        scanner = new Html5QrcodeScanner(
          containerId,
          {
            qrbox: { width: 250, height: 250 },
            fps: 10,
          },
          false // verbose logging off
        );

        const onScanSuccess = (decodedText) => {
          scanner.clear(); // Stop scanner after first detection
          onScan(decodedText); // Pass result to parent
        };

        const onScanFailure = (error) => {
          console.warn(`QR error = ${error}`);
        };

        scanner.render(onScanSuccess, onScanFailure);
        scannerRef.current = scanner;
      }, 300); // Delay ensures dialog and DOM are fully rendered
    }

    // Cleanup on modal close/unmount
    return () => {
      clearTimeout(timeout);
      if (scannerRef.current) {
        scannerRef.current
          .clear()
          .catch((err) => console.error("Failed to clear scanner:", err));
        scannerRef.current = null;
      }
    };
  }, [open, onScan]);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Scan QR Code</DialogTitle>
      <DialogContent>
        <Box
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={{ mb: 2 }}>
            Point your camera at the daily QR code.
          </Typography>

          {/* Container for QR Scanner */}
          <Box
            id={containerId}
            sx={{
              width: "100%",
              maxWidth: "400px",
              minHeight: "300px", // Helps avoid scanner not found error
            }}
          ></Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default QrScannerModal;
