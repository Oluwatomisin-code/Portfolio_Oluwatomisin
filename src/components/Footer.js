import React from 'react'
import './Footer.css'
import Github from './images/icons/githubsocial.svg';
import Linkedin from './images/icons/linkedinsocial.svg';
import Twitter from './images/icons/twittersocial.svg';
import Insta from './images/icons/instasocial.svg';

function Footer() {
  return (
    <div className="footer">
      <div className="copyright">
        &copy; Oluwatomisin Adeyinka Tomori 2022
      </div>
      <div className="followMe">
        <p>Follow Me</p>
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
    </div>
  )
}

export default Footer