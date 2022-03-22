import React from 'react';

import "./deliveryCard.css";

import Mark from "../../../../assets/img/deliveryMark.svg";

function DeliveryCard(props){
    return(
        <div className="delivery-card">
            <div className="delivery-card__img-wrapper">
                <img src={props.img} alt="main" className="delivery-card__main-img"/>
                <img src={props.imgSmall} alt="" className="delivery-card__small-img" />
            </div>
            <div className="delivery-card__title-wrapper">
                <h4 className="delivery-card__title">
                    {props.name}
                </h4>
            </div>
            <div className="delivery-card__text-row">
                <img src={Mark} alt="mark" className="delivery-card__mark-img"/>
                <span className="delivery-card__text">Получение посылки согласно условиям перевозчика</span>
            </div>
            <div className="delivery-card__text-row">
                <img src={Mark} alt="mark" className="delivery-card__mark-img"/>
                <span className="delivery-card__text">Доставка в течении 1-2 дней</span>
            </div>
        </div>
    )
}

export default DeliveryCard;