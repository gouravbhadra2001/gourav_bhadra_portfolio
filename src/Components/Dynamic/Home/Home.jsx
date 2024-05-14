import React, { useContext, useEffect, useState } from 'react';
import './Home.css';
import '../../../Animations/bgColorChange.css'
import Self from './Assets/Self.png';
import ResumePDF from './Assets/GOURAV_RESUME.pdf'; // Import the PDF file
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
        <div className="developer">Full Stack Web Developer</div>
        
        {/* Summary */}
        <div className="summary">
          Hi, I'm Gourav Bhadra, a passionate B.Tech student in Computer Science and Engineering @RCCIIT, Kolkata, currently focusing at Full Stack Web Development (MERN, Flask), interested in Technologies like Deep Learning, NLP, excited to collaborate on dynamic projects and grow as a developer. Click here to visit my portfolio...
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
