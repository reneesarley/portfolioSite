import React from 'react';
import PropTypes from 'prop-types';
import './Projects.css';

const ProjectCard = (props) => {
  return(
    <div className='col m4 projectBlock'>
      <div className='projectCard'>
        <h4>{props.name}</h4>
        <div className='description'>
        {props.description}
        </div>
        <div className='techUsed'>
        </div>
      </div>
    </div>
  )
}

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default ProjectCard;
