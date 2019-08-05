import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Jumbotron, Container, Row, Col, Image, Button} from "react-bootstrap";
import './Home.css';

export default class Home extends Component{
  render(){
    return (

        <Container>
          <Jumbotron>
            <h1>Justin Joco</h1>
            <h3>Developer and Learner</h3>
            	<a href="https://drive.google.com/open?id=1yr4P_Ja09330boHVQcJpRsYAil_Dl32h"><Button variant="primary">Resume</Button></a>

          </Jumbotron>
        </Container>
    );
  }
}


