import React, { Component } from "react";

export default class DisplayInfor extends Component {
  render() {
    console.log(">>>> check props", this.props);
    const { listUsers } = this.props; // object
    return (
      <div>
        {listUsers &&
          listUsers.length > 0 &&
          listUsers.map((item, index) => {
            console.log(">>>check item ", item);
            return (
              <div key={item.id}>
                <div>
                  {index + 1} My name is {item.name}
                </div>
                <div>My age is {item.age}</div>
                <hr />
              </div>
            );
          })}
      </div>
    );
  }
}
