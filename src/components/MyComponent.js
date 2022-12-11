// class component
// function component
import React, { Component } from "react";

export default class MyComponent extends Component {
  state = {
    name: "Khoa",
    age: 23,
    address: "Hoi dan it",
  };
  handleOnChange = (e) => {
    console.log("check xem e.target co gi", e.target);
    this.setState({
      // e.target.value lang nghe tu su kien onChange log ra. Roi lay e.target.value gang lai cho name
      name: e.target.value,
    });
    console.log(this.state);
  };
  handleSubmit = (e) => {
    e.preventDefault(); // chong reload page
    console.log("current state", this.state);
  };
  //JSX code javascript
  render() {
    return (
      <div>
        <div>
          My name is {this.state.name}. I'm {this.state.age}
        </div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text" onChange={(e) => this.handleOnChange(e)} />
          <button> Submit </button>
        </form>
      </div>
    );
  }
}
