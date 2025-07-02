import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  MenuItem,
  Divider,
  Modal,
} from "@mui/material";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
import { Download, QrCodeScanner, CameraAlt } from "@mui/icons-material";
import { CSVLink } from "react-csv";
import QRCode from "react-qr-code";

const COLORS = ["#4caf50", "#f44336", "#2196f3"];

const pieData = [
  { name: "Present", value: 4 },
  { name: "Absent", value: 1 },
  { name: "Leave", value: 2 },
];

const chartData = [
  { day: "Mon", Present: 1, Absent: 0, Leave: 0 },
  { day: "Tue", Present: 1, Absent: 0, Leave: 0 },
  { day: "Wed", Present: 0, Absent: 0, Leave: 1 },
  { day: "Thu", Present: 1, Absent: 0, Leave: 0 },
  { day: "Fri", Present: 0, Absent: 1, Leave: 0 },
];

const attendanceTableData = [
  { date: "2025-06-24", in: "09:05 AM", out: "06:00 PM", status: "Present" },
  { date: "2025-06-25", in: "09:20 AM", out: "06:15 PM", status: "Present" },
  { date: "2025-06-26", in: "—", out: "—", status: "Leave" },
  { date: "2025-06-27", in: "09:10 AM", out: "06:05 PM", status: "Present" },
  { date: "2025-06-28", in: "—", out: "—", status: "Absent" },
];

