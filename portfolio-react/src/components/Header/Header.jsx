import React from 'react';
import './Header.css'; // Optional for header-specific styles

const Header = () => {
  return (
    <header className="header">
      <div className="Nav-bar">
        <p className="logo">
          {/* <img src="/Img/logo.png" alt="Logo" /> */}
        </p>
        <ul className="Nav-list">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#highlight">Highlight</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
