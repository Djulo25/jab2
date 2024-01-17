import React from 'react';
import './bundle';
import Footer from './footer';

 
const Page1 = () => {
  const wholeCard = () => {
    // Add logic here
  };
 
  return (
    <>
    <div>
      <div className="image">
      </div>
      <div className="container">
        <h1 contentEditable>Palmier</h1>
        <p>Some content here</p>
        <p>Some content here</p>
      </div>
      <div className="container">
        <div id="theCard" className="card">
          <span id="topSuit"></span>
          <p id="randomNumber"></p>
          <span id="bottomSuit"></span>
        </div>
        <div className="action">
          <p id="action"></p>
        </div>
        <button className="button type--B" onClick={wholeCard}>
          Nouvelle carte
          <div className="button__line"></div>
          <div className="button__line"></div>
          <span className="button__text"></span>
          <div className="button__drow1"></div>
          <div className="button__drow2"></div>
          <div className="button__drow3"></div>
          <div className="button__drow4"></div>
        </button>
      </div>
    </div>
    <Footer />
    </>
  );
};
 
export default Page1;