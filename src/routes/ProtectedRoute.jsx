// // src/routes/ProtectedRoute.jsx
// import React from "react";
// import { Navigate, useLocation } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";

// const ProtectedRoute = ({ children, allowedRoles }) => {
//   const { isAuthenticated, user } = useAuth();
//   const location = useLocation();

//   if (!isAuthenticated) {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   if (allowedRoles && !allowedRoles.includes(user.role)) {
//     // Redirect to a 'not authorized' page or their default dashboard
//     return <Navigate to="/unauthorized" replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;
// src/routes/ProtectedRoute.jsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Optional: redirect unauthorized users to their own dashboard
  const roleRedirects = {
    superadmin: "/superadmin/dashboard",
    admin: "/admin/dashboard",
    hr: "/hr/dashboard",
    manager: "/manager/dashboard",
    employee: "/employee/dashboard",
  };

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return (
      <Navigate to={roleRedirects[user.role] || "/unauthorized"} replace />
    );
  }

  return children;
};

export default ProtectedRoute;
