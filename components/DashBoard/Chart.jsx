import React from "react";

import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJs.register(Tooltip, Title, ArcElement, Legend);

const Chart = () => {
  return (
    <div>
      <Doughnut
        data={{
          labels: ["Active Payments", "Defaulted"],
          datasets: [
            {
              label: "Active Payments",
              data: [12, 19],
              backgroundColor: ["#34D399", "#FBBF24"],
              hoverOffset: 4,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};

export default Chart;
