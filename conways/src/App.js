import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';


class Grid extends Component{
  render(){
    return(
      <div>
        Grid
      </div>
    )
  }
}
class  App extends Component{
  constructor(){
    super();
    this.state = {
      generation: 0,
    }
  }
  render(){
    return (
      <div className="App">
          <h1> The Game of Life</h1>
          <Grid />
          <h2> Generation : {this.state.generation} </h2>
      </div>
    );
  }
}

export default App;
