import React, { useState } from 'react';
import Education from './Education/Education';
import Certificates from './Certificates/Certificates';
import Skills from './Skills/Skills';
import "./About.css"
import "../../../Animations/slideInBlur.css"
const About = () => {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <div className='about slide-in-left'>
      {/*<div className="top-section">
        <button className={`tab ${activeTab === 'education' ? 'active' : ''}`} onClick={() => setActiveTab('education')}>
          Education
        </button>
        <button className={`tab ${activeTab === 'skills' ? 'active' : ''}`} onClick={() => setActiveTab('skills')}>
          Skills
        </button>
        <button className={`tab ${activeTab === 'certificates' ? 'active' : ''}`} onClick={() => setActiveTab('certificates')}>
          Certificates
        </button>
      </div>*/}

      <div className="bottom-section">
        <Education />
        <Skills />
        <Certificates />
      </div>
    </div>
  );
};

export default About;
