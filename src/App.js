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
          <label htmlFor="searchInput" className="sr-only" ></label>
          <input type="text" id="searchInput" placeholder="what are you looking for" value={this.state.searchTerm}></input>
          <label htmlFor="location" className="sr-only"></label>
          <input type="text" id="location" placeholder="location" value={this.state.location}></input>
          <label ></label>
          <select>
            <option value="shops">shops</option>
            <option value="hotels">hotels</option>
            <option value="restuarant">restuarant</option>
            <option value="events">events</option>
          </select>
          <button type="submit"></button>
        </form>
      </header>
      </Fragment>
  );}
}

export default App;
