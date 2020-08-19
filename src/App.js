import React, { Component, Fragment } from 'react';
import {Nav, NavDropdown, Form, FormControl, Button, Navbar } from 'react-bootstrap'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      searchTerm:"",
      location:"",
      category:"",

    }
  }

  render(){
    let category=["shops", "resturants","hotels"]
  return (
    
    <Fragment>
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">exploreLocal</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Signup</Nav.Link>
      <Nav.Link href="#link">Login</Nav.Link>
      <Nav.Link href="#link">About Us</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
      <header className="App-header">
        <h1>Find local business around you</h1>
        <h2>Support local and small businesses recovering from pandemic's economic impact by recieving services at a local store</h2>
        <form>
          <label></label>
          <input type="text" placeholder="What are you looking for"></input>
          <label></label>    
          <input type="text" placeholder="Location"></input>
          <input type="submit"></input> 
        </form>
Browse Categories

<button id="clothing-btn">Clothing and Apparel</button>
<button id="restaurant-btn">Restaurants</button>
<button id="convinience-btn">Convinience Stores</button>
<button id="grocery-btn">Groceries</button>



      </header>
      </Fragment>
  );}
}

export default App;
