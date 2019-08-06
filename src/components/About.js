import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Jumbotron, Container, Row, Col, Image, Button} from "react-bootstrap";
import './About.css';

export default class Home extends Component{
  render(){
    const B = (props) => <span style={{fontWeight: 'bold'}}>{props.children}</span>
    const I = (props) => <span style={{fontStyle: 'italic'}}>{props.children}</span>
    return (
        <div>
         <h1 style={{textAlign:"center"}}>About Me</h1>
      <p>Hello! I’m currently earning my <B>Master of Engineering (MEng)</B> degree in <B> Electrical and Computer Engineering (ECE)</B> at <B> Cornell University</B>, and I like to call myself a <I>developer, leader, </I> and <I>learner.</I></p> 
      <p >I like learning new things by tackling different challenges. I’ve gained <B> skill in mobile/web development, embedded systems, and data visualization</B> through previous internships, hackathons, and class projects by applying <I> data structures, algorithms, and object-oriented principles</I>. I've grown to be an <B>effective leader and communicator </B> as a result of my experiences as an <I>officer at various STEM clubs</I>, a <I>graduate teaching assistant </I>, and <I> a major contributor to several group projects.</I></p>
      <p > By the completion of my degree in December 2019, I aim to be a <B> full-time Software/Systems Engineer</B> or <B>Technical Program Manager</B> <I>to improve my technical and leadership skills to build scalable, robust tech solutions</I>.
      </p>
        </div>
    );
  }
}


