import React from "react";
import Rating from "@mui/material/Rating";

import "./starRating.css";


function StarRating({ rating }) {
    return (
        <div id="star-rating" className="star-rating">
            <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
        </div>
    )
}

export default StarRating