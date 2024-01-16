import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './Homepage';
import Page1 from './Page1';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Page1" element={<Page1 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;