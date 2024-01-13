import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Homepage';
import Page1 from './Page1';
import Footer from './footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes exact path="/" component={HomePage} />
        <Route path="/Page1" component={Page1} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;