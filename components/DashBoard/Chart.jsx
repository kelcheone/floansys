import React, { useContext } from "react";
import { Gcontext } from "../../context/Gcontext";

import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJs.register(Tooltip, Title, ArcElement, Legend);

const Chart = () => {
  const timeout = () => setTimeout(() => console.log, 400);
  timeout();
  const { activePayments, defaultedLoans } = useContext(Gcontext);
  return (
    <div>
      <Doughnut
        data={{
          labels: ["Active Payments", "Defaulted"],
          datasets: [
            {
              label: "Active Payments",
              data: [
                Object.keys(activePayments).length > 0
                  ? activePayments.accounts
                  : 0,
                Object.keys(defaultedLoans).length > 0
                  ? defaultedLoans.accounts
                  : 0,
              ],
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
