import React from 'react';

function Post({ title, imgURL, count, incrementCount, decrementCount }) {
    let titled = title;
    let imageURL = imgURL;
    console.log(count);

    return (
        <div className="post-container">
            <p>{titled}</p>
            <img alt='test' src={`/images/${imageURL}`} />
            <div className="button-wrapper">
                <button onClick={decrementCount}>-</button>
                <p>{count}</p>
                <button onClick={       incrementCount(titled)}>+</button>
            </div>
        </div>
    )
}

export default Post;