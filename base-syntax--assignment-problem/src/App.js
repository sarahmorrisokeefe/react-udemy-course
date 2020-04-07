import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    username: "sarahmorris926",
  };

  usernameChangedHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput changed={this.usernameChangedHandler} currentName={this.state.username}/>
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username="max" />
      </div>
    );
  }
}

export default App;
