import React from 'react';
import './Projects.css';
import '../../master.css';
import ProjectCard from './ProjectCard';

const projectList = [
  {
    name: 'Sudoku Game',
    techDescription: 'Angular and Typescript project exploring using bindings to create, and add classes to, the HTML for the Sudoku gameboard.',
    projDescription: 'Web application for users to play a traditional Sudoku game. ',
    techUsed: ['Angular', 'TypeScript', 'Firebase', 'Bootstrap'],
    github: 'https://github.com/reneesarley/Sudoku-Game',
    deployedLink: 'https://sudoku-cd090.firebaseapp.com/',
    status: '',
    image: './img/sudoku.png'
  },
  {
    name: 'ICE Raid Tracker',
    techDescription: 'Collaborative project focusing on implementing APIs, working with peers and using the MVC pattern in C#',
    projDescription: 'Web application for users to report, track and receive text messages about ICE raids in their area.',
    techUsed: ['C#', 'MySQL', 'JavaScript'],
    github: 'https://github.com/reneesarley/ICE-tracker',
    deployedLink: '',
    status: '',
    image:'./img/iceRaid.png'
  },
  {
    name: 'HOA Portal',
    techDescription: 'Collaborative project focusing on implementing APIs, working with peers and using the MVC pattern in C#',
    projDescription: 'Website for Home Owners Association members to access information about the HOA and vote on HOA initatives.',
    techUsed: ['Unknown'],
    github: 'https://github.com/reneesarley/ICE-tracker',
    deployedLink: '',
    status: 'in progress',
    image: './img/sudoku.png'
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
            techUsed={project.techUsed}
            status={project.status}
            github={project.github}
            deployed={project.deployedLink}
            image={project.image}
            key={index}/>
        )}
      </div>
    </div>
  )
}

export default Projects;
