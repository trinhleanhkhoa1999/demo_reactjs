// class component
// function component
import React, { Component } from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

export default class MyComponent extends Component {
  state = {
    listUsers: [
      { id: "1", name: "John", age: "10" },
      { id: "2", name: "Eric", age: "26" },
      { id: "3", name: "hari", age: "70" },
    ],
  };
  render() {
    //DRY: done repeat yourself
    const { listUsers } = this.state;
    return (
      <div>
        <UserInfor />
        <DisplayInfor listUsers={listUsers} />
      </div>
    );
  }
}
