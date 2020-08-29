import React, { Component } from "react";
import "./App.css";
import SmurfProfile from "./SmurfProfile";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <SmurfProfile />
      </div>
    );
  }
}

export default App;
