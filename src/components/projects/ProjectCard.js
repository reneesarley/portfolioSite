import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Projects.css';

class ProjectCard extends Component {
  constructor(props) {
   super(props);
   this.state = {
      active: false
    };
  this.handleOnClick = this.handleOnClick.bind(this);
  this.setWrapperRef = this.setWrapperRef.bind(this);
  this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
  document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

 setWrapperRef(node) {
   this.wrapperRef = node;
 }

 handleClickOutside(event) {
   if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
     this.setState({ active: false })
   }
 }

 handleOnClick(){
  this.setState({ active: true })
 }


 render(){
  return(
    <div ref={this.setWrapperRef} className={ this.state.active ? "col m12 projectBlock" : "col m4 projectBlock"}
        onClick={this.handleOnClick}>
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
