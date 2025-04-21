import React from "react";
import CustomPieChart from "../charts/CustomPieChart";
import { addThousandsSeparator } from "../../utils/helper";

/*
    Gray Colors in Tailwind to HEX
    Total Balance = 900 = 111827
    Total Income = 500 = 6B7280
    Total Expense = 400 = 9CA3AF
*/
const COLORS = ["#111827", "#6B7280", "#9CA3AF"];

const FinanceOverView = ({ totalBalance, totalIncome, totalExpense }) => {
  const balanceData = [
    { name: "Total Balance", amount: totalBalance },
    { name: "Total Income", amount: totalIncome },
    { name: "Total Expence", amount: totalExpense },
  ];

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Financial Overview</h5>
      </div>

      <CustomPieChart
        data={balanceData}
        label="Total Balance"
        totalAmount={`₱${addThousandsSeparator(totalBalance)}`}
        showTextAnchor
        colors={COLORS}
      />
    </div>
  );
};

export default FinanceOverView;
