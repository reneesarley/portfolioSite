import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactPlayer from 'react-player';
import { HashLink as Link } from 'react-router-hash-link';
import './Landing.css';
import treeVid5Sec from './treeVid5Sec.mp4';

class Landing extends Component {

  render(){
    return(
      <div className='landing'>
        <video id='video' autoplay="" loop={ true } muted={ true }>
          <source type="video/mp4" src="img/tree.mp4"/>
        </video>
        <div className='logo'>
          <h1> Rene<span id="laste">e</span><br/><span id='lastname'>Sarley</span></h1>
          <h2>Full Stack Developer</h2>
          <ul id='landingNav'>
            <li><Link to='/#projectsSection'>projects</Link></li>
            <li id='centerButton'><Link to='/#aboutSection'>about</Link></li>
            <li><Link to='/#contactSection'>Contact</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}



export default Landing;
