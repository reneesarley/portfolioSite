import React from 'react';
import './Contact.css';
import '../../master.css';

const Contact = ()=>{
  return(
    <div className='contact section' id='contactSection'>
      <h3>Contact</h3>
      <div className='row'>
        <div className ='col s4 contactInfo'>
          Email <span className='contactType'>reneesarley@gmail.com</span>
          <br/>
          GitHub <a href='https://github.com/reneesarley' target='_blank'><span className='contactType'>reneesarley</span></a>
          <br/>
          LinkedIn <a href='https://www.linkedin.com/in/reneesarley/' target='_blank'><span className='contactType'>reneesarley</span></a>
        </div>
        <div className ='col s8 row nonProfitSection'>
          <div className= 'col s9 flow-text'>Know of a <span className='nonProfit'>non-profit</span> that would benefit from <span className='nonProfit'>pro-bono</span> web design, software development or data managment?<br/>Let me know! I am always looking for small side projects that will help me develop my skills and benefit my community.</div><div className='col s3 buttonContainer'><button className='waves-light btn-small messageBtn'>Message Me</button></div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
