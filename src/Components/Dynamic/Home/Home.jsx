import React from 'react';
import './Home.css';
import Self from './Assets/Self.png';
import ResumePDF from './Assets/GOURAV_RESUME.pdf'; // Import the PDF file

const Home = () => {
  const openResumeInNewTab = () => {
    window.open(ResumePDF, '_blank'); // Open PDF in new tab
  };

  return (
    <div className='home'>
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
        <div className="cta-resume" onClick={openResumeInNewTab}>
          Download Resume
        </div>
      </section>
    </div>
  );
};

export default Home;
