import React, { Component } from "react";
import "./App.css";

import Display from './Display'
import SmurfForm from './SmurfsForm'

class App extends Component {
  
  
  render() {
    return (
      <div className="App">
        <SmurfForm/>
        <Display/>
      </div>
    );
  }
}

export default App;