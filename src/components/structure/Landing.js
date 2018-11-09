import React from 'react';
import ReactPlayer from 'react-player';
import './Landing.css';
import treeVid5Sec from './treeVid5Sec.mp4';

const Landing = () =>{
  return(
    <div className='landing'>
      <video autoplay="" loop="" muted="" data-reactid=".0.1.0.0">
        <source type="video/mp4" data-reactid=".0.1.0.0.0" src="img/treeVid5Sec.mp4"/>
      </video>
      <h1 className='logo' id='firstname'>Renee</h1>
      <h1 className='logo' id='lastname'>Sarley</h1>
    </div>
  )
}

export default Landing;
