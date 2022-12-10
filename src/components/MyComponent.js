// class component
// function component
import React, { Component } from "react";

export default class MyComponent extends Component {
  state = {
    name: "Khoa",
    age: 23,
    address: "Hoi dan it",
  };
  handleOnClick = () => {
    console.log("  My name is ", this.state.name);
    this.setState({
      name: "be bi",
      age: Math.floor(Math.random() * 100 + 1),
    });
  };
  //JSX code javascript
  render() {
    return (
      <div>
        My name is {this.state.name}. I'm {this.state.age}
        <button
          onClick={() => {
            this.handleOnClick();
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}
