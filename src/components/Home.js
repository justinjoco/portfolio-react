import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Jumbotron, Container, Carousel, Image, Button} from "react-bootstrap";
import './Home.css';
import background_mac from "./background_mac.jpeg"

export default class Home extends Component{


  render(){
  	
        var textStyle = {
          position: 'absolute', 
          top: '40vmin', 
          color: "white",
          transform: "translateY(-50)",
          textShadow: "1px 1px 10px #000",
          textAlign: "center",


        };
    const state = this.state;
    return (

    	/*
        <Container>
          <Jumbotron>
            <h1>Justin Joco</h1>
            <h3>Developer and Learner</h3>
            	<a href="https://drive.google.com/open?id=1yr4P_Ja09330boHVQcJpRsYAil_Dl32h"><Button variant="primary">Resume</Button></a>

          </Jumbotron>
        </Container>*/
        
      
   
        <Container fluid style={{display: 'flex',  justifyContent:'center', backgroundColor:"#d3d3d3"}}>

            <Image fluid src={background_mac} alt="Logo"/>
            <div style={textStyle}>
            	<h1 className="display-1" style={{fontSize: "10vmin"}}>Justin Joco</h1>
            	<h3 style={{fontSize: "4vmin"}}>Developer and Learner</h3>
             
            
              <Button variant="dark" href="#about" style={{margin: "5px"}}>About</Button>
            	<Button variant="danger" href="https://drive.google.com/open?id=1k_1Ven5x4to1-103w9kb3SaBRciv47OD" style={{margin: "5px"}}>Resume</Button>
            
            </div>
        </Container>
        
		 
    );
  }
}


