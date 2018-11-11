import React from 'react';
import ReactPlayer from 'react-player';
import './Landing.css';
import treeVid5Sec from './treeVid5Sec.mp4';

const Landing = () =>{
  return(
    <div className='landing'>
      <video id='video' autoplay="" loop={ true } muted={ true }>
        <source type="video/mp4" src="img/tree.mp4"/>
      </video>
      <div className='logo'>
        <h1> Rene<span id="laste">e</span><br/><span id='lastname'>Sarley</span></h1>
        <h2>Full Stack Developer</h2>
        <ul id='landingNav'>
          <li>projects</li>
          <li id='centerButton'>about</li>
          <li>contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Landing;
