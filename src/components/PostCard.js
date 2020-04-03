import React from "react";
import { Card } from "react-bootstrap";

const PostCard = props => {
  const {
    userName,
    postContent,
    songTitle,
    recordingTitle,
    likes,
    shares,
    timePosted
  } = props.data;
  return (
    <Card>
      <div className="user-content">
        <h3>{userName}</h3>
        <p>{postContent}</p>
      </div>
      <div className="song-info">
        <h4>{songTitle}</h4>
        <p>{recordingTitle}</p>
      </div>
      <div className="card-meta">
        <p>
          <span role="img" aria-label="likes">
            ❤️
          </span>{" "}
          {likes}{" "}
          <span role="img" aria-label="shares">
            🔁
          </span>{" "}
          {shares} - {timePosted}
        </p>
      </div>
    </Card>
  );
};

export default PostCard;
