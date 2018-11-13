import React from 'react';
import './Contact.css';
import '../../master.css';
import githubMobile from'./img/githubMobile.png';
import github from'./img/github.png';
import linkedin from './img/linkedin.png';

const Contact = ()=>{
  return(
    <div className='contact section' id='contactSection'>
      <h3>Contact</h3>
      <div className='row'>
        <div className ='row col s12 m4 contactInfo'>
          <div className='row col s4 m12'>
            <a href='mailto:reneesarley@gmail.com'>
              <i class="material-icons email col s4">email</i>
              <span className='contactType col s8'>reneesarley@gmail.com</span>
            </a>
          </div>
          <div className='row col s4 m12'>
            <a href='https://github.com/reneesarley' target='_blank'>
              <div className='col s4'><img src={github}/></div>
              <span className='contactType col s8'>reneesarley</span>
            </a>
          </div>
          <div className='row col s4 m12'>
            <a href='https://www.linkedin.com/in/reneesarley/' target='_blank'>
              <div className= 'col s4'><img src={linkedin}/></div>
              <span className='contactType col s8'>reneesarley</span>
            </a>
          </div>
        </div>
        <div className ='col s12 m8 row nonProfitSection'>
          <div className= 'col s12 flow-text'>Know of a nonprofit that would benefit from pro bono web design, software development or data managment?<br/><span id='letMeKnow'><a href='mailto:reneesarley@gmail.com'>Let me know!</a></span><br/>I am always looking for small side projects that will help me develop my skills and benefit my community.</div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
