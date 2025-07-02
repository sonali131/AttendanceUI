// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import MarkAttendancePage from "../pages/MarkAttendancePage";
// Layouts
import DashboardLayout from "../layouts/DashboardLayout";

// Auth Pages
import Login from "../pages/LoginPage";
import LeaveLevelPage from "../pages/LeaveLevelPage";

// Shared Pages
const Unauthorized = () => <h1>403: Unauthorized</h1>;
const PlaceholderPage = ({ title }) => <h2>{title || "Page Coming Soon"}</h2>;

// Routes
import ProtectedRoute from "./ProtectedRoute";
import EmployeeManagementPage from "../pages/EmployeeManagementPage";
import HRDashboard from "../pages/HRDashboard";
import ReportsTable from "../components/ReportsTable";
import HRReportsPage from "../pages/HRReportsPage";
import UpdateProfilePage from "../pages/UpdateProfilePage";
import ChangePasswordPage from "../pages/ChangePasswordPage";
import TeamReportsPages from "../pages/manager/TeamReportsPage";
import ViewTeamPage from "../pages/manager/ViewTeamPage";
import MonthlyReportPage from "../pages/manager/MonthlyReportPage";
import QrAttendancePage from "../pages/manager/QrAttendancePage";
import UploadFaceDataPage from "../pages/manager/UploadFaceDataPage";
// ✅ Correct import
import ChangePasswordPagem from "../pages/manager/ChangePasswordPagem";
import StartSmartAttendancePage from "../pages/manager/StartSmartAttendancePage";
import TeamLeavesPage from "../pages/manager/TeamLeavesPage";
import CreateUser from "../pages/superadmin/CreateUser";
import AssignPermissions from "../pages/superadmin/AssignPermissions";
import ModuleManagement from "../pages/superadmin/ModuleManagement";
import ResetPassword from "../pages/superadmin/ResetPassword";
import AssignSubmodules from "../pages/superadmin/AssignSubmodules";
import SubmoduleManagement from "../pages/superadmin/SubmoduleManagement";
import Dashboard from "../pages/superadmin/Dashboard";
import ManagerDashboard from "../pages/manager/ManagerDashboard";
import AdminDashboard from "../pages/admin/AdminDashboard";
import EmployeeList from "../pages/admin/EmployeeList";
import LeaveRequests from "../pages/admin/LeaveRequests";
import Reports from "../pages/admin/Reports";
import SmartAttendance from "../pages/admin/SmartAttendance";
import QRAttendance from "../pages/admin/QRAttendance";
import UploadFace from "../pages/admin/UploadFace";
import BulkUpload from "../pages/admin/BulkUpload";
import AnomalyReview from "../pages/admin/AnomalyReview";
import EmployeeDashboard from "../pages/employee/EmployeeDashboard";

