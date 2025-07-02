// 📁 src/pages/manager/TeamReportsPage.jsx
import React from "react";
import ReportsTable from "../../components/ReportsTable";

const TeamReportsPage = () => {
  return <ReportsTable scope="team" reportType="today" />;
};

export default TeamReportsPage;
