import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Jumbotron, Container, Carousel, Image, Button, Row, Col} from "react-bootstrap";
import background_mac from "./assets/background_mac.jpg"
import {FaFacebook, FaLinkedin, FaGithub} from "react-icons/fa";

export default class Home extends Component{


  render(){
  	
        var textStyle = {
 
          top: '25vmin', 
          color: "white",
      
          textShadow: "1px 1px 10px #000",
          textAlign: "center",


        };

    return ([<Carousel controls={false} indicators={false}>
          <Carousel.Item>
            <Image fluid src={background_mac} alt="Logo"
            />
            <Carousel.Caption style={textStyle}>
                <h1 className="display-1" style={{fontSize: "10vmin"}}>Justin Joco</h1>
                      <h3 style={{fontSize: "4vmin"}}>Developer, Learner, and Leader</h3>
                     
                    
                      <Button variant="dark" href="#about" style={{margin: "5px"}}>About</Button>
                      <Button variant="danger" href="https://drive.google.com/open?id=1k_1Ven5x4to1-103w9kb3SaBRciv47OD" style={{margin: "5px"}}>Resume</Button>
                    
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>,
        <Container fluid style={{textAlign:"center", padding: "20px"}}>
          <h1>Connect</h1>
          <Row>
            <Col xs>
              <FaFacebook size={"12vh"} color={"#0078FF"}/>

            </Col>
            <Col xs>
               <FaLinkedin size={"12vh"} color={"#0077b5"}/>
            
            </Col>
            <Col xs>
               <FaGithub size={"12vh"} color={"#222"}/>
            
            </Col>



          </Row>



        </Container>

        ]);


		 
    
  }
}


