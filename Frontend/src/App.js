import './App.css';
import React, {useEffect} from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
// import {gsap} from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Experience from './components/Experience';

// gsap.registerPlugin(ScrollTrigger);


function App() {



  //Use Effect to render animation
  useEffect(() => {
    // gsap.from(".wrapSkills", {
    //   y:"200", 
    //   opacity: 0, 
    //   ease: "ease-in", 
    //   duration: 1, 
    //   scrollTrigger:{
    //     trigger:".wrapSkills", 
    //     start: "top 90%",
    //     end:"bottom 60%",
    //     // markers:true, 
    //     toggleActions:"restart complete pause reset"
    //   }
    // }
    // )
    // gsap.from(".wrapProjects", {
    //   y:"100", 
    //   opacity: 0, 
    //   ease: "ease-in", 
    //   duration: .5, 
    //   scrollTrigger:{
    //     trigger:".wrapProjects", 
    //     start: "top 90%",
    //     end:"bottom 60%",
    //     // markers:true, 
    //     toggleActions:"restart complete pause reset"
    //   }
    // }
    // )
    // gsap.from(".wrapContact", {
    //   y:"100", 
    //   opacity: 0, 
    //   ease: "ease-in", 
    //   duration: 1, 
    //   scrollTrigger:{
    //     trigger:".wrapContact", 
    //     start: "top 90%",
    //     end:"bottom 60%",
    //     // markers:true, 
    //     toggleActions:"restart complete pause reset"
    //   }
    // })
  }, [])
  
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
