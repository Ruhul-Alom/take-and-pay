import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const StarRating = ({ rating }) => {
    const stars = [];
    const totalStars = 5;

    for (let i = 0; i < totalStars; i++) {
        if (i < rating) {
            stars.push(<FaStar key={i} className="text-yellow-500" />);
        } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
            stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
        } else {
            stars.push(<FaRegStar key={i} className="text-yellow-500" />);
        }
    }

    return <div className='flex'>{stars}</div>;
};

export default StarRating;
