import React from 'react';
import "./Education.css"

const Education = () => {
  
  const educationDetails = [
    {
      level: 'Madhyamik (Class X)',
      board: 'West Bengal Board of Secondary Education',
      year: '2018',
      percentage: '88.89%',
      location: '7, River Side Rd, Sardar Bazar, Barrackpore, Barrackpur Cantonment, West Bengal 700120',
    },
    {
      level: 'Secondary (Class XII)',
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
      cgpa: '9.5',
      location: 'Canal S Rd, Beleghata, Kolkata, West Bengal 700015',
    },
  ];

  return (
    <div className='education'>
      <h2>Education Details</h2>
      {educationDetails.map((detail, index) => (
        <div key={index} className="education-detail">
          <h3>{detail.level}</h3>
          <table>
            <tbody>
              {Object.entries(detail).map(([key, value]) => (
                <tr key={key}>
                  <th>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Education;
