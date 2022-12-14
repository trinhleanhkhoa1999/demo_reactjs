// class component
// function component
import React, { Component } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

export default class MyComponent extends Component {
  state = {
    listUsers: [
      { id: "1", name: "John", age: "10" },
      { id: "2", name: "Eric", age: "26" },
      { id: "3", name: "hari", age: "70" },
    ],
  };
  addUserInfor = (addObj) => {
    console.log(addObj, "addUserInfor");
    this.setState({
      listUsers: [...this.state.listUsers, addObj],
    });
  };

  deleteUserInfor = (deleteObj) => {
    console.log(deleteObj, "deleteUserInfor");
    this.setState({
      listUsers: [
        ...this.state.listUsers.filter((item) => item.id !== deleteObj.id),
      ],
    });
  };
  render() {
    //DRY: done repeat yourself
    const { listUsers } = this.state;
    return (
      <div>
        <AddUserInfor addUserInfor={this.addUserInfor} />
        <br />
        <br />
        <DisplayInfor
          listUsers={listUsers}
          deleteUserInfor={this.deleteUserInfor}
        />
      </div>
    );
  }
}
