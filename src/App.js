import React, { useState, useEffect } from "react";
import Post from "./post.js";
import initialPosts from "./counterpost.json";
import Topdog from "./Topdog.js";
import UnderDog from "./UnderDog.js";
import "./App.css";

function App() {
  // use state returns an array of two indexes = variable of state // function used to update state

  // STATE MANAGEMENT
  // [WHAT IT RETURNS]:
  // - posts: current array of all posts
  // - setPosts: function to update posts
  // Initialized with data from counterpost.json
  const [posts, setPosts] = useState(initialPosts);

  // Additional state to track top and bottom performers
  // These will be dynamically updated based on vote counts
  const [topDog, setTopDog] = useState(null);
  const [underDog, setUnderDog] = useState(null);

  // VOTE UPDATE LOGIC
  // - Function that updates vote count for a specific post
  // - Used as a prop in child components to allow voting
  const updateVote = (title, increment) => {
    // WHAT IT'S DOING:
    // 1. Takes the current posts
    // 2. Maps through all posts
    // 3. Finds the post with matching title
    // 4. Increments its count by the given value (+1 or -1)
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        //NOTES: This solution is an IMMUTABLE update (creates a new array)
        // -> ...post (spread operator) - copies all existing properties
        // -> count: post.count + increment - updates just the count
        // -> ?: (ternary operator) - determines which posts to modify
        post.title === title ? { ...post, count: post.count + increment } : post
      )
    );
  };

  // EFFECT HOOK
  // [WHAT IT RETURNS]:
  // - Updates topDog and underDog states whenever posts change
  useEffect(() => {
    // WHAT IT'S DOING:
    // 1. Find the post with highest vote count
    // - Uses reduce to compare counts
    // - Starts with first post as initial max
    // Find the post with the highest count
    const currentTopDog = posts.reduce(
      (max, post) => (post.count > max.count ? post : max),
      posts[0]
    );

    // 2. Find the post with lowest vote count
    // - Similar logic to finding top dog, but with < comparison
    const currentUnderDog = posts.reduce(
      (min, post) => (post.count < min.count ? post : min),
      posts[0]
    );

    // Update state with top and bottom performers
    setTopDog(currentTopDog);
    setUnderDog(currentUnderDog);
  }, [posts]); // Runs every time posts array changes

  // RENDER METHOD
  // [WHAT IT RETURNS]:
  // - Rendered UI with top dog, under dog, and grid of all posts
  return (
    <div>
      {/* CONDITIONAL RENDERING */}
      {/* Only render Top Dog if a top dog exists */}
      {topDog && (
        <Topdog
          title={topDog.title}
          imgURL={topDog.imgURL}
          count={topDog.count}
          onVote={updateVote}
        />
      )}

      {/* Similar conditional rendering for Under Dog */}
      {underDog && (
        <UnderDog
          title={underDog.title}
          imgURL={underDog.imgURL}
          count={underDog.count}
          onVote={updateVote}
        />
      )}

      {/* POST GRID */}
      {/* Maps through all posts and renders individual Post components */}
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
