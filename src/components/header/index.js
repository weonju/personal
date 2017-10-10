import React, { Component } from 'react';
import './style.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <ul>
          <a href="/portfolio"><li>portfolio</li></a>
          <a href="/blog"><li>blog</li></a>
          <a href="/resume"><li>resume</li></a>
          <a href="/contact"><li>contact</li></a>
        </ul>
      </div>
    );
  }
}

export default Header;