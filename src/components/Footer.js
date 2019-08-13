import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Jumbotron, Container, Row, Col, Image, Button} from "react-bootstrap";
import logo from './transparent_logo.png';

export default class Footer extends Component{
  	

  render(){
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
          <img src={logo} alt="Logo"/>
          <ColoredLine color="white"/>
          <p>Justin-Anthony Ampil Joco</p>
	      <p>U.S. Citizen</p>
	      <p>914-727-2032</p>
	      <p>Gmail: justin.joco@gmail.com</p>
	      <p>School: jaj263@cornell.edu</p>
	      <ColoredLine color="white"/>
	      <p><I>Built with React and React-Bootstrap. <a href="https://justinjoco.github.io/portfolio-archived/" style={{color:"#0cf"}}>Link to old portflio</a> </I></p>
	      <h6>{'\u00A9'} Justin Joco. All rights reserved.</h6>
        </Container>
    );
  }
}

