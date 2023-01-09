import React from "react";
import { useState, useEffect } from "react";
import { getAllUsers } from "../../../services/apiServices";

function TableUser() {
  const [listUsers, setListUsers] = useState([]);
  useEffect(() => {
    fecthGetAllUsers();
  }, []);
  const fecthGetAllUsers = async () => {
    let res = await getAllUsers();
    console.log(res);
    if (res.EC === 0) {
      setListUsers(res.DT);
    }
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Number</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <tr key={`table-user-${index}`}>
                  <td>{index + 1}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                </tr>
              );
            })}
          {listUsers && listUsers.length === 0 && (
            <tr>
              <td colSpan={"4"}>Khong co user</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default TableUser;
