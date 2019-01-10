import React, {Component} from 'react';
import './About.css';
import '../../master.css';

export default class About extends Component{

  initializeModal = ()=>{
    document.getElementById("modal1").modal().modal("open");
  }

  render(){

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.modal');
      // var instances = M.Modal.init(elems, options);
    })

    return(
      <div className='about section' id='aboutSection'>
        <h3>About</h3>

        <div className='row'>
          <div className='col s12 m7'>
            <p className= 'flow-text'id='aboutMe'><span id='hello'>Hello. I am a full stack developer based in the beautiful Pacific Northwest.</span><br/> <br/>As a lifelong learner, organization junkie and data nerd development is a natural fit for me. I have 5+ years experience working in database management, and recently expanded my programming skills to include C# and JavaScript frameworks.
            <br/><br/>
            By combining self-study with 500+ hours of pair programming experience, I have learned several additional languages, frameworks and programming principles in just a few months.<br/><br/>
          When I am not in front of a computer screen I am fostering dogs, binge reading or attempting to learn new and daring things like knitting.
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
}
