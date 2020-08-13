import React, { Component, Fragment } from 'react';
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
      <header className="App-header">
        <h1>Find local bussiness around you</h1>
        <h2>support local and small bussiness recover from pandemic economic impact by reciving service at a local store</h2>
        <form>
          <label></label>
          <input></input>
          <label></label>
          <input></input>
          <label></label>
          <input></input>
        </form>
      </header>
      </Fragment>
  );}
}

export default App;
