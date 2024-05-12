import React from 'react';
import "./Skills.css"
const Skills = () => {
  
  const skillsData = [
    {
      category: 'Coding',
      skills: [
        { name: 'C', proficiency: 'Intermediate', confidence: 70 },
        { name: 'Java', proficiency: 'Intermediate', confidence: 70 },
        { name: 'Python', proficiency: 'Intermediate', confidence: 70 },
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
      <h2>Skills</h2>
      {skillsData.map((skillCategory, index) => (
        <div key={index}>
          <h3>{skillCategory.category}</h3>
          <ul>
            {skillCategory.skills.map((skill, skillIndex) => (
              <li key={skillIndex}>
                <div className="skill-name">{skill.name}</div>
                <div className="skill-proficiency">{skill.proficiency}</div>
                <div className="skill-confidence">{skill.confidence}%</div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;
