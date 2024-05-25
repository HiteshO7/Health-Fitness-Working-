// src/component/WorkoutSessionForm.jsx
import React, { useState } from 'react';

const WorkoutSessionForm = ({ onSubmit }) => {
  const [sessions, setSessions] = useState({
    Monday: '',
    Tuesday: '',
    Wednesday: '',
    Thursday: '',
    Friday: '',
    Saturday: '',
    Sunday: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSessions({ ...sessions, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(sessions);
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(sessions).map((day) => (
        <div key={day} class = "workoutdiv">
          <label>{day}:</label><br />
          <input
            type="number"
            name={day}
            value={sessions[day]}
            onChange={handleChange}
            placeholder={`Hours for ${day}`}
          />
        </div>
      ))}
      <center><button type="submit" class="button12">Submit</button></center>
    </form>
  );
};

export default WorkoutSessionForm;
