import React, { useState } from "react";
import { Button, Typography, Box, Alert } from "@mui/material";

const UploadFace = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setUploadSuccess(true);
    }
  };

  return (
    <Box p={2}>
      <Typography variant="h6" mb={2}>
        Upload Employee Face Data
      </Typography>

      <Button variant="contained" component="label">
        Upload Image
        <input
          type="file"
          hidden
          accept="image/*"
          onChange={handleImageUpload}
        />
      </Button>

      {uploadSuccess && (
        <Alert severity="success" sx={{ mt: 2 }}>
          Image uploaded successfully!
        </Alert>
      )}

      {selectedImage && (
        <Box mt={2}>
          <Typography variant="subtitle1" gutterBottom>
            Preview:
          </Typography>
          <Box
            component="img"
            src={selectedImage}
            alt="Uploaded"
            sx={{ width: 200, height: "auto", borderRadius: 2 }}
          />
        </Box>
      )}
    </Box>
  );
};

export default UploadFace;
