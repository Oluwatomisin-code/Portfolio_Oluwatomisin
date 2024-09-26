import React from 'react';
import './Projects.css';
import Tubekatch from './images/projects/tubekatch.png';
import Portfolio from './images/projects/portfolio.png';
import kwikpik from './images/projects/kwikpik.png';
import kwikpikUser from './images/projects/kwikpik-user.png';
import kwikpikRider from './images/projects/kwikpik-rider.png';
import Whatsapp from './images/projects/whatsapp.png';
import {FaGithub} from 'react-icons/fa';
import {BiLinkAlt} from 'react-icons/bi';

function Projects() {
  return <div className='wrapProjects' id="projects">
    <div className="experience-header">
      <div className="background-text">PROJECTS</div>
      <div className="title-wrapper">
        <div className="title-line"></div>
        <h2 className="title-text">PROJECTS</h2>
        <div className="title-line"></div>
      </div>
    </div>
    <div>
      
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
          <div className="projHeading">Kwikpik Business</div>
          <div className="projBrief">
            <p>
              <b>Brief:</b> Logistics, ride hailing for businesses 
            </p>
          </div>
          <div className="projStack">
            <p>
              <b>Tech Stack / Technologies:</b> ...
            </p>
          </div>
          <div className='projLinks'>
            <a href="https://business.kwikpik.io/" target="_blank" rel='noreferrer noopener'>
              <BiLinkAlt size={20} style={{color:'#000000'}}/>
            </a>
            {/* <a href="https://github.com/Oluwatomisin-code/Thespeedfixer" target="_blank" rel='noreferrer noopener'>
              <FaGithub size={20} style={{color:'#000000'}}/>
            </a> */}
          </div>
        </div>
        <div className="projImgs">
          <img src={kwikpik} alt="" className="projImg" />
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
          <div className="projHeading">Kwikpik User App</div>
          <div className="projBrief">
            <p>
              <b>Brief:</b>Delivery, Ride hailing.
            </p>
          </div>
          <div className="projStack">
            <p>
              <b>Tech Stack / Technologies:</b> React native, maps.
            </p>
          </div>
          <div className='projLinks'>
            <a href="https://apps.apple.com/us/app/kwik-pik/id6447007329" target="_blank" rel='noreferrer noopener'>
              <BiLinkAlt size={20} style={{color:'#000000'}}/>
            </a>
            {/* <a href="https://github.com/Oluwatomisin-code/shoppingcart--php" target="_blank" rel='noreferrer noopener'>
              <FaGithub size={20} style={{color:'#000000'}}/>
            </a> */}
          </div>
        </div>
        <div className="projImgs">
          <img src={kwikpikUser} alt="" className="projImg" />
        </div>
      </div>
      <div className="projCard">
        <div className="blueTag"></div>
        <div className="projDetails">
          <div className="projHeading">Kwikpik Rider App</div>
          <div className="projBrief">
            <p>
              <b>Brief:</b> Delivery, Ride hailing.
            </p>
          </div>
          <div className="projStack">
            <p>
              <b>Tech Stack / Technologies:</b> React Native, maps.
            </p>
          </div>
          <div className='projLinks'>
            <a href="https://apps.apple.com/us/app/kwik-pik-rider/id6447309063" target="_blank" rel='noreferrer noopener'>
              <BiLinkAlt size={20} style={{color:'#000000'}}/>
            </a>
            {/* <a href="https://" target="_blank" rel='noreferrer noopener'>
              <FaGithub size={20} style={{color:'#000000'}}/>
            </a> */}
          </div>
        </div>
        <div className="projImgs">
          <img src={kwikpikRider} alt="" className='projImg'/>
        </div>
      </div>
    </div>
  </div>;
}

export default Projects;
