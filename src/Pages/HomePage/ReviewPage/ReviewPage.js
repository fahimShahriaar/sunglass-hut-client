import React from 'react';

const ReviewPage = ({ review }) => {
    const { clientName, text } = review;

    return (
        <div>
            <div className="p-4 border">
                <h6>{clientName}</h6>
                <p>{text}</p>
            </div>
        </div >
    );
};

export default ReviewPage;