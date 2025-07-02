// src/dataset/attendance.js
export const attendanceDataset = [
  { period: "Mon", present: 25, absent: 3, leave: 2 },
  { period: "Tue", present: 28, absent: 2, leave: 0 },
  { period: "Wed", present: 24, absent: 4, leave: 2 },
  { period: "Thu", present: 27, absent: 2, leave: 1 },
  { period: "Fri", present: 29, absent: 0, leave: 1 },
  { period: "Sat", present: 20, absent: 8, leave: 2 },
];

export const attendanceFormatter = (v) => `${v} emp`;
