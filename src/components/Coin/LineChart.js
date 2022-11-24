import React from 'react'
import { Line } from "react-chartjs-2";
 import { Chart as ChartJS } from "chart.js/auto";
import './linechart.css'


// two parameters  optin & data

function LineChart({ chartData, options }) {
  return <Line data={chartData} options={options} />;
  // option styling a chart
}

export default LineChart
