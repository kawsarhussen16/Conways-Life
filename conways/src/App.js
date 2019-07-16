import React, { Component } from 'react';
import './App.css';
import MakeDimension from './component/MakeDimension.js';

class  App extends Component{
  render(){
    return (
      <div className="App">
          <h1> Graph :</h1>
          <MakeDimension/>
      </div>
    );
  }
}

export default App;
