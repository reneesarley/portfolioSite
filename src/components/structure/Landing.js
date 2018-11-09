import React from 'react';
import ReactPlayer from 'react-player';
import './Landing.css';
import treeVid5Sec from './treeVid5Sec.mp4';

const Landing = () =>{
  return(
    <div className='landing'>
      <video autoplay="" loop={ true } muted={ true }>
        <source type="video/mp4" src="img/tree.mp4"/>
      </video>
      <h1 className='logo' id='firstname'>Renee</h1>
      <h1 className='logo' id='lastname'>Sarley</h1>
    </div>
  )
}

export default Landing;
