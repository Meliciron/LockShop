import React from 'react';
import "./product-reviews.css";
import reviews from "./reviews";
import Review from "./review/review";
import Button from "../../common/button/button";
import Rating from '@mui/material/Rating';

function ProductReviews() {
    return (
        <div className="product-reviews-wrapper">
            <div className="product-reviews">
                {
                    reviews.map((item) => { return <Review userName={item.userName} reviewText={item.reviewText} reviewRating={item.reviewRating} reviewDate={item.reviewDate} /> })
                }
            </div>
            <div className="product-reviews__leave-review">
                <div className="product-reviews__leave-review-row">
                    <h3 className="product-reviews__leave-review-row-title product-reviews__leave-review-row-title_default-cursor">Ваша оценка</h3>
                    <Rating />
                </div>
                <div className="product-reviews__leave-review-row">
                    <label className="product-reviews__leave-review-row-title">
                        <h3 className="product-reviews__leave-review-row-title">Ваше имя</h3>
                        <input type="text" className="product-reviews__leave-review-row-input" placeHolder="Ваше имя" />
                    </label>
                </div>
                <div className="product-reviews__leave-review-row">
                    <label className="product-reviews__leave-review-row-title">
                        <h3 className="product-reviews__leave-review-row-title">Ваш email</h3>
                        <input type="text" className="product-reviews__leave-review-row-input" placeHolder="Ваш email" />
                    </label>
                </div>
                <div className="product-reviews__leave-review-row">
                    <label className="product-reviews__leave-review-row-title">
                        <h3 className="product-reviews__leave-review-row-title">Ваш комментарий</h3>
                        <textarea className="product-reviews__leave-review-row-input product-reviews__leave-review-row-input_textarea" placeHolder="Ваш комментарий" />
                    </label>
                </div>
                <div className="product-reviews__leave-review-btn-wrapper">
                    <Button name="Оставить отзыв" />
                </div>
            </div>
        </div>
    )
}

export default ProductReviews;