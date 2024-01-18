// Navbar.js
import React from 'react';
import '../styles/Navbar.css';
import { FaLinkedin, FaGithub, FaGitlab } from 'react-icons/fa';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const handleLogoClick = (logo) => {
    let url;

    switch (logo) {
      case 'LinkedIn':
        url = 'https://www.linkedin.com/in/adarsha-poudel';
        break;
      case 'Github':
        url = 'https://github.com/Adarsha58';
        break;
      case 'GitLab':
        url = 'https://gitlab.com/poudeladarsha8';
        break;
      default:
        url = 'https://www.example.com/';
    }

    window.open(url, '_blank');
  };

  return (
    <nav className="navbar-container">
      <div className="navlinks">
        <div className="navbar-left">
          <Link to="experience" smooth={true} duration={250}>
            <span className="navbar-brand navitem">Experience</span>
          </Link>
          <Link to="projects" smooth={true} duration={250}>
            <span className="navbar-brand navitem">Projects</span>
          </Link>
          <Link to="contact" smooth={true} duration={250}>
            <span className="navbar-brand navitem">Contact</span>
          </Link>
        </div>

        <div className="navbar-center">
          {/* Add some padding for space in the middle */}
        </div>

        <div className="navbar-right">
          <FaLinkedin
            className="navbar-logo"
            onClick={() => handleLogoClick('LinkedIn')}
          />
          <FaGithub
            className="navbar-logo"
            onClick={() => handleLogoClick('Github')}
          />
          <FaGitlab
            className="navbar-logo"
            onClick={() => handleLogoClick('GitLab')}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
