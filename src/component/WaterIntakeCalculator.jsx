// src/components/WaterIntakeCalculator.jsx
import React, { useState } from 'react';

const WaterIntakeCalculator = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, age: parseInt(age, 10) });
  };

  return (
    <center><form onSubmit={handleSubmit} class="formlocation">
       <div>
        <label class="textwater">Name:</label><br></br>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div><br />
      <div>
        <label class="textwater">Age:</label><br></br>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </div><br/>
      <center><button type="submit" class="textwater1">Calculate Water Intake</button> </center>
    </form></center>
  );
};

export default WaterIntakeCalculator;