const EmployeeDashboard = () => {
  const [openCamera, setOpenCamera] = useState(false);
  const [openQR, setOpenQR] = useState(false);
  const videoRef = useRef(null);

  const handleSmartAttendance = () => {
    navigator.geolocation.getCurrentPosition(
      () => setOpenCamera(true),
      () => alert("Location access denied.")
    );
  };

  const handleStartCamera = () => {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      if (videoRef.current) videoRef.current.srcObject = stream;
    });
  };

  const handleCloseCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
    }
    setOpenCamera(false);
    alert("✅ Face + Geo Attendance marked successfully!");
  };

  const handleQrAttendance = () => setOpenQR(true);
  const handleCloseQR = () => {
    setOpenQR(false);
    alert("✅ QR Attendance marked successfully!");
  };

  useEffect(() => {
    if (openCamera) handleStartCamera();
  }, [openCamera]);

  return (
    <Box p={3} bgcolor="#e3f2fd" minHeight="100vh">
      <Typography variant="h4" gutterBottom fontWeight="bold" color="#0d47a1">
        👨‍🏭 Employee Panel
      </Typography>

      <Grid container spacing={3}>
        {["Status: Present", "Leave Balance", "Weekly Summary"].map(
          (label, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  bgcolor: "#ffffff",
                  borderLeft: "5px solid #1976d2",
                  height: 140,
                }}
              >
                <CardContent>
                  <Typography variant="h6">{label}</Typography>
                  {index === 0 && (
                    <>
                      <Typography variant="body2">
                        Time In: <strong>09:10 AM</strong>
                      </Typography>
                      <Typography variant="body2">
                        Time Out: <strong>06:00 PM</strong>
                      </Typography>
                    </>
                  )}
                  {index === 1 && (
                    <Typography variant="body1">
                      Sick: <strong>3</strong> | Casual: <strong>4</strong> |
                      Earned: <strong>6</strong>
                    </Typography>
                  )}
                  {index === 2 && (
                    <ResponsiveContainer width="100%" height={90}>
                      <PieChart>
                        <Pie
                          data={pieData}
                          dataKey="value"
                          outerRadius={40}
                          label
                        >
                          {pieData.map((entry, i) => (
                            <Cell key={i} fill={COLORS[i]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  )}
                </CardContent>
              </Card>
            </Grid>
          )
        )}
      </Grid>

      <Box mt={4}>
        <Typography variant="h6" color="#0d47a1">
          Mark Attendance
        </Typography>
        <Grid container spacing={2} mt={1}>
          <Grid item>
            <Button
              variant="contained"
              startIcon={<CameraAlt />}
              onClick={handleSmartAttendance}
            >
              Smart Attendance
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              startIcon={<QrCodeScanner />}
              onClick={handleQrAttendance}
            >
              QR Attendance
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Box mt={5}>
        <Grid container spacing={3} direction="column">
          {["Bar Chart", "Line Chart"].map((title, idx) => (
            <Grid item key={idx}>
              <Card sx={{ width: "100%", height: 250 }}>
                <CardContent>
                  <Typography variant="h6" color="#0d47a1">
                    {title}
                  </Typography>
                  <ResponsiveContainer width="100%" height={180}>
                    {title === "Bar Chart" ? (
                      <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Present" fill="#4caf50" />
                        <Bar dataKey="Absent" fill="#f44336" />
                        <Bar dataKey="Leave" fill="#2196f3" />
                      </BarChart>
                    ) : (
                      <LineChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="Present"
                          stroke="#4caf50"
                        />
                        <Line
                          type="monotone"
                          dataKey="Absent"
                          stroke="#f44336"
                        />
                        <Line
                          type="monotone"
                          dataKey="Leave"
                          stroke="#2196f3"
                        />
                      </LineChart>
                    )}
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box mt={5}>
        <Typography variant="h6" color="#0d47a1">
          Attendance Record
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Grid container spacing={2} mb={2}>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Filter by Date"
              type="date"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField fullWidth select label="Status" defaultValue="">
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Present">Present</MenuItem>
              <MenuItem value="Absent">Absent</MenuItem>
              <MenuItem value="Leave">Leave</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} md={4}>
            <CSVLink
              data={attendanceTableData}
              filename="attendance_report.csv"
              style={{
                padding: "10px 20px",
                borderRadius: 4,
                border: "1px solid #1976d2",
                color: "#1976d2",
                display: "inline-block",
                textDecoration: "none",
              }}
            >
              <Download style={{ verticalAlign: "middle", marginRight: 8 }} />{" "}
              Export CSV
            </CSVLink>
          </Grid>
        </Grid>

        <Table>
          <TableHead sx={{ backgroundColor: "#1976d2" }}>
            <TableRow>
              <TableCell sx={{ color: "white" }}>Date</TableCell>
              <TableCell sx={{ color: "white" }}>Time In</TableCell>
              <TableCell sx={{ color: "white" }}>Time Out</TableCell>
              <TableCell sx={{ color: "white" }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {attendanceTableData.map((row, i) => (
              <TableRow key={i} hover>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.in}</TableCell>
                <TableCell>{row.out}</TableCell>
                <TableCell>
                  <Typography
                    variant="body2"
                    sx={{
                      color:
                        row.status === "Present"
                          ? "#4caf50"
                          : row.status === "Absent"
                          ? "#f44336"
                          : "#2196f3",
                      fontWeight: "bold",
                    }}
                  >
                    {row.status}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>

      <Modal open={openCamera} onClose={handleCloseCamera}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "white",
            p: 2,
            boxShadow: 24,
          }}
        >
          <Typography variant="h6">Smart Attendance - Face Camera</Typography>
          <video ref={videoRef} autoPlay width="300" />
          <Box mt={2} textAlign="right">
            <Button
              variant="contained"
              color="success"
              onClick={handleCloseCamera}
            >
              Mark Present
            </Button>
          </Box>
        </Box>
      </Modal>

      <Modal open={openQR} onClose={handleCloseQR}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "white",
            p: 3,
            textAlign: "center",
          }}
        >
          <Typography variant="h6">Scan this QR to mark Attendance</Typography>
          <QRCode value="employee-qr-code-2025-07-01" size={200} />
          <Box mt={2}>
            <Button variant="contained" onClick={handleCloseQR}>
              Done
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default EmployeeDashboard;
