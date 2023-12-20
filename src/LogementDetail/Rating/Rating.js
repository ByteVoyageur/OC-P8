// Rating.js
import React from 'react';
import './Rating.scss';

const Rating = ({ rating }) => {
  const ratingValue = Math.round(rating);
  const stars = Array.from({ length: 5 }, (_, index) => {
    return index < ratingValue ? '★' : '☆';
  });

  return (
    <div className="rating">
      {stars.map((star, index) => (
        <span key={index} className={star === '★' ? 'filled-star' : 'empty-star'}>
          {star}
        </span>
      ))}
    </div>
  );
};

export default Rating;
