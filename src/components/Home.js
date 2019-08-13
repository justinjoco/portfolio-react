import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Jumbotron, Container, Carousel, Image, Button} from "react-bootstrap";
import './Home.css';
import background_mac from "./background_mac.jpeg"

export default class Home extends Component{
  render(){
  	
        var textStyle = {
          position: 'absolute', 
          top: '50%', 
          color: "white",
          transform: "translateY(-50)",
          textShadow: "1px 1px 10px #000",
          textAlign: "center",


        };
    return (

    	/*
        <Container>
          <Jumbotron>
            <h1>Justin Joco</h1>
            <h3>Developer and Learner</h3>
            	<a href="https://drive.google.com/open?id=1yr4P_Ja09330boHVQcJpRsYAil_Dl32h"><Button variant="primary">Resume</Button></a>

          </Jumbotron>
        </Container>*/
        
      
   
        <div style={{display: 'flex',  justifyContent:'center'}}>

            <Image 
              fluid
              src={background_mac}>
            </Image>
            <div style={textStyle}>
            	<h1 class="display-1">Justin Joco</h1>
            	<h3>Developer and Learner</h3>
             
              <a href="#about"><Button variant="primary">About Me</Button></a>
            	<a href="https://drive.google.com/open?id=1yr4P_Ja09330boHVQcJpRsYAil_Dl32h"><Button variant="secondary">RESUME</Button></a>
              
            </div>
        </div>
        
		 
    );
  }
}


