import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isScrolled ? 'scrolled' : 'invisible'}`}>
        <div className='name-logo'>
            {/* <div><span className='logo-style'>san</span>kalp</div>
            <div>trip<span className='logo-style'>athi</span></div> */}
            ST
        </div>
      {/* <h2>sankalp tripathi</h2> */}
      <nav className='navbar-items'>
        <Link to="/dashboard">Home</Link>
        {/* <Link to="/">About Me</Link> */}
        
        {/* <Link to="/">Contact</Link> */}
        <ScrollLink to="about-me-container" smooth={true} duration={600}>
          About Me
        </ScrollLink>
        <ScrollLink to="contact-container" smooth={true} duration={600}>
          Contact
        </ScrollLink>
        <ScrollLink to="portfolio" smooth={true} duration={600}>
          Portfolio
        </ScrollLink>
        {/* <Link to="/">Portfolio</Link> */}
        <Link to="/resume"><span className='resume'>Resume</span></Link>
        {/* Add more navigation links as needed */}
      </nav>
    </div>
  );
};

export default Navbar;
