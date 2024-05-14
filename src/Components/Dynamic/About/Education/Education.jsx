import React, { useState } from 'react';
import "./Education.css"
import "./timeline.css"

const Education = () => {
  const [selectedDetailIndex, setSelectedDetailIndex] = useState(0);

  const educationDetails = [
    {
      level: 'Madhyamik (Class X)',
      school: 'Ramakrishna Vivekananda Mission Vidyabhawan, Barrackpore', // Add school name here
      board: 'West Bengal Board of Secondary Education',
      year: '2018',
      percentage: '88.89%',
      location: '7, River Side Rd, Sardar Bazar, Barrackpore, Barrackpur Cantonment, West Bengal 700120',
    },
    {
      level: 'Higher Secondary (Class XII)',
      school: 'Ramakrishna Vivekananda Mission Vidyabhawan (HS), Barrackpore', // Add school name here
      board: 'West Bengal Council of Higher Secondary Education',
      year: '2020',
      percentage: '92.4%',
      location: '39, Park Road, River Side Road, Cantonment, Barrackpore, Barrackpur Cantonment, West Bengal 700120',
    },
    {
      level: 'Undergraduate',
      degree: 'Bachelor of Technology',
      field: 'Computer Science and Engineering',
      college: 'RCC Institute of Information Technology, Kolkata',
      university: 'Maulana Abul Kalam Azad University of Technology (MAKAUT)',
      year: '2021',
      location: 'Canal S Rd, Beleghata, Kolkata, West Bengal 700015',
    },
  ];

  const timeline = [
    {no: "1"}, {no:"2"}, {no:"3"}
  ];

  const handleTimelineItemClick = (index) => {
    setSelectedDetailIndex(index);
  };

  return (
    <div className='education'>
      <div className='about-heading'>Education Details</div>
      <div className='heading-underline'></div>
      <div className='education-body'>
        <div className="timeline">
          {timeline.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className={`no ${selectedDetailIndex === index ? 'no-active' : ''}`} onClick={() => handleTimelineItemClick(index)}>
                {item.no}
              </div>
              {(index < 2) ? <div className="connector"></div> : null}
            </div>
          ))}
        </div>
        <div className="education-detail">
          <div className='education-detail-heading'>{educationDetails[selectedDetailIndex].level}</div>
          <div className="heading-underline"></div>
          <div className='education-detail-body'>
            {Object.entries(educationDetails[selectedDetailIndex]).map(([key, value], index) => (
              (key !== 'level') ? (
                <div key={key} className="card">
                  <div className="card-header">
                  <div className="fieldno">
                    {index}
                  </div>
                  <div className="fieldname">
                  <div className="fieldnameText">{key.replace(key.charAt(0), key.charAt(0).toUpperCase())}</div>
          
                  <div className=' fieldname-underline'></div>
                  </div>
                  </div>
                  
                  <div className="card-body">{value}</div>
                </div>
              ) : null
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
