import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Super Admin Dashboard</h2>
      <ul className="space-y-3">
        <li>
          <Link
            to="/superadmin/create-user"
            className="text-blue-600 underline"
          >
            👤 Create User
          </Link>
        </li>
        <li>
          <Link
            to="/superadmin/assign-permissions"
            className="text-blue-600 underline"
          >
            🔐 Assign Access
          </Link>
        </li>
        <li>
          <Link to="/superadmin/modules" className="text-blue-600 underline">
            🧩 Manage Modules
          </Link>
        </li>
        <li>
          <Link
            to="/superadmin/reset-password"
            className="text-blue-600 underline"
          >
            🔁 Reset Password
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
