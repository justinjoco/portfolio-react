import React from 'react';
import {Link} from "react-router-dom";
import {Jumbotron, Container, Row, Col, Image, Button} from "react-bootstrap";
import logo from './assets/transparent_logo.png';
import {FaFacebookSquare, FaLinkedin, FaGithubSquare} from "react-icons/fa";

const Footer = (props) => {



    const I = (props) => <span style={{fontStyle: 'italic'}}>{props.children}</span>

    const ColoredLine = ({ color }) => (
      <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1
        }}
      />
    );

    return (

        <Container fluid style={{textAlign:"center", color:"#efefef", backgroundColor: "#6a6c6e",  padding: "20px"
 			}}>
          <h1 >Contact</h1>
          <Image src={logo} alt="Logo"/>
          <ColoredLine color="white"/>
          <p>Justin-Anthony Ampil Joco</p>
	      <p>U.S. Citizen</p>
	      <p>914-727-2032</p>
	      <p>Gmail: justin.joco@gmail.com</p>
	      <p>School: jaj263@cornell.edu</p>
	      <ColoredLine color="white"/>
        <Row>
            <Col xs>
              <a href="https://www.linkedin.com/in/justinjoco" target="_blank">
              <FaLinkedin size={"7vh"} color={"#0077b5"} style={{backgroundColor: "white"}}/>
              
              </a>
            </Col>
            <Col xs>
              <a href="https://github.com/justinjoco" target="_blank">
               <FaGithubSquare size={"7vh"} color={"#222"} style={{backgroundColor: "white"}}/>
              </a>
            </Col>
            <Col xs>
            <a href="https://www.facebook.com/justin.anthony.joco" target="_blank">
               <FaFacebookSquare size={"7vh"} color={"#0078FF"} style={{backgroundColor: "white"}}/>
            </a>
            </Col>



          </Row>

        <ColoredLine color="white"/>
	      <p><I>Built with React and React-Bootstrap. <a href="https://justinjoco.github.io/portfolio-archived/" style={{color:"#0cf"}}>Link to old portflio</a> </I></p>
	      <h6>{'\u00A9'} Justin Joco. All rights reserved.</h6>
        </Container>
    );
  
}

export default Footer;
