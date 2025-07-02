// src/components/FaceUploadModal.jsx

import React, { useRef, useCallback } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
} from "@mui/material";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: "user",
};

const FaceUploadModal = ({ open, onClose, onCapture, employeeName }) => {
  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    // In a real app, you would upload this 'imageSrc' (base64 string) to your server
    onCapture(imageSrc);
    alert(`Face data captured for ${employeeName}!`);
    onClose();
  }, [webcamRef, onCapture, onClose, employeeName]);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm">
      <DialogTitle>Upload Face Data for {employeeName}</DialogTitle>
      <DialogContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography>
            Position your face inside the frame and click capture.
          </Typography>
          <Webcam
            audio={false}
            height={400}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={400}
            videoConstraints={videoConstraints}
            style={{ borderRadius: "8px" }}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={capture} variant="contained">
          Capture & Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FaceUploadModal;
