import axios from "axios";

export default async function newUser(data) {
  try {
    console.log("do i get the data?", data);
    const response = await axios.post(
      "https://i-clone-backend.herokuapp.com/user",
      {
        ...data,
      }
    );
    console.log("Response", response);
    return {
      status: response.status,
      message: response.data.message,
      token: response.data.token,
    };
  } catch (error) {
    console.error(error.response);
    return {
      status: error.response.status,
      error: error.response.data.message,
    };
  }
}
