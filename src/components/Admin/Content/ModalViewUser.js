import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState, useEffect } from "react";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import { toast } from "react-toastify";
import { putUpdateUser } from "../../../services/apiServices";
import _ from "lodash";

const ModalViewUser = (props) => {
  const { show, setShow, dataUpdate } = props;
  // const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setEmail("");
    setPassword("******");
    setUserName("");
    setRole("USER");
    setPreviewImage("");
    setImage("");
    props.resetUpdateData();
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("******");
  const [userName, setUserName] = useState("");
  const [role, setRole] = useState("USER");
  const [previewImage, setPreviewImage] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (!_.isEmpty(dataUpdate)) {
      // update state
      setEmail(dataUpdate.email);
      setPassword(dataUpdate.password);
      setUserName(dataUpdate.username);
      setRole(dataUpdate.role);
      if (dataUpdate.image) {
        setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`);
      }

      setImage("");
    }
  }, [dataUpdate]);

  const handleUploadImage = (event) => {
    console.log("Uploading");
    if (event.target.files && event.target.files[0]) {
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
      setImage(event.target.files[0]);
    } else {
      // setPreviewImage("")
    }
  };
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmitCreateUser = async () => {
    // validate
    const isValidateEmail = validateEmail(email);
    if (!isValidateEmail) {
      toast.error("Invalid email");
      return;
    }

    let data = await putUpdateUser(dataUpdate.id);
    console.log(">>>> check data: ", data);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      handleClose();
      await props.fecthGetAllUsers();
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        backdrop="static"
        className="modal-add-user"
      >
        <Modal.Header closeButton>
          <Modal.Title>View a user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                disabled
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                disabled
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">User Name</label>
              <input
                type="text"
                className="form-control"
                disabled
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Role</label>
              <select
                disabled
                className="form-select"
                value={role}
                onChange={(event) => setRole(event.target.value)}
              >
                <option value="USER">USER</option>
                <option value="ADMIN">ADMIN</option>
              </select>
            </div>

            <div className="col-md-12 ">
              <label className="form-label label-upload" htmlFor="labelUpload">
                <FcPlus />
                Upload file Image
              </label>
              <input
                disabled
                type="file"
                id="labelUpload"
                hidden
                onChange={(event) => handleUploadImage(event)}
              />
            </div>
            <div className="col-md-12 img-preview">
              {previewImage ? (
                <img src={previewImage} />
              ) : (
                <span>Preview image</span>
              )}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalViewUser;
