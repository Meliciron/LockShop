import React from 'react';
import { Link } from "react-router-dom";

import "./delivery.css";

import PochtaImg from "../../../assets/img/pochta.png";
import PochtaSmallImg from "../../../assets/img/pochtaS.png";
import LiniiImg from "../../../assets/img/linii.png";
import LiniiSmallImg from "../../../assets/img/liniiS.png";
import SdekImg from "../../../assets/img/sdek.png";
import SdekSmallImg from "../../../assets/img/sdekS.png";
import DeliveryCard from "./deliveryCard/deliveryCard";

function Delivery() {
    return (
        <div className="delivery__wrapper">
            <div className="delivery">
                <div className="delivery__navigation-wrapper">
                    <div className="catalogue-full-page__nav-path">
                        <Link to="/" className="catalogue-full-page__nav-path-link">Главная </Link>
                        /
                        <Link to="/Delivery" className="catalogue-full-page__nav-path-link catalogue-full-page__nav-path-link_active"> Доставка и оплата</Link>
                    </div>
                </div>
                <div className="delivery__delivery-title-wrapper">
                    <h3 className="delivery-page__section-title">
                        Доставка
                    </h3>
                </div>
                <div className="delivery__cards-row">
                    <DeliveryCard name="Почта России" img={PochtaImg} imgSmall={PochtaSmallImg}></DeliveryCard>
                    <DeliveryCard name="Деловые линии" img={LiniiImg} imgSmall={LiniiSmallImg}></DeliveryCard>
                    <DeliveryCard name="СДЭК" img={SdekImg} imgSmall={SdekSmallImg}></DeliveryCard>
                </div>
            </div>
        </div>
    )
}

export default Delivery;