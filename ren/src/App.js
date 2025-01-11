import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import TouristSpotsPage from './components/TouristSpotsPage';
import FoodPage from './components/FoodPage';
import HotelsPage from './components/HotelsPage';
import ThingsToDoPage from './components/ThingsToDoPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tourist-spots" element={<TouristSpotsPage />} />
        <Route path="/food" element={<FoodPage />} />
        <Route path="/hotels" element={<HotelsPage />} />
        <Route path="/things-to-do" element={<ThingsToDoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
