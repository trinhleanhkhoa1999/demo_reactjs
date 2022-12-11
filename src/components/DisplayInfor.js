import React, { Component } from "react";

export default class DisplayInfor extends Component {
  render() {
    console.log(">>>> check props", this.props);
    const { age, name, myInfor } = this.props;
    return (
      <div>
        <div>My name is {name}</div>
        <div>My age is {age}</div>
      </div>
    );
  }
}
