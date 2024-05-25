// src/component/WorkoutSessionsLineChart.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const WorkoutSessionsLineChart = ({ workoutSessions }) => {
  const data = {
    labels: Object.keys(workoutSessions),
    datasets: [
      {
        label: 'User Workout Hours',
        data: Object.values(workoutSessions).map((value) => parseFloat(value)),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
      {
        label: 'Recommended Workout Hours',
        data: [2.3, 2, 0, 1.2, 2, 1.5, 0], // Recommended data
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 0.5, // Set the interval to 0.5
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Weekly Workout Sessions',
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default WorkoutSessionsLineChart;
