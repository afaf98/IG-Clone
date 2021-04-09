import React, { useEffect, useState } from "react";
import useToken from "../../context/useToken";
import getFeed from "../../services/getFeed";
import "./Feed.css";

export default function Feed(props) {
  const { token } = useToken();
  const [posts, setPosts] = useState(null);
  const [users, setUsers] = useState([]);
  async function feed() {
    const response = await getFeed(token);
    // console.log("rs", response);
    setPosts(response.images);
    setUsers(response.users);
  }
  // console.log("images & users", posts, users);

  useEffect(() => {
    feed();
  }, []);
  return (
    <div className="feed-page">
      {posts &&
        users &&
        posts.map((post) => {
          return (
            <div className="post-card">
              <img src={post.url} className="post-image" />
            </div>
          );
        })}
    </div>
  );
}
