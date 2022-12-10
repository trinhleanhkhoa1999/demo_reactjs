// class component
// function component
import React, { Component } from "react";

export default class MyComponent extends Component {
  state = {
    name: "Khoa",
    age: 23,
    address: "Hoi dan it",
  };
  //JSX code javascript
  render() {
    return (
      <div>
        My name is {this.state.name}. I from {this.state.address}
      </div>
    );
  }
}
