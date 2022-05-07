import React, {useState} from 'react';
import './Navbar.css';
import hamburger from './images/icons/hamburger.svg';
import {Link} from 'react-scroll';
import Logo from './images/Logo.svg';
import {FaTimes} from 'react-icons/fa';

function Navbar() {
  const [click, setClick] = useState(false);

  const toggleNav = () => {
    setClick(!click);
  }


  return( 
  <div>
    <nav>
      <div className="logo">
        <img src={Logo} alt=""/>
      </div>
      <ul className={click ? "navLinks active" : "navLinks"}>
        <li className="navLink">
          <Link to="about" spy={true} smooth={true} offset={-100} duration={500} onClick={toggleNav}>About Me</Link>
        </li>
        <li className="navLink">
          <Link to="skills" spy={true} smooth={true} offset={0} duration={500} onClick={toggleNav}>Skills</Link>
        </li>
        <li className="navLink">
          <Link to="projects" spy={true} smooth={true} offset={0} duration={500} onClick={toggleNav}>Projects</Link>
        </li>
        <li className="navLink">
          <Link to="contact" spy={true} smooth={true} offset={0} duration={500} onClick={toggleNav}>Contact Me</Link>
        </li>
      </ul>
      <div className="menu" onClick={toggleNav}>
        {click ?(<FaTimes size ={25} style = {{color: '#00008b'}}/>) : (<img src={hamburger} alt="menu" id="hamburger"/>)}
        
      </div>
    </nav>
  </div>
  );
}

export default Navbar;