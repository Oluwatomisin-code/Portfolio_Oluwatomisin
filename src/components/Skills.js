import React from 'react';
import './Skills.css'
import Html5 from './images/icons/html5.svg'
import Css from './images/icons/css3.svg'
import Bootstrap from './images/icons/bootstrap.svg'
import Javascript from './images/icons/javascript.svg'
import Jquery from './images/icons/jquery.svg'
import react from './images/icons/react.svg'
import Angular from './images/icons/angular.svg'
import Php from './images/icons/php.svg'
import Nodejs from './images/icons/nodejs.svg'
import Mongodb from './images/icons/mongodb.svg'
import Mysql from './images/icons/mysql.svg'
import Python from './images/icons/python.svg'
import Git from './images/icons/git.svg'
import Wordpress from './images/icons/wordpress.svg'
import Github from './images/icons/github.svg'
import { FaAws, FaDocker, FaJava } from 'react-icons/fa';
import { SiApollographql, SiFlask, SiJest, SiJira, SiMicrosoftazure, SiNestjs, SiRabbitmq, SiRedis, SiRedux, SiSlack, SiSpringboot, SiTrello } from "react-icons/si";
// import { RiNextjsFill } from "react-icons/ri";

import { SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoFirebase, BiLogoPostgresql, BiLogoTailwindCss } from "react-icons/bi";


function Skills() {
  
  
  return <div className='wrapSkills' id= "skills">
    <div className="experience-header">
      <div className="background-text">SKILLS</div>
      <div className="title-wrapper">
        <div className="title-line"></div>
        <h2 className="title-text">SKILLS</h2>
        <div className="title-line"></div>
      </div>
    </div>
    <h2 >Technologies and Programming Languages I have explored</h2>
    <p>.</p>
    <div className='skillSet'>
      <div className='skillSet1'>
        <div className="skillIcon">
            <img src={Html5} alt="html5" />
        </div>
        <div className="skillIcon">
        <img src={Css} alt="css" />    
        </div>
        <div className="skillIcon">
        <img src={Bootstrap} alt="bootstrap" />
        </div>
        <div className="skillIcon">
        <img src={Javascript} alt="javascript" />
        </div>
        
        <div className="skillIcon">
        <img src={Jquery} alt="jquery" />
        </div>
        <div className="skillIcon">
        <img src={react} alt="react" />
        </div>
        <div className="skillIcon">
        <BiLogoTailwindCss size={52} />
        </div>
        
        
      </div>
      <div className='skillSet1'>
      <div className="skillIcon">
        <img src={Angular} alt="angular" />
        </div>

        <div className="skillIcon">
            <img src={Php} alt="" />
        </div>
        <div className="skillIcon">
        <img src={Nodejs} alt="" />    
        </div>
        <div className="skillIcon">
        <img src={Mongodb} alt="" />
        </div>
        <div className="skillIcon">
        <img src={Mysql} alt="" />
        </div>
        <div className="skillIcon">
        <img src={Python} alt="" />
        </div>
        <div className="skillIcon">
        <img src={Git} alt="" />
        </div>
        
      </div>
      <div className='skillSet1'>
      <div className="skillIcon">
        <SiTypescript size={52}/>
        </div>
        <div className="skillIcon">
        <img src={Wordpress} alt="" />
        </div>
        <div className="skillIcon">
            <img src={Github} alt="" />
        </div>
        <div className="skillIcon">
          <FaJava size={52}/>
        </div>
        <div className="skillIcon">
          <SiSpringboot size={52}/>
        </div>
        <div className="skillIcon">
          <SiNestjs size={52}/>
        </div>
        <div className="skillIcon">
          <TbBrandNextjs size={52}/>
        </div>
        
        
        
      </div>
      <div className='skillSet1'>
      <div className="skillIcon">
          <BiLogoPostgresql size={52}/>
        </div>
      <div className="skillIcon">
          <FaDocker size={52}/>
        </div>
      <div className="skillIcon">
      <SiFlask size={52}/>
        </div>
        <div className="skillIcon">
            <FaAws size={52}/>
        </div>
        <div className="skillIcon">
          <SiRedis size={52}/>
        </div>
        <div className="skillIcon">
        <SiApollographql size={52}/>
        </div>
        <div className="skillIcon">
        <SiRabbitmq size={52}/>
        </div>
      </div>

      <div className='skillSet1'>
      <div className="skillIcon">
          <SiRedux  size={52}/>
        </div>
      <div className="skillIcon">
      <BiLogoFirebase size={52}/>
        </div>
      <div className="skillIcon">
      <SiJest size={52}/>
        </div>
        <div className="skillIcon">
        <SiJira  size={52}/>
        </div>
        <div className="skillIcon">
          <SiTrello size={52}/>
        </div>
        <div className="skillIcon">
        <SiSlack size={52}/>
        </div>
        <div className="skillIcon">
        <SiMicrosoftazure size={52}/>
        </div>
      </div>
    </div>
  </div>;
}

export default Skills;
