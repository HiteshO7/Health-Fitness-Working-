// src/components/WaterIntakeBar.jsx
import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const WaterIntakeBar = ({ totalIntake }) => {
  const [currentIntake, setCurrentIntake] = useState(0);

  const handleAddWater = () => {
    setCurrentIntake((prevIntake) => Math.min(prevIntake + 500, totalIntake));
  };

  const percentage = (currentIntake / totalIntake) * 100;

  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: ['#7056f4', '#e0e0e0'],
        borderWidth: 0,
        circumference: 180,
        rotation: -90,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    rotation: 1 * Math.PI,
    circumference: 1 * Math.PI,
    cutout: '70%',
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  };

  return (
    <div>
      <div className="graph-container">
        <Doughnut data={data} options={options} />
      </div>
      <center><button onClick={handleAddWater} class="drink">Drink 500ml</button>
      <p><b>{currentIntake}</b> ml of <b>{totalIntake}</b> ml consumed</p></center>
    </div>
  );
};

export default WaterIntakeBar;
