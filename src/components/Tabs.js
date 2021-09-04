import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';

function Tabs({ currentPage, handlePageChange }) {

  const [isActive, setisActive] = useState(false);

  return (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <a onClick={() => {
              setisActive(!isActive);
            }}
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
    <div id="navbarBasicExample" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
      <a href="#home"
          onClick={() => handlePageChange('Home')}

          className={currentPage === 'Home' ? 'nav-link active navbar-item' : 'nav-link navbar-item'}>
        Home
      </a>
        <a
          href="#about"
          onClick={() => handlePageChange('About')}

          className={currentPage === 'About' ? 'nav-link active navbar-item' : 'nav-link navbar-item'}
        >
          About Me
        </a>
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}

          className={currentPage === 'Portfolio' ? 'nav-link active navbar-item' : 'nav-link navbar-item'}
        >
          Projects
        </a>
   
        <a
          href="#contact"

          onClick={() => handlePageChange('Contact Me')}
          className={currentPage === 'Contact' ? 'nav-link active navbar-item' : 'nav-link navbar-item'}
        >
          Contact Me
        </a>
      </div>
  </nav>
  );
}

export default Tabs;
