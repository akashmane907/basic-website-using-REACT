import React, { useState } from 'react';
import './Home.css'; // Import your CSS file
import homeImg from '../assets/homeimg.jpg'; // Import the image

function Home() {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div className="home">
      <div
        className="background-image"
        onMouseEnter={() => setShowOverlay(true)} // Show overlay on mouse enter
        onMouseLeave={() => setShowOverlay(false)} // Hide overlay on mouse leave
      >
        <img
          src={homeImg} // Use the imported image
          alt="Background"
          className="blur"
        />
        <div className={`text-overlay ${showOverlay ? 'show' : ''}`}>
          <h1>Welcome to Our Website</h1>
          <p>This is the home page of our website. Feel free to explore!</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
