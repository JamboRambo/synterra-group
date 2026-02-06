import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SynterraLandingPage from './SynterraLandingPage';
import AboutPortfolio from './AboutPortfolio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SynterraLandingPage />} />
        <Route path="/about-portfolio" element={<AboutPortfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
