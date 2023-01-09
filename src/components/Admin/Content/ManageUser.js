import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import { useState, useEffect } from "react";
import { getAllUsers } from "../../../services/apiServices";

const ManageUser = (props) => {
  const [setshowModalCreateUser, setShowModalCreateUser] = useState(false);

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
    <div className="manage-user-container">
      <div className="title">ManageUser</div>
      <div className="users-content">
        <div className="btn-add-new">
          <button
            className="btn btn-primary"
            onClick={() => setShowModalCreateUser(true)}
          >
            <FcPlus />
            Add new user
          </button>
        </div>
        <div className="table-uesrs-container">
          <TableUser listUsers={listUsers} />
        </div>
        <ModalCreateUser
          show={setshowModalCreateUser}
          setShow={setShowModalCreateUser}
          fecthGetAllUsers={fecthGetAllUsers}
        />
      </div>
    </div>
  );
};
export default ManageUser;
