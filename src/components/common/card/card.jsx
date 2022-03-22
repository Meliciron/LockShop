import React from "react";
import { useDispatch } from "react-redux";
import { changeSelectedCard } from "../../../redux/store/selectedCard";

import "./card.css";

import CostSection from "../costSection/costSection";
import StarRating from "../starRating/starRating";

function Card({pictures, presence, name,  reviews, price, rating, color, art, installation, features, description, advantages}) { 

    let isPresentIcon="/img/cardsImages/";
    let imagesPath = "/img/cardsImages/" + pictures + "/small.png";
    presence === "Есть в наличии" ? isPresentIcon += "present.svg" : isPresentIcon += "absent.svg";
    let id = Number(Date.now());

    const dispatch = useDispatch();

    let selectedLock = {
        name: name,
        presence: presence,
        pictures: pictures, 
        reviews: reviews,
        price: price,
        rating: rating,
        color: color,
        art: art,
        installation: installation,
        features: features,
        description: description,
        advantages: advantages,
    }

    let selectedCard = () => {
        dispatch(changeSelectedCard(selectedLock));
    }

    return (
        <div className="card" onClick={()=> selectedCard() }>
            <div className="card__presence">
                <img className="card__presence-image" src={isPresentIcon} alt="presence"/>
                <p className="card__presence-text">{presence}</p>
            </div>
            <div className="card__sale">SALE</div>
            <div className="card__image-wrapper">
                <img className="card__image" src={imagesPath} alt="product" />
            </div>
            <div className="card__bottom-section">
                <div className="card__reviews-wrapper">
                   <StarRating key={id+1048} rating={rating}/>
                    ({reviews}) отзывов
                </div>
                <div className="card__title">
                    {name}
                </div>
                <div className="card__price">
                    <CostSection cost={price}/>        
                </div>     
            </div>
        </div>
    )
}

export default Card