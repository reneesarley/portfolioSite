import React from 'react';
import './Projects.css';
import '../../master.css';
import ProjectCard from './ProjectCard';

const projectList = [
  {
    name: 'ICE Raid Tracker',
    description: 'Collaborative project focusing on implementing APIs, working with peers and using the MVC pattern in C#',
    techUsed: ['C#', 'APIs'],
    github: 'www.github.com/reneesarley/ICE-tracker',
    deployedLink: '',
    status: ''
  },
  {
    name: 'Sudoku Game',
    description: 'Collaborative project focusing on implementing APIs, working with peers and using the MVC pattern in C#',
    techUsed: ['C#', 'APIs'],
    github: 'www.github.com/reneesarley/ICE-tracker',
    deployedLink: '',
    status: ''
  },
  {
    name: 'Coalition of Adovocates for Equal Access for Girls',
    description: 'Collaborative project focusing on implementing APIs, working with peers and using the MVC pattern in C#',
    techUsed: ['C#', 'APIs'],
    github: 'www.github.com/reneesarley/ICE-tracker',
    deployedLink: '',
    status: 'in progress'
  }

];

const Projects = () =>{
  return(
    <div className='projects section' id='projectsSection'>
      <h3>Projects</h3>
      <div className= 'row'>
        {projectList.map((project, index) =>
          <ProjectCard name={project.name}
            description={project.description}
            status={project.status}
            key={index}/>
        )}
      </div>
    </div>
  )
}

export default Projects;
