"use client"

//import React, { useEffect } from 'react';
import "./Projects.css";
import reactImg from "./Assets/react-original.svg"
import nodeImg from "./Assets/nodejs.svg"
import mongodbImg from "./Assets/mongodb-original.svg"
import flaskImg from "./Assets/flask.svg"
import tensorflowImg from "./Assets/tensorflow-logo.svg"
import Link from "next/link";
//import "../../../Animations/slideInBlur.css"

const Projects = ({projects}) => {
  


    return (
        <div className="projects slide-in-left">
            <div className="projects-heading">My Recent Projects</div>
            <center><div className="heading-underline"></div></center>
            
            {projects.map((project, index) => (
                <div key={index} className="project">
                    <div className="project-title">{project.title} <div className="trailing"><a href={project.demoLink} target='_blank'>Website</a><a href={project.githubLink} target='_blank'>Github</a></div></div>
                    <div className="heading-underline"></div>
                    <br/>
                    <p className="project-description">{project.description}</p>

                    <p className="project-technologies"><strong>Technologies used:</strong></p>
    
                    <div className='technology-imgs'>
                    {project.technologies && project.technologies.map((name, idx) => <span key={idx}>{`${name} `}</span>)}
                    </div>
                    
                    <div className="project-details">
                        <div className="project-card">
                            <div className='project-card-heading'>Key Features:</div>
                            <div className="project-card-body">
                                {project.features.map((feature, idx) => (
                                    <div className='sub-card' key={idx}><p>{(idx + 1) + "  "+ feature}</p></div>
                                ))}
                            </div>
                        </div>
                        <div className="project-card">
                            <div className='project-card-heading'>Challenges:</div>
                            <div className="project-card-body">
                                {project.challenges.map((challenge, idx) => (
                                    <div className='sub-card' key={idx}><p>{(idx+1) + "  " + challenge}</p></div>
                                ))}
                            </div>
                        </div>
                        <div className="project-card">
                            <div className='project-card-heading'>Lessons Learned:</div>
                            <div className="project-card-body">
                                {project.lessonsLearned.map((lesson, idx) => (
                                    <div className='sub-card' key={idx}><p>{(idx + 1) + "  " + lesson}</p></div>
                                ))}
                            </div>
                        </div>
                        <div className="project-card">
                            <div className='project-card-heading'>Future Improvements:</div>
                            <div className="project-card-body">
                                {project.futureImprovements.map((improvement, idx) => (
                                    <div className='sub-card' key={idx}><p>{(idx + 1) + "  "+ improvement}</p></div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    <Link href={"/projects/proj_"+project.id+"/details"}> <span className="gotoDetails">Go To Details</span></Link>
                </div>
            ))}

            
        </div>
    );
};

export default Projects;
