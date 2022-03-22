import React from "react";

import './categoryCard.css'

function CategoryCard(props) {
    return (
        <div className="category-card">
            <div className="catrgory-card__image-wrapper">
                <img className="category-card__image" src={props.image} alt="category" />
            </div>
            <h3 className="category-card__title">{props.name}</h3>
        </div>
    )
}

export default CategoryCard