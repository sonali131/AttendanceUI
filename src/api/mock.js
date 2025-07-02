// In a real app, this would be your user database.
// const USERS = {
//   "superadmin@test.com": {
//     password: "password",
//     role: "superadmin",
//     name: "Super Admin",
//   },
//   "admin@test.com": { password: "password", role: "admin", name: "Org Admin" },
//   "hr@test.com": { password: "password", role: "hr", name: "Jane HR" },
//   "manager@test.com": {
//     password: "password",
//     role: "manager",
//     name: "Mike Manager",
//   },
//   // --- YAHAN PAR BADLAAV KIYA GAYA HAI ---
//   "employee@test.com": {
//     password: "password",
//     role: "employee",
//     name: "Alice Johnson", // Naam ko MOCK_EMPLOYEES se match kar diya
//     id: 101, // Employee ID add kiya
//   },
// };

// // --- EMPLOYEE MOCK DATA AND APIs ---
// let MOCK_EMPLOYEES = [
//   {
//     id: 101,
//     name: "Alice Johnson",
//     email: "alice.j@example.com",
//     department: "Engineering",
//     designation: "Senior Developer",
//     faceDataStatus: "Uploaded",
//   },
//   {
//     id: 102,
//     name: "Bob Williams",
//     email: "bob.w@example.com",
//     department: "Engineering",
//     designation: "Junior Developer",
//     faceDataStatus: "Not Uploaded",
//   },
//   {
//     id: 103,
//     name: "Charlie Brown",
//     email: "charlie.b@example.com",
//     department: "Product",
//     designation: "Product Manager",
//     faceDataStatus: "Uploaded",
//   },
// ];

// // --- ATTENDANCE MOCK DATA ---
// const MOCK_ATTENDANCE_RECORDS = [
//   // Data for Alice Johnson (id: 101)
//   {
//     id: 1,
//     employeeId: 101,
//     date: "2023-11-01",
//     inTime: "09:01",
//     outTime: "17:35",
//     status: "Present",
//     location: "Office",
//   },
//   {
//     id: 2,
//     employeeId: 101,
//     date: "2023-11-02",
//     inTime: "09:15",
//     outTime: "18:02",
//     status: "Present",
//     location: "Office",
//   },
//   {
//     id: 3,
//     employeeId: 101,
//     date: "2023-11-03",
//     inTime: null,
//     outTime: null,
//     status: "Absent",
//     location: null,
//   },
//   {
//     id: 4,
//     employeeId: 101,
//     date: "2023-11-04",
//     inTime: "08:55",
//     outTime: "17:00",
//     status: "Present",
//     location: "Remote",
//   },
//   {
//     id: 5,
//     employeeId: 101,
//     date: "2023-11-05",
//     inTime: null,
//     outTime: null,
//     status: "Leave",
//     location: null,
//   },
//   // Data for another employee (id: 102) for testing
//   {
//     id: 6,
//     employeeId: 102,
//     date: "2023-11-01",
//     inTime: "09:05",
//     outTime: "17:30",
//     status: "Present",
//     location: "Office",
//   },
// ];

// // =======================================================
// // =============== ALL API FUNCTIONS =====================
// // =======================================================

// // --- AUTH API ---
// export const apiLogin = (email, password) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const user = USERS[email];
//       if (user && user.password === password) {
//         const { password: _password, ...userProfile } = user;
//         resolve({ success: true, user: userProfile });
//       } else {
//         reject({ success: false, message: "Invalid credentials" });
//       }
//     }, 1000);
//   });
// };

// // --- EMPLOYEE APIs ---
// export const apiGetEmployees = () =>
//   new Promise((resolve) => setTimeout(() => resolve([...MOCK_EMPLOYEES]), 500));

// export const apiAddEmployee = (employee) =>
//   new Promise((resolve) => {
//     const newEmployee = { ...employee, id: Date.now() };
//     MOCK_EMPLOYEES.push(newEmployee);
//     resolve(newEmployee);
//   });

// export const apiUpdateEmployee = (updatedEmployee) =>
//   new Promise((resolve) => {
//     MOCK_EMPLOYEES = MOCK_EMPLOYEES.map((emp) =>
//       emp.id === updatedEmployee.id ? updatedEmployee : emp
//     );
//     resolve(updatedEmployee);
//   });

// export const apiDeleteEmployee = (employeeId) =>
//   new Promise((resolve) => {
//     MOCK_EMPLOYEES = MOCK_EMPLOYEES.filter((emp) => emp.id !== employeeId);
//     resolve({ success: true, id: employeeId });
//   });

