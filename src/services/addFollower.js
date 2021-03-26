import axios from "axios";

export default async function addFollower(token, idFollowing) {
  const response = await axios({
    method: "post",
    headers: {
      authorization: `Bearer ${token}`,
    },
    url: `${process.env.REACT_APP_DEV_SERVER}/followers/${idFollowing}`,
  });
  console.log("response followers", response.data);
  return response.data;
}

export async function getFollowers(token) {
  const response = await axios({
    method: "get",
    headers: {
      authorization: `Bearer ${token}`,
    },
    url: `${process.env.REACT_APP_DEV_SERVER}/followers`,
  });
  console.log("response followers", response.data);
  return response.data.followers;
}
