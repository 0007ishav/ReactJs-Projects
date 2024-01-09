// About.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Redirect to another page (e.g., Home) after clicking
    navigate('/');
  };

  return (
    <div>
      <p>About Page</p>
      <button onClick={handleClick}>Go to Home</button>
    </div>
  );
};

export default About;
