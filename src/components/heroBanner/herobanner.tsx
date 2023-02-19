import React from "react";
import "./herobanner.css";

function HeroBanner() {
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <h1>Book your favorite movies now</h1>
        <p>Get the best seats and enjoy the latest movies in our theaters</p>
        <div className="cta-wrapper">
          <button className="cta-button">Now Showing</button>
          <button className="cta-button">Book now</button>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
