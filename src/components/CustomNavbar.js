import React, {Component} from "react";
import {Navbar, Nav, NavItem, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import logo from './transparent_logo.png';
import './CustomNavbar.css';


export default class CustomNavbar extends Component{
	render(){
		return (
			<Navbar bg="light" expand="md">
			  <Navbar.Brand href="#"><img src={logo} alt="Logo"/></Navbar.Brand>
			  <Navbar.Toggle aria-controls="basic-navbar-nav"/>
				<Navbar.Collapse>
					<Nav className="mr-auto" activeKey="/home">

						<Nav.Item>
							<Nav.Link href="#about">About</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href="#projects">Projects</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href="#experiences">Experiences</Nav.Link>
						</Nav.Item>
						
						</Nav>
						<Nav>
						<Nav.Item>
							<Nav.Link href="#connect">Connect</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href="https://github.com/justinjoco">Github</Nav.Link>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Navbar>

		);
	}



}