const AppRoutes = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <Routes>
      {/* AUTH ROUTE */}
      <Route path="/login" element={<Login />} />

      {/* PROTECTED ROUTES - All routes inside DashboardLayout require login */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        {/* Default redirect after login */}
        <Route
          index
          element={
            <Navigate
              to={user ? `/${user.role}/dashboard` : "/login"}
              replace
            />
          }
        />
        {/* Super Admin Routes */}
        <Route
          path="superadmin/users"
          element={
            <ProtectedRoute allowedRoles={["superadmin"]}>
              <PlaceholderPage title="Super Admin: User Management" />
            </ProtectedRoute>
          }
        />
        <Route
          path="superadmin/dashboard"
          element={
            <ProtectedRoute allowedRoles={["superadmin"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/superadmin/create-user" element={<CreateUser />} />
        <Route
          path="/superadmin/assign-permissions"
          element={<AssignPermissions />}
        />
        <Route
          path="/superadmin/assign-modules"
          element={<ModuleManagement />}
        />
        <Route
          path="/superadmin/assign-submodules"
          element={<AssignSubmodules />}
        />
        <Route path="/superadmin/modules" element={<ModuleManagement />} />
        <Route
          path="/superadmin/modules/submodules"
          element={<SubmoduleManagement />}
        />
        <Route path="/superadmin/reset-password" element={<ResetPassword />} />
        {/* <Route
          path="admin/employees"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <PlaceholderPage title="Admin: Employee Management" />
              <AdminDashboard />
            </ProtectedRoute>
          }
        /> */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* ... other admin routes */}

        {/* <Route path="/admin/dashboard" element={<Dashboard />} /> */}
        <Route path="/admin/employees" element={<EmployeeList />} />
        <Route path="/admin/leaves" element={<LeaveRequests />} />
        <Route path="/admin/reports" element={<Reports />} />
        <Route path="/admin/smart-attendance" element={<SmartAttendance />} />
        <Route path="/admin/qr-attendance" element={<QRAttendance />} />
        <Route path="/admin/upload-face" element={<UploadFace />} />
        <Route path="/admin/bulk-upload" element={<BulkUpload />} />
        <Route path="/admin/anomaly-review" element={<AnomalyReview />} />

        {/* HR Routes */}
        <Route
          path="hr/dashboard"
          element={
            <ProtectedRoute allowedRoles={["hr"]}>
              <PlaceholderPage title="HR Dashboard" />
              <HRDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hr/reports"
          element={
            <ProtectedRoute allowedRoles={["hr"]}>
              <HRReportsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hr/employees"
          element={
            <ProtectedRoute allowedRoles={["hr"]}>
              <EmployeeManagementPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hr/leaves"
          element={
            <ProtectedRoute allowedRoles={["hr"]}>
              {/* <LeaveLevelPage /> */}
              <LeaveRequests />
            </ProtectedRoute>
          }
        />
        {/* ... other hr routes */}
        {/* Manager Routes */}
        <Route
          path="manager/dashboard"
          element={
            <ProtectedRoute allowedRoles={["manager"]}>
              <PlaceholderPage title="Manager Dashboard" />
              <ManagerDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="manager/upload-face"
          element={
            <ProtectedRoute allowedRoles={["manager"]}>
              <UploadFaceDataPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="manager/change-password"
          element={
            <ProtectedRoute allowedRoles={["manager"]}>
              <ChangePasswordPagem />
            </ProtectedRoute>
          }
        />
        <Route
          path="manager/smart-attendance"
          element={
            <ProtectedRoute allowedRoles={["manager"]}>
              <StartSmartAttendancePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="manager/leaves"
          element={
            <ProtectedRoute allowedRoles={["manager"]}>
              <TeamLeavesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="manager/reports"
          element={
            <ProtectedRoute allowedRoles={["manager"]}>
              <PlaceholderPage title="Manager Dashboard" />
              <TeamReportsPages />
            </ProtectedRoute>
          }
        />
        <Route
          path="manager/employees"
          element={
            <ProtectedRoute allowedRoles={["manager"]}>
              <ViewTeamPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="manager/monthly-report"
          element={
            <ProtectedRoute allowedRoles={["manager"]}>
              <MonthlyReportPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="manager/qr-attendance"
          element={
            <ProtectedRoute allowedRoles={["manager"]}>
              <QrAttendancePage />
            </ProtectedRoute>
          }
        />
        {/* ... other manager routes */}
        <Route
          path="/employee/dashboard"
          element={
            <ProtectedRoute allowedRoles={["employee"]}>
              <PlaceholderPage title="Employee Dashboard" />
              <EmployeeDashboard />
            </ProtectedRoute>
          }
        />
        {/* Profile Management */}
        <Route
          path="employee/profile"
          element={
            <ProtectedRoute allowedRoles={["employee"]}>
              <PlaceholderPage title="Update Profile" />
              <UpdateProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="employee/change-password"
          element={
            <ProtectedRoute allowedRoles={["employee"]}>
              <ChangePasswordPage />
            </ProtectedRoute>
          }
        />
        {/* Leave Management */}
        <Route
          path="employee/leave-apply"
          element={
            <ProtectedRoute allowedRoles={["employee"]}>
              <LeaveLevelPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="employee/leaves"
          element={
            <ProtectedRoute allowedRoles={["employee"]}>
              <PlaceholderPage title="My Leave Requests (Filter by Type/Status)" />
            </ProtectedRoute>
          }
        />
        <Route
          path="employee/mark-attendance"
          element={
            <ProtectedRoute allowedRoles={["employee"]}>
              <MarkAttendancePage />
            </ProtectedRoute>
          }
        />
        {/* Fallback for authenticated users */}
        <Route path="unauthorized" element={<Unauthorized />} />
      </Route>

      {/* General Fallback */}
      <Route
        path="*"
        element={<Navigate to={isAuthenticated ? "/" : "/login"} />}
      />
    </Routes>
  );
};

export default AppRoutes;
