import React, { useEffect, useState } from "react";
import CustomPieChart from "../charts/CustomPieChart";
import { addThousandsSeparator } from "../../utils/helper";

const COLORS = ["#212121", "#616161", "#9e9e9e", "#e0e0e0"]; //

const RecentIncomeWithChart = ({ data, totalIncome }) => {
  const [chartData, setChartData] = useState([]);
  const prepareChartData = () => {
    const dataArr = data?.map((item) => ({
      name: item?.source,
      amount: item?.amount,
    }));

    setChartData(dataArr);
  };

  useEffect(() => {
    prepareChartData();

    return () => {};
  }, [data]);

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Last 60 Days Income</h5>
      </div>

      <CustomPieChart
        data={chartData}
        label="Total Income"
        totalAmount={`₱${addThousandsSeparator(totalIncome)}`}
        showTextAnchor
        colors={COLORS}
      />
    </div>
  );
};

export default RecentIncomeWithChart;
