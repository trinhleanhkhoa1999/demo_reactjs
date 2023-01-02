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
export { postCreactNewUser };
