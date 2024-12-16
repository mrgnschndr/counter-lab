import React from "react";

function Post({ title, imgURL, count, onVote }) {
  return (
    <div className="post-container">
      <p>{title}</p>
      <img alt={title} src={`/images/${imgURL}`} />
      <div className="button-wrapper">
        <button onClick={() => onVote(title, -1)}>-</button>
        <p>{count}</p>
        <button onClick={() => onVote(title, 1)}>+</button>
      </div>
    </div>
  );
}

export default Post;