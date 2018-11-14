import React from 'react';
import './Projects.css';
import '../../master.css';
import ProjectCard from './ProjectCard';

const projectList = [
  {
    name: 'ICE Raid Tracker',
    techDescription: 'Collaborative project focusing on implementing APIs, working with peers and using the MVC pattern in C#',
    projDescription: 'Web application for users to report, track and receive text messages about ICE raids in their area.',
    github: 'https://github.com/reneesarley/ICE-tracker',
    deployedLink: '',
    status: '',
    image:'./img/iceRaid.png'
  },
  {
    name: 'Sudoku Game',
    techDescription: 'Collaborative project focusing on implementing APIs, working with peers and using the MVC pattern in C#',
    projDescription: 'Web application for users to report, track and receive text messages about ICE raids in their area.',
    github: 'https://github.com/reneesarley/ICE-tracker',
    deployedLink: '',
    status: '',
    image: './img/iceRaid.png'
  },
  {
    name: 'NonProfit Redesign',
    techDescription: 'Collaborative project focusing on implementing APIs, working with peers and using the MVC pattern in C#',
    projDescription: 'Web application for users to report, track and receive text messages about ICE raids in their area.',
    github: 'https://github.com/reneesarley/ICE-tracker',
    deployedLink: '',
    status: 'in progress',
    image: './img/iceRaid.png'
  }

];

const Projects = () =>{
  return(
    <div className='projects section' id='projectsSection'>
      <h3>Projects</h3>
      <div className= 'row'>
        {projectList.map((project, index) =>
          <ProjectCard name={project.name}
            techDescription={project.techDescription}
            projDescription={project.projDescription}
            status={project.status}
            github={project.github}
            image={project.image}
            key={index}/>
        )}
      </div>
    </div>
  )
}

export default Projects;
