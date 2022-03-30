import React from 'react';
import './Projects.css';
import Tubekatch from './images/projects/tubekatch.png';
import Portfolio from './images/projects/portfolio.png';
import Thespeedfixer from './images/projects/thespeedfixer.png';
import Whatsapp from './images/projects/whatsapp.png';
import {FaGithub} from 'react-icons/fa';
import {BiLinkAlt} from 'react-icons/bi';

function Projects() {
  return <div className='wrapProjects' id="projects">
    <div>
      <h2>
        Featured Projects
      </h2>
      <p>Selected projects I've worked on in the past.</p>
    </div>
    <div className="projectCards">
      <div className="projCard">
        <div className="blueTag"></div>
        <div className="projDetails">
          <div className="projHeading">WHATSAPP CLONE</div>
          <div className="projBrief">
            <p>
              <b>Brief:</b> Whatsapp is a web app that allows real-time communication between end users
            </p>
          </div>
          <div className="projStack">
            <p>
              <b>Tech Stack / Technologies:</b> Node.js, Express js, React js, Socket.io, cors.
            </p>
          </div>
          <div className='projLinks'>
            <a href="https://" target="_blank" rel='noreferrer noopener'>
              <BiLinkAlt size={20} style={{color:'#000000'}}/>
            </a>
            <a href="https://github.com/Oluwatomisin-code/chat" target="_blank" rel='noreferrer noopener'>
              <FaGithub size={20} style={{color:'#000000'}}/>
            </a>
          </div>
        </div>
        <div className="projImgs">
          <img src={Whatsapp} alt="" className='projImg' />
        </div>
      </div>
      <div className="projCard">
        <div className="blueTag"></div>
        <div className="projDetails">
          <div className="projHeading">TUBEKATCH</div>
          <div className="projBrief">
            <p>
              <b>Brief:</b> TubeKatch is a Youtube downloader that allows users to download as well as trim-grab youtube videos 
            </p>
          </div>
          <div className="projStack">
            <p>
              <b>Tech Stack / Technologies:</b> Node.js, Express js, Ffmpeg, cors.
            </p>
          </div>
          <div className='projLinks'>
            <a href="https://tubekatch.herokuapp.com" target="_blank" rel='noreferrer noopener'>
              <BiLinkAlt size={20} style={{color:'#000000'}}/>
            </a>
            <a href="https://github.com/Oluwatomisin-code/TubeKatch" target="_blank" rel='noreferrer noopener'>
              <FaGithub size={20} style={{color:'#000000'}}/>
            </a>
          </div>
        </div>
        <div className="projImgs">
          <img src={Tubekatch} alt="" className='projImg'/>
        </div>
      </div>
      <div className="projCard">
        <div className="blueTag"></div>
        <div className="projDetails">
          <div className="projHeading">THESPEEDFIXER.COM</div>
          <div className="projBrief">
            <p>
              <b>Brief:</b> speedfixer.com is a handyman service app, it allows for easy and fast communication between users and handyman service provider. 
            </p>
          </div>
          <div className="projStack">
            <p>
              <b>Tech Stack / Technologies:</b> Node.js, Express js, ReactJs, MongoDb.
            </p>
          </div>
          <div className='projLinks'>
            <a href="https://thespeedfixer.com" target="_blank" rel='noreferrer noopener'>
              <BiLinkAlt size={20} style={{color:'#000000'}}/>
            </a>
            <a href="https://github.com/Oluwatomisin-code/Thespeedfixer" target="_blank" rel='noreferrer noopener'>
              <FaGithub size={20} style={{color:'#000000'}}/>
            </a>
          </div>
        </div>
        <div className="projImgs">
          <img src={Thespeedfixer} alt="" className="projImg" />
        </div>
      </div>
      <div className="projCard">
        <div className="blueTag"></div>
        <div className="projDetails">
          <div className="projHeading">PORTFOLIO</div>
          <div className="projBrief">
            <p>
              <b>Brief:</b> My Portfolio Website 
            </p>
          </div>
          <div className="projStack">
            <p>
              <b>Tech Stack / Technologies:</b> RactJs, Node.js, Express js, GSAP.
            </p>
          </div>
          <div className='projLinks'>
            <a href="https://bucolic-begonia-e9ce53.netlify.app/" target="_blank" rel='noreferrer noopener'>
              <BiLinkAlt size={20} style={{color:'#000000'}}/>
            </a>
            <a href="https://github.com/Oluwatomisin-code/Portfolio_Oluwatomisin" target="_blank" rel='noreferrer noopener'>
              <FaGithub size={20} style={{color:'#000000'}}/>
            </a>
          </div>
        </div>
        <div className="projImgs">
          <img src={Portfolio} alt="" className='projImg'/>
        </div>
      </div>
      <div className="projCard">
        <div className="blueTag"></div>
        <div className="projDetails">
          <div className="projHeading">E-COMMERCE</div>
          <div className="projBrief">
            <p>
              <b>Brief:</b> A demo e-commerce web app, that allows users to add to cart and view cart.
            </p>
          </div>
          <div className="projStack">
            <p>
              <b>Tech Stack / Technologies:</b> PHP, HTML, CSS.
            </p>
          </div>
          <div className='projLinks'>
            <a href="https://" target="_blank" rel='noreferrer noopener'>
              <BiLinkAlt size={20} style={{color:'#000000'}}/>
            </a>
            <a href="https://github.com/Oluwatomisin-code/shoppingcart--php" target="_blank" rel='noreferrer noopener'>
              <FaGithub size={20} style={{color:'#000000'}}/>
            </a>
          </div>
        </div>
        <div className="projImgs">
          <img src="" alt="" className="projImg" />
        </div>
      </div>
      <div className="projCard">
        <div className="blueTag"></div>
        <div className="projDetails">
          <div className="projHeading">AUTHJet</div>
          <div className="projBrief">
            <p>
              <b>Brief:</b> AuthJet is an implemetation typical user authentication using tokens.
            </p>
          </div>
          <div className="projStack">
            <p>
              <b>Tech Stack / Technologies:</b> Node.js, Express js, React js, JWT, cors.
            </p>
          </div>
          <div className='projLinks'>
            <a href="https://" target="_blank" rel='noreferrer noopener'>
              <BiLinkAlt size={20} style={{color:'#000000'}}/>
            </a>
            <a href="https://" target="_blank" rel='noreferrer noopener'>
              <FaGithub size={20} style={{color:'#000000'}}/>
            </a>
          </div>
        </div>
        <div className="projImgs">
          <img src="" alt="" className='projImg'/>
        </div>
      </div>
    </div>
  </div>;
}

export default Projects;
