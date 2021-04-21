import axios from "axios";

export default async function getFeed(token) {
  const response = await axios({
    method: "get",
    headers: {
      authorization: `Bearer ${token}`,
    },
    url: `${process.env.REACT_APP_DEV_SERVER}/feed`,
  });
  console.log("response followers", response.data);
  return response.data;
}
