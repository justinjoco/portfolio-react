import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Jumbotron, Container, Row, Col, Image, Button} from "react-bootstrap";

export default class Extracurriculars extends Component{
  render(){
    const B = (props) => <span style={{fontWeight: 'bold'}}>{props.children}</span>
    const I = (props) => <span style={{fontStyle: 'italic'}}>{props.children}</span>
    return (
        <div>
         <h1 style={{textAlign:"center"}}>Extracurriculars</h1>

        </div>
    );
  }
}


