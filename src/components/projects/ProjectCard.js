import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Projects.css';

class ProjectCard extends Component {
  constructor(props) {
   super(props);
   this.state = {
      hover: false
    };
  this.hoverOn = this.hoverOn.bind(this);
  this.hoverOff = this.hoverOff.bind(this);
  }

 hoverOn(){
  console.log('hover on');
  this.setState({ hover: true })
 }

  hoverOff(){
   console.log('hover off');
   this.setState({ hover: false })
  }

 render(){
  return(
    <div className={ this.state.hover ? "col m12 projectBlock" : "col m4 projectBlock"}
        onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}>
      <div className='projectCard'>
        <h4>{this.props.name}</h4>
        <div className='description'>
        {this.props.description}
        </div>
        <div className='techUsed'>
        </div>
      </div>
    </div>
    )
  }
}

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default ProjectCard;
