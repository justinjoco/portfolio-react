import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Jumbotron, Container, Row, Col, Image, Button} from "react-bootstrap";
import './Home.css';

export default class Home extends Component{
  render(){
    return (

        <div className="App">
          <header className="App-header">
            <p>
              This website is a work in progress!
            </p>
            <Link to="/about">
              <Button bsStyle="primary">About</Button> 
            </Link>
          </header>
        </div>
    );
  }
}


