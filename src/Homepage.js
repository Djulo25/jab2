import React from 'react';
import { Link } from 'react-router-dom';
import Footer from'./footer';
import './App.css';


const HomePage = () => {
    return (
      <div className="app">
        <header>
          <div className="banner-container">
          </div>
        </header>
            <div className="titre">
            </div>
        <div className="square-container">
        <Link to="/Page1">
            <div className="square1">
            </div>
        </Link>
        <Link to="/Page2">
            <div className="square2">
            </div>
        </Link>
          </div>
        <Footer/>
      </div>
    );
  };
  
  
  export default HomePage;
  