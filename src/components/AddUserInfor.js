import React, { Component } from "react";

export default class AddUserInfor extends Component {
  state = {
    name: "vui long nhap name",
    age: "vui long nhap age",
  };
  handleOnChangeName = (e) => {
    this.setState({
      // e.target.value lang nghe tu su kien onChange log ra. Roi lay e.target.value gang lai cho name
      name: e.target.value,
    });
  };
  handleOnChangeAge = (e) => {
    // console.log("check xem e.target.value co gi", e.target.value);
    this.setState({
      age: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault(); // chong reload page
    console.log("current state", this.state);
    this.props.addUserInfor({
      id: Math.floor(Math.random() * 100000 + 1) + "random",
      name: this.state.name,
      age: this.state.age,
    });
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
