import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Jumbotron, Container, Row, Col, Image, Button} from "react-bootstrap";
import ieee_logo from "./assets/ieee_logo.png";
import tmo_logo from "./assets/t-mobile-logo.png";
import jpm_logo from "./assets/JPM_logo.jpg";
import lfg_logo from "./assets/lincolnfinancial.jpg";
import phackers_logo from "./assets/purduehackerslogo.png";
import ece_logo from "./assets/cornell_ece_logo.png";


export default class Experiences extends Component{
  render(){
    return (

        <Container fluid style={{textAlign:"center", padding: "20px"}}>
          
            <h1 className="display-4">Experiences</h1>
            <hr/>
            <br/>
            <h2>Internships</h2>
             <Row>
			    <Col md>
			     <Image fluid src={tmo_logo} alt="Logo"/>


			    </Col>
			    <Col md>
			    <h3>T-Mobile US</h3>
			    	<h5>Systems Architecture Engineering Intern</h5>
			    	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>


			    </Col>
			  </Row>
			  <br/>
			  <Row>
			    <Col md>
			    	<Image fluid src={jpm_logo} alt="Logo"/>
			    </Col>
			    <Col md>
			    <h3>JPMorgan Chase & Co.</h3>
			    	<h5>Software Engineering Intern</h5>

			    	<p>I designed and implemented new features of the front-end of a then-prototype client-facing web portal (Data Once), which streamlines client account opening. I was thrust into this project and was able to quickly understand how the front-end integrated with the rest of the application. With the help of my Agile team, I learned Ember Bootstrap, jQuery, and other frameworks in order to build clean, intuitive user interfaces.</p>

			    	<p>Although I was only a summer intern, I meaningfully advanced my project; JPMC implemented my changes and put the design into production.</p>

			    </Col>
			  </Row>

			  <br/>
			  <Row>
			    <Col md>
			    	<Image fluid src={lfg_logo} alt="Logo"/>

			    </Col>
			    <Col md>
			    <h3>Lincoln Financial Group</h3>
			    	<h5>Enterprise Architecture Intern</h5>

			    	<p>At Lincoln Financial Group, I was thrown into an email service prototype project in Java. Though this was my first taste of software engineering and I only knew C, I quickly learned Java within three days by creating my own Blackjack game with betting, decisions, and a simple AI.</p>

			    	<p>Due to this project and my team’s assistance, I was able to dissect the email’s codebase and figure out how each part meshed with one another. As a result, I significantly improved class documentation for future developer work.</p>

			    </Col>
			  </Row>

			<hr/>
           	<br/>
           

           	 <h2>Extracurriculars</h2>
           	 <br/>
           	 <Row>
			    <Col md>
			    	<Image fluid src={ece_logo} alt="Logo"/>
			    </Col>
			    <Col>
			    <h3>Cornell ECE</h3>
			    <h5>Graduate Teaching Assistant</h5>
			    	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

			    </Col>


			  </Row>
			  <br/>


           	 <Row>
			    <Col md>
			    	<Image fluid src={ieee_logo} alt="Logo"/>
			    </Col>
			    <Col md>
			    <h3>Purdue IEEE Student Branch</h3>
			    <h5>Learning Chair</h5>
			    <p>As Learning Chair during Fall 2017 - Spring 2018, my role was to organize technical workshops to strengthen students’ skillsets. 
			    I raised $5000+ total to fund events via industry and school sponsorship.
			     In addition, I set precedents on technical event collaboration and workshop quality.
			     I led Code Café, free semester events that teach introductory Python, as its director. 75+ students of different fields attended these and highly praised the events' organization and content.</p>
			    <p>As a result of my efforts, I was voted runner-up for 2018 Student Choice Award – awarded for extraordinary service to the student branch, developing camaraderie amongst members, and contributing to technical work.</p>

			    </Col>
			  </Row>

			  <br/>
			  <Row>
			    <Col md>
			    	<Image fluid src={phackers_logo} alt="Logo"/>

			    </Col>
			    <Col md>
			    <h3>Purdue Hackers</h3>
			    <h5>Freshman Hackathon Python Mentor and Communications</h5>
			    <p>During summer 2018, I was on the Communications committee, whose duties included handling advertising, workshop organization, and volunteer management. I was liaised Purdue Hackers and IEEE in order to set up a workshop led by the IEEE Secretary.</p>
			    <p>During the 2017 iteration, I led a Python workshop to teach freshman students basic-to-intermediate topics. In addition, I volunteered as a mentor to guide the freshmen through their first hackathon projects in a collaborative environment as a resource.</p>

			    </Col>
			  </Row>

           	<br/>


           	<br/>
        </Container>
    );
  }
}


