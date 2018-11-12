import React from 'react';
import './Contact.css';
import '../../master.css';

const Contact = ()=>{
  return(
    <div className='contact section' id='contactSection'>
      <h3>Contact</h3>
      <div className='row'>
        <div className ='col s4 contactInfo'>
          Email <a href='mailto:reneesarley@gmail.com'><span className='contactType'>reneesarley@gmail.com</span></a>
          <br/>
          GitHub <a href='https://github.com/reneesarley' target='_blank'><span className='contactType'>reneesarley</span></a>
          <br/>
          LinkedIn <a href='https://www.linkedin.com/in/reneesarley/' target='_blank'><span className='contactType'>reneesarley</span></a>
        </div>
        <div className ='col s8 row nonProfitSection'>
          <div className= 'col s12 flow-text'>Know of a nonprofit that would benefit from pro bono web design, software development or data managment?<br/><span id='letMeKnow'><a href='mailto:reneesarley@gmail.com'>Let me know!</a></span><br/>I am always looking for small side projects that will help me develop my skills and benefit my community.</div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
