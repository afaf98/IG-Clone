import axios from "axios";

export default async function addFollower(token, idFollowing) {
  const response = await axios({
    method: "post",
    headers: {
      authorization: `Bearer ${token}`,
    },
    url: `${process.env.REACT_APP_DEV_SERVER}/followers/${idFollowing}`,
  });
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
  return response.data.followers;
}

export async function unfollow(token, idFollower) {
  const response = await axios({
    method: "delete",
    headers: {
      authorization: `Bearer ${token}`,
    },
    url: `${process.env.REACT_APP_DEV_SERVER}/followers/${idFollower}`,
  });
  return response.data.followers;
}
