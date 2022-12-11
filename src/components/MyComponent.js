// class component
// function component
import React, { Component } from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

export default class MyComponent extends Component {
  state = {
    name: "Khoa",
    age: 23,
    address: "Hoi dan it",
  };
  render() {
    const myInfor = ["ab", "bc", "de", "kd"];
    return (
      <div>
        <UserInfor />
        <DisplayInfor name="Khoa trinh" age="23" myInfor={myInfor} />
      </div>
    );
  }
}
