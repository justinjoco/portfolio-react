import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Jumbotron, Container, Row, Col, Image, Button, Card, CardDeck} from "react-bootstrap";

import energy_weather from "./assets/energy_weather.png";
import take_me from "./assets/take_me.png";
import us_pollution from "./assets/us_pollution.png";

import vocoder from "./assets/vocoder.png";
import air_canvas from "./assets/air_canvas.jpg";

import wsn_android from "./assets/wsn_android.jpg";
import space_invaders from "./assets/space_invaders.png";
import wear_weather from "./assets/wear_weather.png";

export default class Projects extends Component{



  render(){
    const B = (props) => <span style={{fontWeight: 'bold'}}>{props.children}</span>
    const I = (props) => <span style={{fontStyle: 'italic'}}>{props.children}</span>


    return (

        <Container fluid style={{textAlign:"center", padding: "20px"}}>
       
            <h1 className="display-4">Project Showcase</h1>
            <hr/>
            <br/>

            <h2><B>MEng Design Project</B>: Acoustic Localization and Tracking via Machine Learning</h2>
            <p><B>Abstract:</B> Our goal is to track users in a room using an array of microphones. To do this, we first model a room with echoes, and we populate this room with users and microphones. We extract information from this modelled room to create a so-called channel state information (CSI) matrix. Depending on the application, we use a supervised or an unsupervised deep learning model to learn the channel from the CSI matrix. If the goal is to predict user locations in cartesian space, we use the supervised model. If we want to learn the channel itself, we use the unsupervised model. Though a lot of research in localization has been done in RF communication, we use acoustic communication to further understand its merits, its workings, and its negatives to hopefully expand a field in ECE.</p>
            <Row>
				<Col><a href="https://drive.google.com/open?id=1RqCE6mKBcSB8zWFaoT2NVYHz0RCSMc-s">Report</a></Col>
				<Col><a href="https://drive.google.com/open?id=1gYy7quJyqfm_eIAsylMDvCWCTJ6wZo8X">Poster</a></Col>
				<Col><a href="https://github.com/justinjoco/acoustic_MIMO">Code</a></Col>
			</Row>


            <br/>
          	<h3>Web Applications</h3>
            <CardDeck>

			  <Card>
			  	<Card.Header><B>Changes in Weather and Energy Generation in the USA</B></Card.Header>
			    <Card.Img variant="top" src={energy_weather} />
			    <Card.Body>
			      <Card.Title>Interactive data visualization that shows how changes in temperature over different times of a given year affected energy generation in various US states</Card.Title>
			      <Card.Text>
			        This is a wider card with supporting text below as a natural lead-in to
			        additional content. This content is a little bit longer.
			      </Card.Text>
			    </Card.Body>
			    <Card.Footer>
			      <small className="text-muted">Last updated 3 mins ago</small>
			    </Card.Footer>
			  </Card>
			  <Card>
			  <Card.Header><B>Take Me to the Streets</B></Card.Header>
			    <Card.Img variant="top" src={take_me} />
			    <Card.Body>
			      <Card.Title>A neighborhood discovery experience that can be customized to the guest and the property, with optional gamification</Card.Title>
			      <Card.Text>
			        This card has supporting text below as a natural lead-in to additional
			        content.{' '}
			      </Card.Text>
			    </Card.Body>
			    <Card.Footer>
			      <small className="text-muted">Last updated 3 mins ago</small>
			    </Card.Footer>
			  </Card>
			  <Card>
			  <Card.Header><B>US Air Pollution in the 2000s</B></Card.Header>
			    <Card.Img variant="top" src={us_pollution}/>
			    <Card.Body>
			      <Card.Title>Interactive web application that visualizes total population and air pollutant concentration of different states from 2000 to 2016</Card.Title>
			      <Card.Text>
			        This is a wider card with supporting text below as a natural lead-in to
			        additional content. This card has even longer content than the first to
			        show that equal height action.
			      </Card.Text>
			    </Card.Body>
			    <Card.Footer>
			      <small className="text-muted">Last updated 3 mins ago</small>
			    </Card.Footer>
			  </Card>
			</CardDeck>
		<br/>


		<h3>Embedded/Firmware</h3>
		<CardDeck>

		  <Card >
		  	<Card.Header><B>FPGA Speech Vocoder</B></Card.Header>
		    <Card.Img variant="top" src={vocoder} />
		    <Card.Body>
		      <Card.Title>A highly parallel hardware vocoder for real-time speech synthesis and visualization on a monitor</Card.Title>
		      <Card.Text>
		        This is a wider card with supporting text below as a natural lead-in to
		        additional content. This content is a little bit longer.
		      </Card.Text>
		    </Card.Body>
		    <Card.Footer>
		      <small className="text-muted">Last updated 3 mins ago</small>
		    </Card.Footer>
		  </Card>
		  
		  <Card>
		  <Card.Header><B>Air Canvas on Raspberry Pi</B></Card.Header>
		    <Card.Img variant="top" src={air_canvas} />
		    <Card.Body>
		      <Card.Title>A simple prototype for a drawing tool that recognizes hand gestures to paint on a PiTFT screen </Card.Title>
		      <Card.Text>
		        This is a wider card with supporting text below as a natural lead-in to
		        additional content. This card has even longer content than the first to
		        show that equal height action.
		      </Card.Text>
		    </Card.Body>
		    <Card.Footer>
		      <small className="text-muted">Last updated 3 mins ago</small>
		    </Card.Footer>
		  </Card>
		</CardDeck>

	<br/>

	<h3>Native Applications</h3>
	<CardDeck>

	  <Card>
	  	<Card.Header><B>Wildfire Sensor Network</B></Card.Header>
	    <Card.Img variant="top" src={wsn_android} />
	    <Card.Body>
	      <Card.Title>Sensor network that warned people of local wildfire locations</Card.Title>
	      <Card.Text>
	        This is a wider card with supporting text below as a natural lead-in to
	        additional content. This content is a little bit longer.
	      </Card.Text>
	    </Card.Body>
	    <Card.Footer>
	      <small className="text-muted">Last updated 3 mins ago</small>
	    </Card.Footer>
	  </Card>
	  <Card>
	  <Card.Header><B>Space Invaders</B></Card.Header>
	    <Card.Img variant="top" src={space_invaders} />
	    <Card.Body>
	      <Card.Title>Simple Space Invaders game with sounds and command-line difficulty settings </Card.Title>
	      <Card.Text>
	        This card has supporting text below as a natural lead-in to additional
	        content.{' '}
	      </Card.Text>
	    </Card.Body>
	    <Card.Footer>
	      <small className="text-muted">Last updated 3 mins ago</small>
	    </Card.Footer>
	  </Card>
	  <Card >
	  <Card.Header><B>Wear Weather</B></Card.Header>
	    <Card.Img variant="top" src={wear_weather} />
	    <Card.Body>
	      <Card.Title>App that suggests what clothing to wear based on the current and future weather</Card.Title>
	      <Card.Text>
	        This is a wider card with supporting text below as a natural lead-in to
	        additional content. This card has even longer content than the first to
	        show that equal height action.
	      </Card.Text>
	    </Card.Body>
	    <Card.Footer>
	      <small className="text-muted">Last updated 3 mins ago</small>
	    </Card.Footer>
	  </Card>
	</CardDeck>
		

            
        </Container>
    );
  }
}


