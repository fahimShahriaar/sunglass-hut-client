import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const ReviewPage = ({ review }) => {
    const { clientName, text } = review;

    return (
        <div>
            <div className="p-4 border">
                <h6>{clientName}</h6>
                <p>{text}</p>
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
            </div>
        </div >
    );
};

export default ReviewPage;