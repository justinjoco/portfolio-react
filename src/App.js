import React, {Component} from 'react';
import logo from './transparent_logo.png';
import './App.css';
import {HashRouter as Router, Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/CustomNavbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";

class App extends Component{
  render(){
    return (
     <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/skills" component={Skills}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/experiences" component={Experiences}/>
      </div>
     </Router>
    );
  }
}

export default App;
