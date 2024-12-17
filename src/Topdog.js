import React from 'react';

// Topdog component: Displays information about a top-rated dog
// Props:
// - title: Name or description of the dog
// - imgURL: Filename of the dog's image
// - count: Current vote count for the dog
// - onVote: Callback function to handle voting
function Topdog({ title, imgURL, count, onVote }) {
    return (
        <div className="top-dog-container">
            <h2>Top Dog of the Week!</h2>
            <p>{title}</p>
            <img alt={title} src={`/images/${imgURL}`} />
            <div className="button-wrapper">
                <button onClick={() => onVote(title, -1)}>-</button>
                <p>{count}</p>
                <button onClick={() => onVote(title, 1)}>+</button>
            </div>
        </div>
    )
}

export default Topdog;
