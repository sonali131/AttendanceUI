// src/pages/employee/MarkAttendancePage.jsx
import AttendanceChart from "../components/AttendanceChart.jsx";

import React, { useState, useEffect } from "react";
import { QrCodeScanner } from "@mui/icons-material";

import {
  Container,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
  CircularProgress,
  Alert,
  Snackbar,
} from "@mui/material";
import { Face } from "@mui/icons-material";
import { useAuth } from "../contexts/AuthContext.jsx";
import { apiMarkAttendance } from "../api/mock.js";

// Import the modals
import FaceUploadModal from "../components/FaceUploadModal.jsx";
import QrScannerModal from "../components/QrScannerModal.jsx";

const MarkAttendancePage = () => {
  const { user } = useAuth();
  const [location, setLocation] = useState(null);
  const [locationError, setLocationError] = useState("");
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  // Modal states
  const [faceModalOpen, setFaceModalOpen] = useState(false);
  const [qrModalOpen, setQrModalOpen] = useState(false);

  // Get user's location on component mount
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setLocationError("");
        },
        (error) => {
          setLocationError(
            `Error getting location: ${error.message}. Please enable location services.`
          );
        }
      );
    } else {
      setLocationError("Geolocation is not available in your browser.");
    }
  }, []);

  const handleMarkAttendance = async (method) => {
    if (!location) {
      setLocationError(
        "Cannot mark attendance without location. Please enable it and refresh."
      );
      return;
    }

    setLoading(true);
    try {
      const response = await apiMarkAttendance(user.id, method, location);
      setFeedback({
        open: true,
        message: response.message,
        severity: "success",
      });
    } catch {
      setFeedback({
        open: true,
        message: "Failed to mark attendance.",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleFaceCapture = () => {
    setFaceModalOpen(false);
    // In a real app, you would send imageData to the API for verification.
    // For our mock, we just proceed.
    handleMarkAttendance("Face Scan");
  };

  const handleQrScan = (scanData) => {
    setQrModalOpen(false);
    console.log("QR Code Data:", scanData); // Here you can validate the QR code's secret string
    handleMarkAttendance("QR Code");
  };

  const handleCloseFeedback = (event, reason) => {
    if (reason === "clickaway") return;
    setFeedback({ ...feedback, open: false });
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Mark Your Attendance
      </Typography>

      {locationError && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {locationError}
        </Alert>
      )}
      {!location && !locationError && (
        <Alert severity="info" sx={{ mb: 2 }}>
          Getting your location...
        </Alert>
      )}

      <Grid container spacing={4} justifyContent="center">
        {/* Smart Attendance Card */}
        <Grid item xs={12} sm={6}>
          <Card>
            <CardActionArea
              onClick={() => setFaceModalOpen(true)}
              disabled={!location || loading}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  p: 4,
                }}
              >
                <Face sx={{ fontSize: 60 }} color="primary" />
                <Typography variant="h6" sx={{ mt: 2 }}>
                  Smart Attendance
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Use face scan + geolocation
                </Typography>
              </Box>
            </CardActionArea>
          </Card>
        </Grid>

        {/* QR Code Attendance Card */}
        <Grid item xs={12} sm={6}>
          <Card>
            <CardActionArea
              onClick={() => setQrModalOpen(true)}
              disabled={!location || loading}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  p: 4,
                }}
              >
                <QrCodeScanner sx={{ fontSize: 60 }} color="primary" />
                <Typography variant="h6" sx={{ mt: 2 }}>
                  QR Code Attendance
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Scan the daily QR code
                </Typography>
              </Box>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>

      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
          <Typography sx={{ ml: 2 }}>
            Marking attendance, please wait...
          </Typography>
        </Box>
      )}

      {/* Modals */}
      <FaceUploadModal
        open={faceModalOpen}
        onClose={() => setFaceModalOpen(false)}
        onCapture={handleFaceCapture}
        employeeName={user.name}
      />
      <QrScannerModal
        open={qrModalOpen}
        onClose={() => setQrModalOpen(false)}
        onScan={handleQrScan}
      />

      {/* Feedback Snackbar */}
      <Snackbar
        open={feedback.open}
        autoHideDuration={6000}
        onClose={handleCloseFeedback}
      >
        <Alert
          onClose={handleCloseFeedback}
          severity={feedback.severity}
          sx={{ width: "100%" }}
        >
          {feedback.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default MarkAttendancePage;
