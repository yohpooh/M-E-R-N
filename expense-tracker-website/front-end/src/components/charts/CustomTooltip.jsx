import React from "react";
import { addThousandsSeparator } from "../../utils/helper";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white shadow-md rounded-lg p-2 border border-gray-300">
        <p className="text-xs font-semibold text-gray-800 mb-1">
          {payload[0].name}
        </p>
        <p className="text-sm text-gray-600">
          Amount:{" "}
          <span className="text-sm font-medium text-gray-900">
            ₱{addThousandsSeparator(payload[0].value)}
          </span>
        </p>
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
