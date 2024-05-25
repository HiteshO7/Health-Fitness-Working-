// src/UI/BMIPage.jsx
import React, { useState } from 'react';
import BMICalculator from '../component/BMICalculator';
import BMIGraph from '../component/BMIGraph';
import '../styles/BMIPage.css';

const BMIPage = () => {
  const [user, setUser] = useState(null);
  const [bmi, setBMI] = useState(null);

  const handleUserSubmit = (userData) => {
    setUser(userData);
    const heightInMeters = userData.height / 100;
    const calculatedBMI = userData.weight / (heightInMeters * heightInMeters);
    setBMI(calculatedBMI);
  };

  return (
    <div className="container">
      <center><h1 className="h1bmi">BMI Calculator</h1></center>
      {!user ? (
        <BMICalculator onSubmit={handleUserSubmit} />
      ) : (
        <div className="bmiResult">
          <p>Hello, <b>{user.name}</b>!</p>
          <p>Your BMI is: <b>{bmi.toFixed(2)}</b></p>
          <BMIGraph bmi={bmi} />
        </div>
      )}
    </div>
  );
};

export default BMIPage;
