import React from 'react';

// UnderDog component: Displays information about a lowest-rated dog
// Props:
// - title: Name or description of the dog
// - imgURL: Filename of the dog's image
// - count: Current vote count for the dog
// - onVote: Callback function to handle voting
function Underdog({ title, imgURL, count, onVote }) {
    return (
        <div className="top-dog-container">
            <h2>Under Dog of the Week!</h2>
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

export default Underdog;
