// NavBar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    // Redirect to Home page after clicking on Home link
    navigate('/');
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/" onClick={handleHomeClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
