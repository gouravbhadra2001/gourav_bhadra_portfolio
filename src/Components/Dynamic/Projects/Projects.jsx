import React, { useEffect } from 'react';
import "./Projects.css";
import reactImg from "./Assets/react-original.svg"
import nodeImg from "./Assets/nodejs.svg"
import mongodbImg from "./Assets/mongodb-original.svg"
import flaskImg from "./Assets/flask.svg"
import tensorflowImg from "./Assets/tensorflow-logo.svg"
import "../../../Animations/slideInBlur.css"

const Projects = () => {
  
    
    const projectsData = [
        {
            title: "Project 1: Software-based Alzheimer's Disease Detection [All details updating..Plz stay tuned..]",
            description: "This project primarily focuses on detecting the phase of Alzheimer's disease based on the user-uploaded MRI image. We have plans to add many features further.",
            technologies: ['React', 'Flask', 'Node.js', 'MongoDB', 'Tensorflow'],
            technologies_img:[reactImg,flaskImg, nodeImg, mongodbImg, tensorflowImg],
            features: [
                ["User authentication and authorization","https://img.icons8.com/bubbles/100/key.png"],
                ["MRI image upload and processing","https://img.icons8.com/bubbles/100/image-file.png"],
                ["Alzheimer's disease phase detection","https://img.icons8.com/bubbles/100/brain.png"],
                ["Simple Interactive Chatbot","https://img.icons8.com/bubbles/100/message-bot.png"]
            ],
            challenges: [
                ["Model Memory Issue for Server Host Limited Memory","https://img.icons8.com/clouds/100/smartphone-ram.png"],
                ["Dataset Management","https://img.icons8.com/clouds/100/database.png"],
                ["API Endpoint Integration","https://img.icons8.com/clouds/100/api.png"]
            ],
            //impact: ["Received positive feedback from beta testers for its accuracy in detecting Alzheimer's disease phases.","https://img.icons8.com/color/48/checked-user-male-skin-type-7.png"],
            lessonsLearned: [
                ["Effectively utilizing machine learning libraries like TensorFlow in web applications.","https://img.icons8.com/bubbles/100/for-experienced.png"],
                ["Using different React utilities","https://img.icons8.com/bubbles/100/maintenance.png"]
            ],
            futureImprovements: [
                ["Memory management to expand server-memory usage limit","https://img.icons8.com/bubbles/100/thin-client.png"],
                ["Integrate more types of user inputs for prediction of the same","https://img.icons8.com/bubbles/100/more.png"],
                ["Improvement in the functionality of chatbot","https://img.icons8.com/bubbles/100/more.png"]
            ],
            githubLink: 'https://github.com/gouravbhadra2001/Alzheimer-s_Disease_Client',
            demoLink: 'https://alzheimer-s-disease-client.vercel.app/',
        },
      {
            title: 'Project 2: Sentiment Analysis and Summarisation of Discussion Thread in Medical Forum',
            description: 'Updating...',
            technologies: ['Updating'],
            features: [
                ["Real-time Sentiment Polarity Prediction of Comments","https://img.icons8.com/color/48/checked-user-male-skin-type-7.png"],
                ["Statistical Distribution of Comments with Predicted Sentiment","https://img.icons8.com/color/48/checked-user-male-skin-type-7.png"],
                ["Structured Summary Generation of Patient Comments","https://img.icons8.com/color/48/checked-user-male-skin-type-7.png"],
            ],
            challenges: [
                ["Huge Cloud Resource Utilisation and Session Expiration","https://img.icons8.com/color/48/checked-user-male-skin-type-7.png"],
                ["Missing Reference Summaries in Dataset","https://img.icons8.com/color/48/checked-user-male-skin-type-7.png"]
            ],
            //impact: ["The project had a positive impact on the target audience.","https://img.icons8.com/color/48/checked-user-male-skin-type-7.png"],
            lessonsLearned: [
                ["Effectively utilising encoder-only and encoder-decoder transformer for sentiment prediction and summarisation resp.","https://img.icons8.com/color/48/checked-user-male-skin-type-7.png"],
                ["Effectively utilising score boosting and model selection techniques","https://img.icons8.com/color/48/checked-user-male-skin-type-7.png"]
            ],
            futureImprovements: [
                ["Addition of Reference Summaries","https://img.icons8.com/color/48/checked-user-male-skin-type-7.png"],
                ["Fine-Tuning Summaries, PEFT and attempt to fine-tune decoder-only models if possible","https://img.icons8.com/color/48/checked-user-male-skin-type-7.png"]
            ],
            githubLink: 'https://github.com/project2',
            demoLink: 'https://demo.project2.com',
        },
    ];


    useEffect(()=>{
        window.scrollTo(0,0);
      },[])


    return (
        <div className="projects slide-in-left">
            <div className="projects-heading">My Recent Projects</div>
            <div className="heading-underline projects-heading-underline"></div>
            
            {projectsData.map((project, index) => (
                <div key={index} className="project">
                    <div className="project-title">{project.title} <div className="trailing"><a href={project.demoLink} target='_blank'><img width="20" height="20" src="https://img.icons8.com/ios-filled/50/globe--v1.png" alt="internet--v1"/></a><a href={project.githubLink} target='_blank'><img width="20" height="20" src="https://img.icons8.com/ios-filled/50/github.png" alt="github"/></a></div></div>
                    <div className="heading-underline"></div>
                    <p className="project-description">{project.description}</p>
                    <p className="project-technologies"><strong>Technologies used:</strong>
                    <div className="heading-underline"></div>
                    <br />
                    <div className='technology-imgs'>
                    {project.technologies_img && project.technologies_img.map((img, idx) => (
    <a key={idx} href="#" target='_blank'><img height={16} width={16} src={img} alt="" /></a>
))}
                    </div>
                    


                    </p>
                    <div className="project-details">
                        <div className="project-card">
                            <div className='project-card-heading'>Key Features:</div>
                            <div className="project-card-body">
                                {project.features.map((feature, idx) => (
                                    <div className='sub-card' key={idx}><img height="40" width="40" src={feature[1]} alt="" /><p>{feature[0]}</p></div>
                                ))}
                            </div>
                        </div>
                        <div className="project-card">
                            <div className='project-card-heading'>Challenges:</div>
                            <div className="project-card-body">
                                {project.challenges.map((challenge, idx) => (
                                    <div className='sub-card' key={idx}><img height="40" width="40" src={challenge[1]} alt="" /><p>{challenge[0]}</p></div>
                                ))}
                            </div>
                        </div>
                        <div className="project-card">
                            <div className='project-card-heading'>Lessons Learned:</div>
                            <div className="project-card-body">
                                {project.lessonsLearned.map((lesson, idx) => (
                                    <div className='sub-card' key={idx}><img height="40" width="40" src={lesson[1]} alt="" /><p>{lesson[0]}</p></div>
                                ))}
                            </div>
                        </div>
                        <div className="project-card">
                            <div className='project-card-heading'>Future Improvements:</div>
                            <div className="project-card-body">
                                {project.futureImprovements.map((improvement, idx) => (
                                    <div className='sub-card' key={idx}><img height="40" width="40" src={improvement[1]} alt="" /><p>{improvement[0]}</p></div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                </div>
            ))}
        </div>
    );
};

export default Projects;
