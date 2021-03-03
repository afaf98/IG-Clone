import axios from "axios";

export default async function getUser(data) {
  try {
    console.log("do i get the data?", data);
    const response = await axios.post("http://localhost:5000/login", {
      ...data,
    });
    console.log("Response", response.body.message);
  } catch (error) {
    console.error(error.response);
    return {
      status: error.response.status,
      error: error.response.data.message,
    };
  }
}
