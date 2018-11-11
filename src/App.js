import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, NavLink, HashRouter } from "react-router-dom";
import './App.css';
import Landing from './components/structure/Landing';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Contact from './components/contact/Contact'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className= "App">
          <Landing/>
          <Projects/>
          <About/>
          <Contact/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
