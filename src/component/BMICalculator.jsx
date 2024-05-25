// src/component/BMICalculator.jsx
import React, { useState } from 'react';
import '../styles/BMIPage.css';

const BMICalculator = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('male');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { name, age, sex, height, weight };
    onSubmit(userData);
  };

  return (
    <center>
    <form onSubmit={handleSubmit} class="formbmi">
        <h1 class="bmitext">Name</h1>
      <input
        type="text"
        class="bmiinput"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <h1 class="bmitext">Age</h1>
      <input
        type="number"
        class="bmiinput"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />
      <h1 class="bmitext">Gender</h1>
      <select value={sex} onChange={(e) => setSex(e.target.value)} class="bmiselect">
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <h1 class="bmitext">Height</h1>
      <input
        type="number"
        class="bmiinput"
        placeholder="Height (in cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        required
      />
      <h1 class="bmitext">Weight</h1>
      <input
        type="number"
        class="bmiinput"
        placeholder="Weight (in kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        required
      />
      <br />
      <center><button type="submit" class="bmibutton">Calculate BMI</button></center>
    </form></center>
  );
};

export default BMICalculator;