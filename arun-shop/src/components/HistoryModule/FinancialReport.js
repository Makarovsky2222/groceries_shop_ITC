// FinancialReport.js
import React from "react";

const FinancialReport = ({ orders }) => {
  const totalSales = orders.reduce((total, order) => total + order.amount, 0);

  return (
    <div className="financial-report">
      <h2>Financial Report</h2>
      <p>Total Sales: ${totalSales.toFixed(2)}</p>
      {/* Additional financial metrics can be added here */}
    </div>
  );
};

export default FinancialReport;
