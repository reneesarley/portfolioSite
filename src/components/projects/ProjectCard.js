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
    <div ref={this.setWrapperRef} className={ this.state.active ? "col m12 projectBlock" : "col l4 m6 projectBlock"}
        onClick={this.handleOnClick}>
      <div className='row projectCard'>
      <img src='./img/testImage.png'alt="testImage" className="col l5 projectImage img-responsive"/>
        <div className='col l6 projectDetails'>
          <h4 id='projectName'>{this.props.name}</h4>
          <div className={ this.state.active ? 'description show' : 'hidden'}>
          {this.props.description}
          </div>
          <div className='techUsed'></div>
          <div className ='status '>{this.props.status}</div>
        </div>
      </div>
    </div>
    )
  }
}

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string
};

export default ProjectCard;
