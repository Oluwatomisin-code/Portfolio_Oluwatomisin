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


function Skills() {
  
  
  return <div className='wrapSkills' id= "skills">
    <h2>Technologies and Programming Languages I have explored</h2>
    <p>.</p>
    <div className='skillSet'>
      <div className='skillSet1'>
        <div className="skillIcon">
            <img src={Html5} alt="" />
        </div>
        <div className="skillIcon">
        <img src={Css} alt="" />    
        </div>
        <div className="skillIcon">
        <img src={Bootstrap} alt="" />
        </div>
        <div className="skillIcon">
        <img src={Javascript} alt="" />
        </div>
        <div className="skillIcon">
        <img src={Jquery} alt="" />
        </div>
        <div className="skillIcon">
        <img src={react} alt="" />
        </div>
        <div className="skillIcon">
        <img src={Angular} alt="" />
        </div>
      </div>
      <div className='skillSet1'>
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
        <div className="skillIcon">
        <img src={Wordpress} alt="" />
        </div>
      </div>
      <div className='skillSet1'>
        <div className="skillIcon">
            <img src={Github} alt="" />
        </div>
      </div>
    </div>
  </div>;
}

export default Skills;
