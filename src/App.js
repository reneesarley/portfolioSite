import React, { Component } from 'react';
import './App.css';
import Landing from './components/structure/Landing';
import Projects from './components/projects/Projects';

class App extends Component {
  render() {
    return (
      <div className= "App">
        <Landing/>
        <Projects/>
      </div>
    );
  }
}

export default App;