// export const apiBulkAddEmployees = (newEmployees) =>
//   new Promise((resolve) => {
//     const employeesWithIds = newEmployees.map((emp) => ({
//       ...emp,
//       id: Date.now() + Math.random(),
//       faceDataStatus: "Not Uploaded",
//     }));
//     MOCK_EMPLOYEES = [...MOCK_EMPLOYEES, ...employeesWithIds];
//     resolve({ success: true, count: employeesWithIds.length });
//   });

// // --- ATTENDANCE APIs ---
// export const apiGetAttendance = (employeeId) =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       if (!employeeId) {
//         // Agar ID na mile, to khaali array bhejein
//         return resolve([]);
//       }
//       const filteredRecords = MOCK_ATTENDANCE_RECORDS.filter(
//         (record) => record.employeeId === employeeId
//       );
//       resolve(filteredRecords);
//     }, 700);
//   });

// export const apiMarkAttendance = (employeeId, method, location) =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(`--- ATTENDANCE MARKED ---
//         Employee ID: ${employeeId}
//         Method: ${method}
//         Location: Lat: ${location.latitude}, Lon: ${location.longitude}
//         Timestamp: ${new Date().toLocaleString()}
//         -------------------------`);
//       resolve({
//         success: true,
//         message: `Attendance marked successfully using ${method}!`,
//       });
//     }, 1000);
//   });
// export const getTeamEmployees = () =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(MOCK_EMPLOYEES);
//     }, 500);
//   });
// ========== USER DATABASE ==========
const USERS = {
  "superadmin@test.com": {
    password: "password",
    role: "superadmin",
    name: "Super Admin",
  },
  "admin@test.com": {
    password: "password",
    role: "admin",
    name: "Org Admin",
  },
  "hr@test.com": {
    password: "password",
    role: "hr",
    name: "Jane HR",
  },
  "manager@test.com": {
    password: "password",
    role: "manager",
    name: "Mike Manager",
  },
  "employee@test.com": {
    password: "password",
    role: "employee",
    name: "Alice Johnson",
    id: 101,
  },
};

// ========== EMPLOYEE DATA ==========
let MOCK_EMPLOYEES = [
  {
    id: 101,
    name: "Alice Johnson",
    email: "alice.j@example.com",
    department: "Engineering",
    designation: "Senior Developer",
    faceDataStatus: "Uploaded",
  },
  {
    id: 102,
    name: "Bob Williams",
    email: "bob.w@example.com",
    department: "Engineering",
    designation: "Junior Developer",
    faceDataStatus: "Not Uploaded",
  },
  {
    id: 103,
    name: "Charlie Brown",
    email: "charlie.b@example.com",
    department: "Product",
    designation: "Product Manager",
    faceDataStatus: "Uploaded",
  },
];

// ========== ATTENDANCE RECORDS ==========
const MOCK_ATTENDANCE_RECORDS = [
  {
    id: 1,
    employeeId: 101,
    date: "2023-11-01",
    inTime: "09:01",
    outTime: "17:35",
    status: "Present",
    location: "Office",
  },
  {
    id: 2,
    employeeId: 102,
    date: "2023-11-01",
    inTime: "09:05",
    outTime: "17:30",
    status: "Present",
    location: "Office",
  },
];

// ========== QR ATTENDANCE STORE ==========
let QR_CODES = {}; // { "2023-11-01": "qrcode123" }

// ========== AUTH API ==========
export const apiLogin = (email, password) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = USERS[email];
      if (user && user.password === password) {
        const { password: _pw, ...userProfile } = user;
        resolve({ success: true, user: userProfile });
      } else {
        reject({ success: false, message: "Invalid credentials" });
      }
    }, 1000);
  });

// ========== EMPLOYEE APIs ==========
export const apiGetEmployees = () =>
  new Promise((resolve) => setTimeout(() => resolve([...MOCK_EMPLOYEES]), 500));

export const apiAddEmployee = (employee) =>
  new Promise((resolve) => {
    const newEmp = { ...employee, id: Date.now() };
    MOCK_EMPLOYEES.push(newEmp);
    resolve(newEmp);
  });

export const apiUpdateEmployee = (updated) =>
  new Promise((resolve) => {
    MOCK_EMPLOYEES = MOCK_EMPLOYEES.map((emp) =>
      emp.id === updated.id ? updated : emp
    );
    resolve(updated);
  });

