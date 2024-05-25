// src/component/BMIGraph.jsx
import React from 'react';
import '../styles/BMIPage.css';
 
const BMIGraph = ({ bmi }) => {
  // Define the ranges for different BMI categories
  const bmiCategories = [
    { category: 'Underweight', min: 0, max: 18.5 },
    { category: 'Normal weight', min: 18.5, max: 24.9 },
    { category: 'Overweight', min: 25, max: 29.9 },
    { category: 'Obesity', min: 30, max: Infinity },
  ];

  // Determine the category for the current BMI
  const currentCategory = bmiCategories.find(
    (category) => bmi >= category.min && bmi <= category.max
  );

  return (
    <div className="bmiGraph">
      <p>Your BMI category is: {currentCategory ? currentCategory.category : 'Unknown'}</p>
    </div>
  );
};

export default BMIGraph;
