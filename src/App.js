import React, { Component } from 'react';
import './App.css';
import Landing from './components/structure/Landing';
import Projects from './components/projects/Projects';
import About from './components/about/About';

class App extends Component {
  render() {
    return (
      <div className= "App">
        <Landing/>
        <Projects/>
        <About/>
      </div>
    );
  }
}

export default App;
