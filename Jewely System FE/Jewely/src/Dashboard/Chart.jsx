import React from "react";
import { Line } from "react-chartjs-2";
import 'chart.js/auto'; 

const LineChart = () => {
  // Data for the chart
  const chartData = {
    labels: ['Jan','Feb','Mar','Apr','May','Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Revenue',
      data: [5000, 10000, 15000, 20000, 25000, 30000, 35000],
      backgroundColor: '#2563EB', // Fill color
      borderColor: '#2563EB', // Line color
      borderWidth: 1
    }]
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div className="w-full h-96 flex-1 rounded-xl bg-white flex flex-col items-start justify-start p-6 gap-6 max-w-full">
        <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default LineChart;
