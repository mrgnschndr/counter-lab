import React, { useState, useEffect } from "react";
import Post from "./post.js";
import initialPosts from "./counterpost.json";
import Topdog from "./Topdog.js";
import UnderDog from "./UnderDog.js"
import "./App.css";

function App() {
  // use state returns an array of two indexes = variable of state // function used to update state

  const [posts, setPosts] = useState(initialPosts);
  const [topDog, setTopDog] = useState(null);
  const [underDog, setUnderDog] = useState(null);

  // Function to update votes
  const updateVote = (title, increment) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.title === title ? { ...post, count: post.count + increment } : post
      )
    );
  };

  // Effect to determine the top dog whenever posts change
  useEffect(() => {
    // Find the post with the highest count
    const currentTopDog = posts.reduce(
      (max, post) => (post.count > max.count ? post : max),
      posts[0]
    );

    // Find the post with the lowest count
    const currentUnderDog = posts.reduce(
        (min, post) => (post.count < min.count ? post : min),
        posts[0]
    );

    setTopDog(currentTopDog);
    setUnderDog(currentUnderDog);
  }, [posts]);

  return (
    <div>
      {/* Render Top Dog */}
      {topDog && (
        <Topdog
          title={topDog.title}
          imgURL={topDog.imgURL}
          count={topDog.count}
          onVote={updateVote}
        />
      )}

      {underDog && (
        <UnderDog
        title={underDog.title}
        imgURL={underDog.imgURL}
        count={underDog.count}
        onVote={updateVote}
      />
      )}

      <div className="post-grid">
        {posts.map((post, index) => (
          <Post
            key={index}
            title={post.title}
            imgURL={post.imgURL}
            count={post.count}
            onVote={updateVote}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// a grid of photos
// use the counter and every photo has a counter
// most popular photo
// most voted pet is displayed first
// 1 components need to updated based off of the other -- 2 components working off one state.

// simple
// picture in middle at top of page -- featured photo of the week thats one component
// below that is a repeating grid {the picture, the title of the picture, and the increment counter with the current count.}

// finish MVP by Thursday
// clean up to look like they're in a grid
// highlight at top pet PROMOTED the most and pet DEMOTED the most (inc in pos vs. dec in pos)
// how to handle negative numbers?
// how to handle ties?
// how to handle no winners/losers?
