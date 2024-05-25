// src/component/AllRoutes.jsx
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../UI/Home';
import Testimonials from '../UI/Testimonials';
import Pricing from '../UI/Pricing';
import Track from '../UI/Track';
import WaterIntakePage from '../UI/WaterIntakePage';
import BMIPage from '../UI/BMIPage'; // Import the new BMIPage component
import { useAuth0 } from "@auth0/auth0-react";
import Login from '../UI/LogIn/Login';
import WorkoutSessionsPage from '../UI/WorkoutSessionsPage';

const AllRoutes = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/programs" element={<Testimonials />} />
      <Route path="/membership" element={<Pricing />} />
      <Route path="/track" element={isAuthenticated ? <Track /> : <Login />} />
      <Route path="/water-intake" element={<WaterIntakePage />} />
      <Route path="/bmi" element={<BMIPage />} /> {/* Add route for BMIPage */}
      <Route path="/workout-sessions" element={<WorkoutSessionsPage />} />
    </Routes>
  );
};

export default AllRoutes;
