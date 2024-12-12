import React, {useState} from "react";
import Post from './post.js';
import posts from './counterpost.json';
import Featured from './Featured.js';
import './App.css';


function App() {
    // use state returns an array of two indexes = variable of state // function used to update state

    // WHY DOESN'T IT ACCEPT posts AS AN ARRAY? ERROR: Objects are not valid as a React child (found: object with keys {title, imgURL, count}). If you meant to render a collection of children, use an array instead.
    const [count, setCount] = useState(posts);

    function incrementCount(pet) {
        setCount(posts.map(post =>
            post.title === pet ? { ...post, count: post.count + 1 } : post
        ))
    }

    function decrementCount() {
        setCount((newCount) => newCount - 1)
    }

    const [featured, setFeatured] = useState(false);

    function isFeatured() {
        // let auditVotes = [];
        // console.log('count', count);
        // for (let i = 0; i < posts.length - 1; i++) {
        //     auditVotes[i] = posts.count;
        //     console.log(auditVotes);
        // }
        // console.log(auditVotes);
        // if (Math.max(...auditVotes) == count) {
        //     setFeatured(true);
        // }
        // if (featured) {
        //     console.log('Featured:', featured);
        // }
        // let featTitle = 'Acie';
        // let featImgURL = 'Acie';
        // let featCount = 'Acie';
        // return featTitle;
    }

    let featTitle = 'Acie is the featured pet!';

    // a grid of photos
    // use the counter and every photo has a counter
    // most popular photo
    // most voted pet is displayed first
    // 1 components need to updated based off of the other -- 2 components working off one state.
    
    // simple
    // picture in middle at top of page -- featured photo of the week thats one component
    // below that is a repeating grid {the picture, the title of the picture, and the increment counter with the current count.}

    return (
        <div>
            <div className="featured-section">
                <Featured
                title = {featTitle}
                // imgURL = {featImgURL}
                // count = {featCount}
                checkFeatured = {isFeatured}
                />
            </div>
            <div className="post-grid">
                {posts.map((post, index) => (
                    <Post className="posts"
                    key = {index}
                    title = {post.title}
                    imgURL = {post.imgURL}
                    count = {count}
                    incrementCount = {incrementCount}
                    decrementCount = {decrementCount}
                    />
                ))}
            </div>
        </div>
    )
};

export default App;


// finish MVP by Thursday
// clean up to look like they're in a grid
// highlight at top pet PROMOTED the most and pet DEMOTED the most (inc in pos vs. dec in pos)
// how to handle negative numbers?
// how to handle ties?
// how to handle no winners/losers?