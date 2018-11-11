import React from 'react';
import './Projects.css';

const ProjectCard = () => {
  return(
    <div className='col m4 projectBlock'>
      <div className='projectCard'>
        <h4>Project Name</h4>
        <div>
        Project description
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;
