import React, { Component } from 'react';
import Header from './components/header/index';
import Resume from './components/resume/index';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h1>Hey, I'm Jessica</h1>
        <p>I am:</p>
        <ul>
          <li>a software developer</li>
          <li>a cat mom</li>
          <li>vegan</li>
          <li>a blogger</li>
          <li>a wannabe world-traveler</li>
        </ul>
        <Resume />
      </div>
    );
  }
}

export default App;
