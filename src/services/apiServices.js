import axios from "../utils/axiosCustomize";
const postCreactNewUser = (email, password, userName, role, image) => {
  // Submit data
  // call api: cach gui co File(vd:userImage) bang FORM DATA
  const data = new FormData();
  data.append("email", email);
  data.append("password", password);
  data.append("username", userName);
  data.append("role", role);
  data.append("userImage", image);
  return axios.post("api/v1/participant", data);
};
const getAllUsers = () => {
  return axios.get("api/v1/participant/all");
};
const putUpdateUser = (id, userName, role, image) => {
  // Submit data
  // call api: cach gui co File(vd:userImage) bang FORM DATA
  const data = new FormData();
  data.append("id", id);
  data.append("username", userName);
  data.append("role", role);
  data.append("userImage", image);
  return axios.put("api/v1/participant", data);
};
const deleteUser = (userId) => {
  return axios.delete("api/v1/participant", { data: { id: userId } });
};
export { postCreactNewUser, getAllUsers, putUpdateUser, deleteUser };
