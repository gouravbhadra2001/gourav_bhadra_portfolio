import React from 'react';
import "./Skills.css";

const Skills = () => {
  
  const skillsData = [
    {
      category: 'Coding',
      skills: [
        { name: 'C', proficiency: 'Intermediate', confidence: 70 },
        { name: 'Python', proficiency: 'Intermediate', confidence: 70 },
        { name: 'Java', proficiency: 'Intermediate', confidence: 70 },
        { name: 'JavaScript', proficiency: 'Intermediate', confidence: 70 },
      ],
    },
    {
      category: 'Development',
      skills: [
        { name: 'Full Stack Web Development', proficiency: 'Intermediate', confidence: 70 },
        { name: 'HTML', proficiency: 'Intermediate', confidence: 70 },
        { name: 'CSS', proficiency: 'Intermediate', confidence: 70 },
        { name: 'MERN Stack', proficiency: 'Intermediate', confidence: 70 },
        { name: 'Flask', proficiency: 'Intermediate', confidence: 70 },
      ],
    },
    {
      category: 'Machine Learning',
      skills: [
        { name: 'Classical Machine Learning (Scikit-learn)', proficiency: 'Elementary', confidence: 50 },
        { name: 'Deep Learning (Tensorflow)', proficiency: 'Elementary', confidence: 50 },
      ],
    },
  ];

  return (
    <div className='skills'>
      <div className='about-heading'>Skills</div>
      
      <div className="heading-underline"></div>
      <div className="skill-cards">
        {skillsData.map((skillCategory, index) => (
          <div key={index} className={`skill-card ${skillCategory.category.toLowerCase().replace(' ', '-')}`}>
            <div className='skill-type-heading'>{skillCategory.category}</div>
            <div className="heading-underline skill-type-heading-underline" id='blue-underline'></div>
            <div className="skill-category">
              {skillCategory.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <div className="skill-name">{skill.name}</div>
                  
                  <div className="progress-bar">
                  
                    <div className="progress" style={{ width: `${skill.confidence}%` }}></div>
                  </div>
                  <div className='empty-10'></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
