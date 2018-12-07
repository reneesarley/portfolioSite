import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Projects.css';

class ProjectCard extends Component {

 render(){
   return(
     <div className="col s12 m6 l4">
      <div className="card horizontal activator projectCard">
        <div className="card-image activator projectImage">
          <img className = 'activator' src={this.props.image}/>
        </div>
        <div className="card-stacked projectDetails">
          <div className="card-content activator">
            <h5 className ='activator projectName'>{this.props.name}</h5>
          </div>
          <div class="card-action status">
            <p>{this.props.status}</p>
          </div>
        </div>
        <div class="card-reveal">
          <h5 class="card-title">{this.props.name}<i class="material-icons right">close</i></h5>
          <p className=''>
            {this.props.projDescription}
            <br/><br/>
            {this.props.techDescription}
          </p>
          <div className='links'><a href={this.props.deployed} target="_blank">deployed link</a></div><br/>
          <div className='links'><a href={this.props.github} target="_blank">github repo</a></div>  
        </div>
      </div>
    </div>
   )
  }
}

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  techDescription: PropTypes.string.isRequired,
  projDescription: PropTypes.string.isRequired,
  github: PropTypes.string,
  status: PropTypes.string,
  image: PropTypes.string
};

export default ProjectCard;
