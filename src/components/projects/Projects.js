import React from 'react';
import './Projects.css';
import '../../master.css';
import ProjectCard from './ProjectCard';

const Projects = () =>{
  return(
    <div className='projects section' id='projectsSection'>
      <h3>Projects</h3>
      <div className= 'row'>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
      </div>
    </div>
  )
}

export default Projects;
