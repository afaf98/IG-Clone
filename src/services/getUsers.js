import axios from "axios";

export default async function getUsers() {
  const response = await axios.get(`${process.env.REACT_APP_DEV_SERVER}/users`);
  return response.data.users;
}
