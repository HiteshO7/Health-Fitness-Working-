// src/UI/WorkoutSessionsPage.jsx
import React, { useState } from 'react';
import WorkoutSessionForm from '../component/WorkoutSessionForm';
import WorkoutSessionsLineChart from '../component/WorkoutSessionsLineChart';
import '../styles/WorkoutSessionsPage.css';

const WorkoutSessionsPage = () => {
  const [workoutSessions, setWorkoutSessions] = useState({
    Monday: '',
    Tuesday: '',
    Wednesday: '',
    Thursday: '',
    Friday: '',
    Saturday: '',
    Sunday: '',
  });

  const handleWorkoutSessionsSubmit = (sessions) => {
    setWorkoutSessions(sessions);
  };

  return (
    <div className="container">
      <center><h1 className="h1workout">Workout Sessions</h1></center>
      <WorkoutSessionForm onSubmit={handleWorkoutSessionsSubmit} />
      {Object.keys(workoutSessions).some((key) => workoutSessions[key] === '') ? (
        <p class="Pworkout">Please fill in workout session times for all days</p>
      ) : (
        <WorkoutSessionsLineChart workoutSessions={workoutSessions} />
      )}
    </div>
  );
};

export default WorkoutSessionsPage;
