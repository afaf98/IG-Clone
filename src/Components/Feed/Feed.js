import React, { useEffect, useState } from "react";
import useToken from "../../context/useToken";
import getFeed from "../../services/getFeed";
import "./Feed.css";

export default function Feed(props) {
  const { token } = useToken();
  const [posts, setPosts] = useState(null);
  const [users, setUsers] = useState(null);
  async function feed() {
    const response = await getFeed(token);
    // console.log("rs", response);
    setPosts(response.images);
    setUsers(response.users);
  }
  console.log("users", users && users[0].id);

  useEffect(() => {
    feed();
  }, []);
  return (
    <div className="feed-page">
      {posts &&
        posts.map((post, index) => {
          return (
            <div className="post-card">
              <div className="user-name">
                {post.userFirstName} {post.userLastName}
              </div>
              <img src={post.url} className="post-image" />
            </div>
          );
        })}
    </div>
  );
}
