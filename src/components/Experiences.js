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
			    <Col>
			     <Image fluid src={tmo_logo} alt="Logo"/>


			    </Col>
			    <Col>
			    <h3>T-Mobile US</h3>




			    </Col>
			  </Row>
			  <br/>
			  <Row>
			    <Col>
			    	<Image fluid src={jpm_logo} alt="Logo"/>
			    </Col>
			    <Col>
			    <h3>JPMorgan Chase & Co.</h3>


			    </Col>
			  </Row>

			  <br/>
			  <Row>
			    <Col>
			    	<Image fluid src={lfg_logo} alt="Logo"/>

			    </Col>
			    <Col>
			    <h3>Lincoln Financial Group</h3>



			    </Col>
			  </Row>

			<hr/>
           	<br/>
           

           	 <h2>Extracurriculars</h2>
           	 <br/>
           	 <Row>
			    <Col>
			    	<Image fluid src={ece_logo} alt="Logo"/>
			    </Col>
			    <Col>
			    <h3>Graduate Teaching at Cornell</h3>


			    </Col>


			  </Row>
			  <br/>


           	 <Row>
			    <Col>
			    	<Image fluid src={ieee_logo} alt="Logo"/>
			    </Col>
			    <Col>
			    <h3>Purdue IEEE Student Branch</h3>


			    </Col>
			  </Row>

			  <br/>
			  <Row>
			    <Col>
			    	<Image fluid src={phackers_logo} alt="Logo"/>

			    </Col>
			    <Col>
			    <h3>Purdue Hackers</h3>



			    </Col>
			  </Row>

           	<br/>


           	<br/>
        </Container>
    );
  }
}


