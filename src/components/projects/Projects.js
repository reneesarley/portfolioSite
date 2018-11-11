import React from 'react';
import './Projects.css';
import '../../master.css';
import ProjectCard from './ProjectCard';

const Projects = () =>{
  return(
    <div className='projects section'>
      <h3>Projects</h3>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
    </div>
  )
}

export default Projects;
