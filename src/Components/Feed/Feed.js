import React, { useEffect, useState, useCallback } from "react";
import useToken from "../../context/useToken";
import getFeed from "../../services/getFeed";
import "./Feed.css";

export default function Feed(props) {
  const { token } = useToken();
  const [posts, setPosts] = useState(null);

  const feed = useCallback(async () => {
    const response = await getFeed(token);
    setPosts(response.images);
  }, [token]);

  useEffect(() => {
    feed();
  }, [feed]);

  return (
    <div className="feed-page">
      <h2 className="title-feed">New pictures posted!</h2>
      {posts &&
        posts.map((post, index) => {
          return (
            <div key={index} className="post-card">
              <div className="user-name">
                {post.userFirstName} {post.userLastName}
              </div>
              <img src={post.url} alt="post" className="post-image" />
            </div>
          );
        })}
    </div>
  );
}
