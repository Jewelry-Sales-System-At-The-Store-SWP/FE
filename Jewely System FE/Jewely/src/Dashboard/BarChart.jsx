import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import React from "react";

const BarChart = () => {
  const data = {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [
      {
        label: 'Weekly Values',
        data: [10, 8, 20, 30, 40, 35, 50], // Example data for each day
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(201, 203, 207, 1)'
        ],
        borderWidth: 1,
      }
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div className="flex-row flex-wrap text-right">
      <div className="flex-1 flex-col items-start justify-start pt-2 px-0 pb-0 min-w-[178px]">
        <div className="self-stretch flex-col items-start justify-start gap-y-4">
          <div className="self-stretch">
            <Bar data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BarChart;