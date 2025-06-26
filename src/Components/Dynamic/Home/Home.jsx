import React, { useContext, useEffect, useState } from 'react';
import './Home.css';
import '../../../Animations/bgColorChange.css'
import Self from './Assets/me.jpeg';
import ResumePDF from './Assets/GOURAV_GENERAL_RESUME_V2.pdf'; // Import the PDF file
import resumeIcon from './Assets/icons8-download-resume-80.png'
import resumeIcon_dark from './Assets/icons8-download-resume-80_dark.png'
import "../../../Animations/slideInBlur.css"
import { ScreenContext } from '../../../App';

const Home = () => {

  const [isHovered, setIsHovered] = useState(false);
  const screenWidth = useContext(ScreenContext)
  const openResumeInNewTab = () => {
    window.open(ResumePDF, '_blank'); // Open PDF in new tab
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  useEffect(() => {
    console.log(screenWidth);
  }, [screenWidth]);
  
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  
  return (
    <div className='home color-change-5x fade-in'>
      {/* Self image */}
      <section className="selfImg">
        <img src={Self} alt="Self" />
      </section>

      {/* Introduction */}
      <section className="introduction">
        {/* Name */}
        <div className="name">Hi, I'm Gourav Bhadra</div>
        
        {/* Developer */}
        <div className="developer">Aspiring IT Professional</div>
        
        {/* Summary */}
        <div className="summary">
          I am a <i>fourth-year student</i> pursuing <i> Bachelor of Technology in Computer Science and Engineering</i> from <a href="https://rcciit.org/" target="_blank">RCC Institute of Information Technology, Kolkata</a>. I am driven to apply theoretical knowledge and technical expertise to practical projects, fostering innovation and growth. I am eager to collaborate with dynamic teams, harnessing cutting-edge IT technologies to develop impactful business solutions and propel my professional development.
        </div>
        
        {/* Download Resume Button */}
        <div
  className={"cta-resume" + (isHovered ? "-hover" : "")}
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
  onClick={openResumeInNewTab}
>
  <img
    width="40"
    height="40"
    src={isHovered ? resumeIcon_dark : resumeIcon}
    alt="open-resume"
  />
  <br />
  <p>Download Resume</p>
</div>

      </section>
    </div>
  );
};

export default Home;
