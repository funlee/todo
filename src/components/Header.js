import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../styles/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React-Todo-list</h1>
        </header>
      </div>
    );
  }
}

export default Header;
