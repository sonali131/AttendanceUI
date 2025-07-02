// // src/pages/HRReportsPage.jsx
// import React, { useState } from "react";
// import { Box, Typography, Button, MenuItem, Select } from "@mui/material";
// import ReportsTable from "../components/ReportsTable";

// const HRReportsPage = () => {
//   const [selectedDate, setSelectedDate] = useState("");
//   const [selectedDept, setSelectedDept] = useState("");

//   return (
//     <Box sx={{ p: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         Attendance Reports
//       </Typography>

//       {/* Filter Bar */}
//       <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
//         <Select
//           value={selectedDept}
//           onChange={(e) => setSelectedDept(e.target.value)}
//           displayEmpty
//         >
//           <MenuItem value="">All Departments</MenuItem>
//           <MenuItem value="IT">IT</MenuItem>
//           <MenuItem value="HR">HR</MenuItem>
//           {/* Add more */}
//         </Select>

//         <input
//           type="date"
//           value={selectedDate}
//           onChange={(e) => setSelectedDate(e.target.value)}
//         />

//         <Button variant="outlined" onClick={() => console.log("Download CSV")}>
//           Export CSV
//         </Button>
//         <Button variant="outlined" onClick={() => console.log("Download PDF")}>
//           Export PDF
//         </Button>
//       </Box>

//       {/* Reports Table */}
//       <ReportsTable department={selectedDept} date={selectedDate} />
//     </Box>
//   );
// };

// export default HRReportsPage;
import React, { useState } from "react";
import { Box, Typography, Button, MenuItem, Select } from "@mui/material";
import ReportsTable from "../components/ReportsTable";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { unparse } from "papaparse";

const HRReportsPage = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedDept, setSelectedDept] = useState("");

  // 🔹 Sample data (Replace with actual filtered data)
  const reportData = [
    {
      name: "John Doe",
      date: "2025-06-26",
      in: "09:05",
      out: "17:15",
      status: "Present",
    },
    { name: "Jane HR", date: "2025-06-26", in: "-", out: "-", status: "Leave" },
  ];

  const handleExportCSV = () => {
    const csv = unparse(reportData);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "attendance_report.csv";
    link.click();
  };

  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.text("Attendance Report", 14, 16);
    autoTable(doc, {
      startY: 20,
      head: [["Name", "Date", "In Time", "Out Time", "Status"]],
      body: reportData.map((row) => [
        row.name,
        row.date,
        row.in,
        row.out,
        row.status,
      ]),
    });
    doc.save("attendance_report.pdf");
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Attendance Reports
      </Typography>

      {/* 🔍 Filter Bar */}
      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <Select
          value={selectedDept}
          onChange={(e) => setSelectedDept(e.target.value)}
          displayEmpty
        >
          <MenuItem value="">All Departments</MenuItem>
          <MenuItem value="IT">IT</MenuItem>
          <MenuItem value="HR">HR</MenuItem>
        </Select>

        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />

        <Button variant="outlined" onClick={handleExportCSV}>
          Export CSV
        </Button>
        <Button variant="outlined" onClick={handleExportPDF}>
          Export PDF
        </Button>
      </Box>

      {/* 📊 Reports Table */}
      <ReportsTable department={selectedDept} date={selectedDate} />
    </Box>
  );
};

export default HRReportsPage;
