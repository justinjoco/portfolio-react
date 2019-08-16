import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Jumbotron, Container, Row, Col, Image, Button, Card, CardDeck} from "react-bootstrap";


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
			  	<Card.Header>Header</Card.Header>
			    <Card.Img variant="top" src="holder.js/100px160" />
			    <Card.Body>
			      <Card.Title>Card title</Card.Title>
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
			  <Card.Header>Header</Card.Header>
			    <Card.Img variant="top" src="holder.js/100px160" />
			    <Card.Body>
			      <Card.Title>Card title</Card.Title>
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
			  <Card.Header>Header</Card.Header>
			    <Card.Img variant="top" src="holder.js/100px160" />
			    <Card.Body>
			      <Card.Title>Card title</Card.Title>
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

		  <Card>
		  	<Card.Header>Header</Card.Header>
		    <Card.Img variant="top" src="holder.js/100px160" />
		    <Card.Body>
		      <Card.Title>Card title</Card.Title>
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
		  <Card.Header>Header</Card.Header>
		    <Card.Img variant="top" src="holder.js/100px160" />
		    <Card.Body>
		      <Card.Title>Card title</Card.Title>
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
	  	<Card.Header>Header</Card.Header>
	    <Card.Img variant="top" src="holder.js/100px160" />
	    <Card.Body>
	      <Card.Title>Card title</Card.Title>
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
	  <Card.Header>Header</Card.Header>
	    <Card.Img variant="top" src="holder.js/100px160" />
	    <Card.Body>
	      <Card.Title>Card title</Card.Title>
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
	  <Card.Header>Header</Card.Header>
	    <Card.Img variant="top" src="holder.js/100px160" />
	    <Card.Body>
	      <Card.Title>Card title</Card.Title>
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


