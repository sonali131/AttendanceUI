// import * as React from "react";
// import Box from "@mui/material/Box";
// import { BarChart } from "@mui/x-charts/BarChart";

// // Dummy data
// const attendanceDataset = [
//   { period: "Mon", present: 5, absent: 1, leave: 0 },
//   { period: "Tue", present: 4, absent: 0, leave: 2 },
//   { period: "Wed", present: 6, absent: 0, leave: 0 },
//   { period: "Thu", present: 5, absent: 1, leave: 0 },
//   { period: "Fri", present: 3, absent: 2, leave: 1 },
//   { period: "Sat", present: 3, absent: 2, leave: 1 },
// ];

// const attendanceFormatter = (val) => `${val} emp`;

// // ⬇️ Compact height & margin
// const chartSetting = {
//   height: 220,
//   margin: { top: 20, bottom: 40, left: 2 },
// };

// export default function AttendanceGrid() {
//   return (
//     <Box
//       sx={{
//         width: "100%",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         mt: 3,
//         gap: 3,
//       }}
//     >
//       {/* 📊 Attendance Chart */}
//       <Box
//         sx={{
//           width: "85%",
//           maxWidth: 600, // ⬅️ Limits the width
//           boxShadow: 2,
//           borderRadius: 2,
//           bgcolor: "#fff",
//           p: 2,
//         }}
//       >
//         <BarChart
//           dataset={attendanceDataset}
//           xAxis={[{ dataKey: "period", label: "Day" }]}
//           series={[
//             {
//               dataKey: "present",
//               label: "Present",
//               color: "#4caf50",
//               valueFormatter: attendanceFormatter,
//             },
//             {
//               dataKey: "absent",
//               label: "Absent",
//               color: "#f44336",
//               valueFormatter: attendanceFormatter,
//             },
//             {
//               dataKey: "leave",
//               label: "Leave",
//               color: "#ff9800",
//               valueFormatter: attendanceFormatter,
//             },
//           ]}
//           {...chartSetting}
//         />
//       </Box>
//     </Box>
//   );
// }
import * as React from "react";
import Box from "@mui/material/Box";
import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts/LineChart";

// Dummy data
const attendanceDataset = [
  { period: "Mon", present: 5, absent: 1, leave: 0 },
  { period: "Tue", present: 4, absent: 0, leave: 2 },
  { period: "Wed", present: 6, absent: 0, leave: 0 },
  { period: "Thu", present: 5, absent: 1, leave: 0 },
  { period: "Fri", present: 3, absent: 2, leave: 1 },
  { period: "Sat", present: 3, absent: 2, leave: 1 },
];

const attendanceFormatter = (val) => `${val} emp`;

const presentSeries = attendanceDataset.map((d) => d.present);
const absentSeries = attendanceDataset.map((d) => d.absent);
const leaveSeries = attendanceDataset.map((d) => d.leave);
const xLabels = attendanceDataset.map((d) => d.period);

export default function AttendanceGrid() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 4,
        mt: 4,
        ml: 16,
        flexWrap: "wrap",
      }}
    >
      {/* 📊 Bar Chart */}
      <Box
        sx={{
          width: 400,
          height: 280,
          bgcolor: "#fff",
          boxShadow: 2,
          borderRadius: 2,
          p: 2,
        }}
      >
        <BarChart
          dataset={attendanceDataset}
          xAxis={[{ dataKey: "period", label: "Day" }]}
          series={[
            {
              dataKey: "present",
              label: "Present",
              color: "#4caf50",
              valueFormatter: attendanceFormatter,
            },
            {
              dataKey: "absent",
              label: "Absent",
              color: "#f44336",
              valueFormatter: attendanceFormatter,
            },
            {
              dataKey: "leave",
              label: "Leave",
              color: "#ff9800",
              valueFormatter: attendanceFormatter,
            },
          ]}
          height={220}
        />
      </Box>

      {/* 📈 Line Chart */}
      <Box
        sx={{
          width: 400,
          height: 280,
          bgcolor: "#fff",
          boxShadow: 2,
          borderRadius: 2,
          p: 2,
        }}
      >
        <LineChart
          xAxis={[{ scaleType: "point", data: xLabels }]}
          series={[
            {
              data: presentSeries,
              label: "Present",
              color: "#4caf50",
              curve: "linear",
            },
            {
              data: absentSeries,
              label: "Absent",
              color: "#f44336",
              curve: "linear",
            },
            {
              data: leaveSeries,
              label: "Leave",
              color: "#ff9800",
              curve: "linear",
            },
          ]}
          height={220}
        />
      </Box>
    </Box>
  );
}
