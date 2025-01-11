import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Visit Penang</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tourist-spots">Tourist Spots</Link></li>
        <li><Link to="/food">Food</Link></li>
        <li><Link to="/hotels">Hotels</Link></li>
        <li><Link to="/things-to-do">Things to Do</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
