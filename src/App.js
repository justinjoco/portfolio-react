import React, {Component} from 'react';
import logo from './transparent_logo.png';
import './App.css';
import {HashRouter as Router, Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";


class App extends Component{
  render(){
    return (
     <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </div>
     </Router>
    );
  }
}

export default App;
