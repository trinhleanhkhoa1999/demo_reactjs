// class component
// function component
import React, { Component } from "react";
import UserInfor from "./UserInfor";

export default class MyComponent extends Component {
  state = {
    name: "Khoa",
    age: 23,
    address: "Hoi dan it",
  };
  render() {
    return (
      <div>
        <UserInfor />
      </div>
    );
  }
}
