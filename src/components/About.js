import {React, useEffect} from 'react';
import './About.css';
import Avatar from './images/Avatar.png';
import {Link} from 'react-scroll';
import {TimelineLite, Power3} from 'gsap';
import Github from './images/icons/githubsocial.svg';
import Linkedin from './images/icons/linkedinsocial.svg';
import Twitter from './images/icons/twittersocial.svg';
import Insta from './images/icons/instasocial.svg';



function About() {
  let timeLine = new TimelineLite({delay: 0.3});

  useEffect(() => {
    timeLine.from('.avatar',{
      y:100, 
      opacity:0, 
      ease: Power3.easeOut, 
      delay:0.3}, 
      'Start'
    );
  })
  return (
  <div className='wrapAbout' id="about">
    <div className='left'>
      <h3>HELLO</h3>
      <h1>I'M OLUWATOMISIN</h1>
      <div className='seperator'></div>
      <div className="aboutDesc">
        <p>
        I'm a Software Developer currently based in Lagos, Nigeria.
        </p>
        <p>
          I have serious passion for programming, developing applications, and solving problems.
        </p>
      </div>
      <div className="btns">
        <div className="resumeBtn btn">
          <a href="https://drive.google.com/file/d/1el-oEwbfornrvGZaZd5LpIBPj2HDU-gJ/view?usp=sharing" target="_blank" rel='noreferrer noopener'>
            Resume
          </a>
        </div>
        <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} className="contactMeBtn btn">Contact Me</Link>
      </div>
      <div className="socials">
        <div className="git social">
          <a href="https://github.com/Oluwatomisin-code" target="_blank" rel='noreferrer noopener'>
            <img src={Github} alt="" className='gitt'/>
          </a>
        </div>
        <div className="linkedin social">
          <a href="https://www.linkedin.com/in/oluwatomisin-adeyinka-26a13219b" target="_blank" rel='noreferrer noopener'>
            <img src={Linkedin} alt="" />
          </a>
        </div>
        <div className="twitter social">
          <a href="https://twitter.com/tomikeyz_dev" target="_blank" rel='noreferrer noopener'>
            <img src={Twitter} alt="" />
          </a>
        </div>
        <div className="insta social">
          <a href="https://instagram.com/tomikeyz_dev" target="_blank" rel='noreferrer noopener'>
            <img src={Insta} alt="" />
          </a>
        </div>
        
      </div>
    </div>
    <div className="right">
      <img src={Avatar} alt="Avatar" className='avatar'/>
    </div>
  </div>
  );
}

export default About;
