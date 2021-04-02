import axios from "axios";

export default async function getProfilePictures(token) {
  const response = await axios.get(
    `${process.env.REACT_APP_DEV_SERVER}/profile`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return response.data;
}
