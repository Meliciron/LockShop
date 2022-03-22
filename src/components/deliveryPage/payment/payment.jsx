import React from 'react';

import "./payment.css";

import creditCardImg from "../../../assets/img/creditCard.svg";
import cashImg from "../../../assets/img/cash.svg";

function Payment() {
    return (
        <div className="payment">
            <div className="payment__title-wrapper">
                <h3 className="delivery-page__section-title">
                    Оплата
                </h3>
            </div>
            <div className="payment__paragraph-wrapper">
                <div className="payment__subtitle-row">
                    <img src={creditCardImg} alt="credit card" className="payment__subtitle-row-img" />
                    <span className="payment__subtitle">Банковская карта</span>
                </div>
                <p className="payment__paragraph">
                    Онлайн заказ можно оплатить с помощью банковской карты, выпущенной на территории России. Оформляя заказ на сайте, в пункте «Оплата» выберите «Банковская карта». После переадресации на страницу системы безопасных платежей, необходимо лишь подтвердить платеж.
                </p>
            </div>
            <div className="payment__paragraph-wrapper">
                <div className="payment__subtitle-row">
                    <img src={cashImg} alt="credit card" className="payment__subtitle-row-img" />
                    <span className="payment__subtitle">Оплата при получении товара</span>
                </div>
                <p className="payment__paragraph">
                    Онлайн заказ можно оплатить непосредственно при получении. Оформляя заказ на сайте, в пункте «Оплата» выберите «Оплата при получении товара». После того как товар будет доставлен к заказчику, после полного осмотра, оплатите стоимость товара удобным для вас способом.
                </p>
            </div>
        </div>
    )
}

export default Payment;