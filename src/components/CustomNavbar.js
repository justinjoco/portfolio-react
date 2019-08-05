import React, {Component} from "react";
import {Navbar, Nav, NavItem, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import logo from './transparent_logo.png';
import './CustomNavbar.css';


export default class CustomNavbar extends Component{
	render(){
		return (
			<Navbar bg="light">
			  <Navbar.Brand href="#"><img src={logo} alt="Logo"/></Navbar.Brand>
			  <Navbar.Toggle/>
				<Navbar.Collapse className="justify-content-end">
					<Nav className="justify-content-end" activeKey="/home">
						<Nav.Item>
							<Nav.Link href="/">Home</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href="#about">About</Nav.Link>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Navbar>

		);
	}



}