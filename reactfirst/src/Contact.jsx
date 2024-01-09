// Contact.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Redirect to another page (e.g., Home) after clicking
    navigate('/');
  };

  return (
    <div>
      <p>Contact Page</p>
      <button onClick={handleClick}>Go to Home</button>
    </div>
  );
};

export default Contact;
