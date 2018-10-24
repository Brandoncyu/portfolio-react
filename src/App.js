import React, { Component } from 'react';
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <AboutMe />
        <Skills />
        <br />
        <Projects />
      </div>
    );
  }
}

export default App;
