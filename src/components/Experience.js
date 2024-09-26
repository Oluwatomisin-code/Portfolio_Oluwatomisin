import React from 'react';
import './Experience.css'; // Import the CSS file

const Experience = () => {
  const experiences = [
    {
      role: 'Technical Lead - Aidra',
      duration: 'Nov, 2023 – Present',
      description: "Leading the technical strategy and implementation for Aidra's business automation platform. Overseeing the development of scalable solutions, mentoring developers, and ensuring the alignment of technical efforts with business goals.",
      location: 'Lagos, Nigeria',
    },
    {
      role: 'Software Engineer - Punch Group',
      duration: 'Apr, 2022 – Present',
      description: 'Developing and maintaining high-performance software solutions for digital products. Collaborating with cross-functional teams to deliver full-stack solutions, focusing on both backend APIs and user-friendly frontends.',
      location: 'Remote',
    },
    {
      role: 'Founding Software Eng. - Mtaji',
      duration: 'Aug, 2022 – Jan 2024',
      description: 'Built core features and led the initial development phase of the Mtaji platform, creating a scalable architecture for investment solutions. Drove product innovation and contributed to overall system design.',
      location: 'London, Uk',
    },
    {
      role: 'Founding Software Eng. - Kwikpik',
      duration: 'Oct, 2022 – Jan, 2024',
      description: "Spearheaded the development of Kwikpik's delivery platform, optimizing for performance and user experience. Played a pivotal role in shaping the technical vision and execution of early-stage features.",
      location: 'Lagos, Nigeria',
    },
    {
      role: 'Fullstack Software Dev - AfricExpress',
      duration: 'Jun, 2022 – Dec, 2022',
      description: 'Contributed to building a logistics platform that streamlined e-commerce delivery processes. Worked on both frontend and backend, integrating various payment and tracking systems to enhance user satisfaction.',
      location: 'Lagos, Nigeria',
    },
  ];

  return (
      <section className="experience-section" id='experience'>
    <div className="experience-header">
      <div className="background-text">EXPERIENCE</div>
      <div className="title-wrapper">
        <div className="title-line"></div>
        <h2 className="title-text">MY EXPERIENCE</h2>
        <div className="title-line"></div>
      </div>
    </div>
     {/* <div className="background-text">EXPERIENCE</div> */}
     <div className="experience-grid">
       {experiences.map((exp, index) => (
         <div key={index} className="experience-card">
           <div className="experience-duration">{exp.duration}</div>
           <h3 className="experience-role">{exp.role}</h3>
           <p className="experience-description">{exp.description}</p>
           <p className="experience-location">- {exp.location}</p>
         </div>
       ))}
     </div>
   </section>
  );
};

export default Experience;
