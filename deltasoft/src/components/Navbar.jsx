import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  useEffect(() => {
    // Set the initial active link based on the current URL
    setActiveLink(location.pathname);
  }, [location]);

  const setActiveLink = (path) => {
    const links = document.querySelectorAll('.navbar ul li a');
    links.forEach(link => {
      if (link.getAttribute('href') === path) {
        link.classList.add('active-link');
      } else {
        link.classList.remove('active-link');
      }
    });
  };

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
      <div className="auth-buttons">
        <button>Login</button>
        <button>Sign up</button>
      </div>
    </nav>
  );
}

export default Navbar;