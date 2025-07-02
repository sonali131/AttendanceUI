// 📁 src/pages/manager/MonthlyReportPage.jsx
import React from "react";
import ReportsTable from "../../components/ReportsTable";
<h1>Monthly Report</h1>;
const MonthlyReportPage = () => {
  return <ReportsTable scope="team" reportType="monthly" />;
};

export default MonthlyReportPage;
