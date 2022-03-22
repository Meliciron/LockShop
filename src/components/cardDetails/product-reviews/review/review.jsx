import React from "react";
import "./review.css";
import StartRating from "../../../common/starRating/starRating";
import answerImg from "../../../../assets/img/answer.svg";
import commentImg from "../../../../assets/img/comment.svg";

function Review({ userName, reviewText, reviewRating, reviewDate }) {
    return (
        <div className="review">
            <div className="review__top-section">
                <div className="review__top-section-userName">
                    {userName}
                </div>
                <div className="review__top-section-date">
                    {reviewDate}
                </div>
                <div className="review__top-section-rating">
                    <StartRating rating={reviewRating} />
                </div>
            </div>
            <div className="review__bottom-section">
                <div className="review__text">
                    {reviewText}
                </div>
                <div className="review__activities">
                    <div className="review__activities-answer">
                        <img src={answerImg} alt="answer" className="review__activities-img" />
                        Ответить
                    </div>
                    <div className="review__activities-comments">
                    <img src={commentImg} alt="comment" className="review__activities-img" />
                        1 комментарий
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review;