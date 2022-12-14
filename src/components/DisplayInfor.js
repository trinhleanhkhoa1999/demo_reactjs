import React, { Component } from "react";
import "./DisplayInfor.scss";

export default class DisplayInfor extends Component {
  state = {
    showHide: false,
  };
  handleShowHide = () => {
    this.setState({
      showHide: !this.state.showHide,
    });
  };
  // handleDeleteUser = (deleteUser) => {
  //   console.log(deleteUser);
  //   this.props.deleteUserInfor(deleteUser);
  // };

  render() {
    const { listUsers } = this.props; // object
    const { showHide } = this.state;
    // console.log(showHide === false ? "Show" : "Hide");
    return (
      <div>
        {showHide === false ? (
          <div>
            <span>
              <button onClick={() => this.handleShowHide()}>Show</button>
            </span>
          </div>
        ) : (
          <>
            <div>
              <span>
                <button onClick={() => this.handleShowHide()}>Hide</button>
              </span>
            </div>
            <div>
              {listUsers &&
                listUsers.length > 0 &&
                listUsers.map((item, index) => {
                  return (
                    // +item.age co tac dung convert kieu string sang number
                    <div
                      key={item.id}
                      className={+item.age >= 18 ? "green" : "red"}
                    >
                      <div>
                        {index + 1} My name is {item.name}
                      </div>
                      <div>My age is {item.age}</div>
                      <button onClick={() => this.props.deleteUserInfor(item)}>
                        x
                      </button>
                      <hr />
                    </div>
                  );
                })}
            </div>
          </>
        )}
      </div>
    );
  }
}
