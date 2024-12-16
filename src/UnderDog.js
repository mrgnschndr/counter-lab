import React from 'react';

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
