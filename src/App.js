import React, {Component} from 'react';
import logo from './transparent_logo.png';
import './App.css';

class App extends Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" />
          <p>
            This website is a work in progress!
          </p>
          <a
            className="App-link"
            href="https://justinjoco.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Original website
          </a>
        </header>
      </div>
    );
  }
}

export default App;
