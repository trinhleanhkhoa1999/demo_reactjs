import React, { Component } from "react";

export default class UserInfor extends Component {
  state = {
    name: "Khoa",
    age: 23,
    address: "Hoi dan it",
  };
  handleOnChangeName = (e) => {
    console.log("check xem e.target co gi", e.target);
    this.setState({
      // e.target.value lang nghe tu su kien onChange log ra. Roi lay e.target.value gang lai cho name
      name: e.target.value,
    });
  };
  handleOnChangeAge = (e) => {
    console.log("check xem e.target.value co gi", e.target.value);
    this.setState({
      age: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault(); // chong reload page
    console.log("current state", this.state);
  };
  //JSX code javascript
  render() {
    return (
      <div>
        My name is {this.state.name}. I'm {this.state.age}
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>Name: </label>
          <input
            type="text"
            value={this.state.name}
            onChange={(e) => this.handleOnChangeName(e)}
          />
          <label>Age: </label>
          <input
            type="text"
            value={this.state.age}
            onChange={(e) => this.handleOnChangeAge(e)}
          />
          <button> Submit </button>
        </form>
      </div>
    );
  }
}
