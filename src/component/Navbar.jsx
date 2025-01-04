// Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white">
      <div className="flex items-center space-x-4">
        <img
          src="/path-to-logo.png"
          alt="Xentrix Studios Logo"
          className="h-12"
        />
        <h1 className="text-xl font-bold text-blue-700">Xentrix Studios</h1>
      </div>
      <ul className="hidden md:flex space-x-6 text-gray-700">
        <li>About Us</li>
        <li>Our Work</li>
        <li>Location</li>
        <li>News</li>
        <li>Careers</li>
        <li>Contact Us</li>
        <li>Client Log In</li>
      </ul>
    </nav>
  );
};

export default Navbar;
