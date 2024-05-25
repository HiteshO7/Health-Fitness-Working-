// src/UI/WaterIntakePage.jsx
import React, { useState } from 'react';
import WaterIntakeCalculator from '../component/WaterIntakeCalculator';
import WaterIntakeBar from '../component/WaterIntakeBar';
import '../styles/WaterIntakePage.css';

const WaterIntakePage = () => {
  const [user, setUser] = useState(null);
  const [waterIntake, setWaterIntake] = useState(0);

  const handleUserSubmit = (userData) => {
    setUser(userData);
    const recommendedIntake = userData.age < 30 ? 3700 : userData.age < 55 ? 3500 : 3300;
    setWaterIntake(recommendedIntake);
  };

  return (
    <div className="container">
      <center><h1 class="h1water">Water Intake Calculator</h1></center>
      {!user ? (
        <WaterIntakeCalculator onSubmit={handleUserSubmit} />
      ) : (
        <div class="graphtext">
          <p>Hello, <b>{user.name}</b>!</p>
          <p>Recommended daily water intake: <b>{waterIntake} </b>ml</p>
          <WaterIntakeBar totalIntake={waterIntake} />
        </div>
      )}
    </div>
  );
};

export default WaterIntakePage;
