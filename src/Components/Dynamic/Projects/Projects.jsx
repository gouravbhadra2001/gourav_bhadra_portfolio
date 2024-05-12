import React from 'react';
import "./Projects.css"
const Projects = () => {
    // Sample projects data
    const projectsData = [
        {
            title: "Project 1: Software based Alzheimer's disease detection",
            description: "This project primarily focuses on detection of the phase of Alzheimer's disease based on the user-uploaded MRI image..We have plans to add many features further",
            technologies: ['React', 'Flask','Node.js', 'MongoDB', 'Tensorflow'],
            githubLink: 'https://github.com/gouravbhadra2001/Alzheimer-s_Disease_Client',
            demoLink: 'https://alzheimer-s-disease-client.vercel.app/',
        },
        {
            title: 'Project 2: Updating..',
            description: 'Updating',
            technologies: ['Updating'],
            githubLink: 'https://github.com/project2',
            demoLink: 'https://demo.project2.com',
        },
        
    ];

    return (
        <div className="projects">
            <h2>Projects</h2>
            {projectsData.map((project, index) => (
                <div key={index} className="project">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <p><strong>Technologies used:</strong> {project.technologies.join(', ')}</p>
                    <div className="links">
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;
