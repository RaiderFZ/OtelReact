import { useState } from 'react';

import ReviewsDB from './ReviewsDB';

import './reviews.scss';

const Reviews = () => {

    const [visibleReviews, setVisibleReviews] = useState(3);
    const showMoreReviews = () => {
        setVisibleReviews(ReviewsDB.length);
    };

    return (
        <div className="reviews" id='reviews'>
            <h2 className="reviews-title">Клиенты о нас</h2>
            <div className="reviews__items">
                {ReviewsDB.slice(0, visibleReviews).map((item, i) => {
                    return (
                        <div className="reviews__item" key={i}>
                            <span className="reviews__item-rating"><img src={item.icon} alt="icon" /> {item.rating} / 5</span>
                            <p className="reviews__item-text">
                                {item.text}
                            </p>
                            <div className="reviews__item-wrap">
                                {item.avatar && (
                                    <img src={item.avatar} alt="" className="reviews__item-profile-icon" />
                                )}
                                <div className="reviews__item-box">
                                <div className="reviews__item-name">
                                {item.name}
                                </div>
                                <span className="reviews__item-data">
                                    {item.data}
                                </span>
                                </div>
                                
                            </div>
                        </div>
                    )
                })}
            </div>
            {visibleReviews < ReviewsDB.length && (
                    <button className="reviews-button" onClick={showMoreReviews}>Больше отзывов</button>
            )}
        </div>
    );
};

export default Reviews;