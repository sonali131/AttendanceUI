// src/components/FaceCamera.jsx
import React, { useRef, useEffect } from "react";

const FaceCamera = ({ onClose }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Camera error:", err);
        alert("Cannot access camera");
        onClose();
      }
    };

    startCamera();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, [onClose]);

  return (
    <div style={{ marginTop: "20px", textAlign: "center" }}>
      <video ref={videoRef} width="400" autoPlay style={{ borderRadius: 8 }} />
      <br />
      <button onClick={onClose} style={{ marginTop: "10px" }}>
        Close Camera
      </button>
    </div>
  );
};

export default FaceCamera;
