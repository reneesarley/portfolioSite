import React from 'react';
import './About.css';
import '../../master.css';

const About = () =>{
  return(
    <div className='about section' id='aboutSection'>
      <h3>About Me</h3>
      <div className='row'>
        <div className='col s12 m7'>
          <p className= 'flow-text'id='aboutMe'>I am a developer based in the Pacific Northwest. After 5+ years of working in data management and analysis I decided to expand my programming skills and persue a career that would allow me to combine my love of
          <br/><br/>
          By combining self-study with 500+ hours of pair programming experience, I have learned several additional languages, frameworks and programming principles in just a few months.<br/><br/>
          Excited to fully contribute my current abilities to a team while further developing my programing skill set and my understanding of the nuances of software development.<br/>
          </p>
        </div>
        <div className='col s12 offset-m1 m4'id='techStack'>
          <h4>Technical Skills</h4>
          <h5>Languages</h5>
          <div className="row skillsRow" id='languages'>
            <div className="col l3 m4 s4 skill">JavaScript</div>
            <div className="col l3 m4 s4 skill">C#</div>
            <div className="col l3 m4 s4 skill">SQL</div>
            <div className="col l3 m4 s4 skill">TypeScript</div>
            <div className="col l3 m4 s4 skill">HTML</div>
            <div className="col l3 m4 s4 skill">CSS</div>
          </div>
          <h5>Frameworks & Libraries</h5>
          <div className="row skillsRow" id='frameworks'>
            <div className="col l3 m4 s4 skill">Angular</div>
            <div className="col l3 m4 s4 skill">React</div>
            <div className="col l3 m4 s4 skill">Redux</div>
            <div className="col l3 m4 s4 skill">jQuery</div>
            <div className="col l3 m4 s4 skill">Bootstrap</div>
            <div className="col l3 m4 s4 skill">Materialize</div>
          </div>
          <h5>Principles & Systems</h5>
          <div className="row skillsRow" id='principles'>
            <div className="col l4 m6 s4 skill">TDD/BDD</div>
            <div className="col l4 m6 s4 skill">Unit Testing</div>
            <div className="col l4 m6 s4 skill">Linting</div>
            <div className="col l6 m6 s6 skill">Restful Routing</div>
            <div className="col l6 m12 s6 skill">
              Data Normalization
            </div>
          </div>
            <h5>Applications & Tools</h5>
          <div className="row skillsRow" id='applications'>
            <div className="col l4 m6 s4 skill">Git </div>
            <div className="col l4 m6 s4 skill">Webpack</div>
            <div className="col l4 m6 s4 skill">SQL Server</div>
            <div className="col l4 m6 s4 skill">myPhpAdmin</div>
            <div className="col l4 m6 s4 skill">Firebase</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
