import axios from "axios";

export default async function getUser(data) {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_DEV_SERVER}/login`,
      {
        ...data,
      }
    );
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
