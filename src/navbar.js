import React, { Component, Fragment } from 'react';
import { Nav, NavItem } from 'react-bootstrap'

class Navbar extends Component {
    render() {
        return(
            <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#home">exploreLocal</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem href="#">
                Home
              </NavItem>
              <NavItem href="#">
                About
              </NavItem>
              <NavItem href="#">
                FAQ
              </NavItem>
              <NavItem href="#">
                Contact Us
              </NavItem>
            </Nav>
          </Navbar>



        );
    }
}


export default Navbar;