export const apiDeleteEmployee = (id) =>
  new Promise((resolve) => {
    MOCK_EMPLOYEES = MOCK_EMPLOYEES.filter((emp) => emp.id !== id);
    resolve({ success: true, id });
  });

export const apiBulkAddEmployees = (list) =>
  new Promise((resolve) => {
    const withIds = list.map((emp) => ({
      ...emp,
      id: Date.now() + Math.random(),
      faceDataStatus: "Not Uploaded",
    }));
    MOCK_EMPLOYEES = [...MOCK_EMPLOYEES, ...withIds];
    resolve({ success: true, count: withIds.length });
  });

export const getTeamEmployees = () =>
  new Promise((resolve) => setTimeout(() => resolve(MOCK_EMPLOYEES), 500));

// ========== ATTENDANCE APIs ==========
export const apiGetAttendance = (employeeId) =>
  new Promise((resolve) => {
    setTimeout(() => {
      const records = MOCK_ATTENDANCE_RECORDS.filter(
        (r) => r.employeeId === employeeId
      );
      resolve(records);
    }, 700);
  });

export const apiMarkAttendance = (employeeId, method, location) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(`--- ATTENDANCE MARKED ---
        Employee ID: ${employeeId}
        Method: ${method}
        Location: ${location.latitude}, ${location.longitude}
        Time: ${new Date().toLocaleString()}
      `);
      resolve({
        success: true,
        message: `Attendance marked successfully using ${method}!`,
      });
    }, 1000);
  });

// ========== QR ATTENDANCE APIs ==========

// Generate daily QR code
export const apiGenerateQRForToday = () =>
  new Promise((resolve) => {
    const today = new Date().toISOString().split("T")[0];
    const code = `QR-${today}-${Math.floor(Math.random() * 10000)}`;
    QR_CODES[today] = code;
    resolve({ success: true, date: today, code });
  });

// Get QR code by date (for display)
export const apiGetQRByDate = (date) =>
  new Promise((resolve) => {
    const code = QR_CODES[date];
    if (code) {
      resolve({ success: true, code });
    } else {
      resolve({
        success: false,
        message: "No QR code generated for this date",
      });
    }
  });

// Validate scanned QR and mark attendance
export const apiScanQRAndMarkAttendance = (employeeId, scannedCode) =>
  new Promise((resolve) => {
    const today = new Date().toISOString().split("T")[0];
    if (QR_CODES[today] === scannedCode) {
      MOCK_ATTENDANCE_RECORDS.push({
        id: Date.now(),
        employeeId,
        date: today,
        inTime: new Date().toLocaleTimeString(),
        outTime: null,
        status: "Present",
        location: "QR Scan",
      });
      resolve({ success: true, message: "QR attendance marked successfully!" });
    } else {
      resolve({ success: false, message: "Invalid or expired QR code." });
    }
  });
export const uploadFaceData = (employeeId, imageData) =>
  new Promise((resolve) => {
    console.log(`Mock uploadFaceData called for ID: ${employeeId}`);
    console.log("Image data:", imageData);
    // Just simulate success
    resolve({ success: true, message: "Face data uploaded successfully!" });
  });
const MOCK_LEAVE_REQUESTS = [
  {
    id: 1,
    employeeId: 101,
    employeeName: "Alice Johnson",
    leaveType: "Casual Leave",
    status: "Pending",
    fromDate: "2025-07-01",
    toDate: "2025-07-02",
    reason: "Personal work",
  },
  {
    id: 2,
    employeeId: 102,
    employeeName: "Bob Williams",
    leaveType: "Sick Leave",
    status: "Approved",
    fromDate: "2025-07-03",
    toDate: "2025-07-04",
    reason: "Fever",
  },
  // Removed invalid/incomplete object here
  {
    id: 1,
    employeeId: 101,
    employeeName: "Alice Johnson",
    leaveType: "Casual Leave", // not "type"
    status: "Pending", // case sensitive
  },
];

export const updateLeaveStatus = (leaveId, newStatus) =>
  new Promise((resolve, reject) => {
    const index = MOCK_LEAVE_REQUESTS.findIndex((l) => l.id === leaveId);
    if (index !== -1) {
      MOCK_LEAVE_REQUESTS[index].status = newStatus;
      resolve({
        success: true,
        message: `Leave request updated to '${newStatus}'`,
        updatedRequest: MOCK_LEAVE_REQUESTS[index],
      });
    } else {
      reject({ success: false, message: "Leave request not found" });
    }
  });
export const getLeaveRequests = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_LEAVE_REQUESTS);
    }, 500);
  });
