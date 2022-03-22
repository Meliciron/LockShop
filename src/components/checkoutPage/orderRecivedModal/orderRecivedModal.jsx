import React from 'react';
import "./orderRecivedModal.css";
import thanksImage from "../../../assets/img/thanks.svg";
import ModalProductInCart from "./modalProductInCart/modalProductInCart";
import Button from "../../common/button/button";
import { Link } from "react-router-dom";
import { resetCart } from "../../../redux/store/cartSlice";
import { clearAllTags } from "../../../redux/store/sortingAndFiltering";
import { resetDiscount } from "../../../redux/store/discountSlice";
import { useDispatch } from "react-redux";

function OrderRecivedModal({ itemsInCart, totalPrice, discount, payment = "Наличные", visibility, setVisibility }) {

    const orderId = Date.now();
    const date = new Date();
    let month = date.getMonth() + 1;
    if( month < 10)  {month = '0' + month}

    const dispatch = useDispatch();

    function btnClickHandler(e) {
        e.stopPropagation();
        setVisibility(false);
        dispatch(resetCart());
        dispatch(clearAllTags());
        dispatch(resetDiscount());
    }

    return (
        <div className={visibility ? "order-recived-modal" : "order-recived-modal_hidden"}>
            <div className="order-recived-modal__body">
                <div className="order-recived-modal__thanks-image-wrapper">
                    <img src={thanksImage} alt="thanks" className="order-recived-modal__thanks-image" />
                </div>
                <p className="order-recived-modal__thanks-text">
                    Мы получили Ваш заказ.
                </p>
                <div className="order-recived-modal__row">
                    <div className="order-recived-modal__column">
                        <div className="order-recived-modal__subtitle">
                            Номер заказа
                        </div>
                        <div className="order-recived-modal__subtitle-value">
                            {orderId}
                        </div>
                    </div>
                    <div className="order-recived-modal__column">
                        <div className="order-recived-modal__subtitle">
                            Дата
                        </div>
                        <div className="order-recived-modal__subtitle-value">
                            {
                                `${date.getDate()}.${month}.${date.getFullYear()}`
                            }
                        </div>
                    </div>
                    <div className="order-recived-modal__column">
                        <div className="order-recived-modal__subtitle">
                            Итого
                        </div>
                        <div className="order-recived-modal__subtitle-value">
                            {`${totalPrice} ₽`}
                        </div>
                    </div>
                    <div className="order-recived-modal__column">
                        <div className="order-recived-modal__subtitle">
                            Способ оплаты
                        </div>
                        <div className="order-recived-modal__subtitle-value">
                            {payment}
                        </div>
                    </div>
                </div>
                <div className="order-recived-modal__order-details-subtitle">
                    Детали заказа
                </div>
                <div className="order-recived-modal__row order-recived-modal__row_without-top-border">
                    <div className="order-recived-modal__column">
                        <div className="order-recived-modal__subtitle">
                            Товар
                        </div>
                    </div>
                    <div className="order-recived-modal__column order-recived-modal__column_additional-margin">
                        <div className="order-recived-modal__subtitle">
                            Кол-во
                        </div>
                    </div>
                    <div className="order-recived-modal__column">
                        <div className={itemsInCart.length > 3 ? "order-recived-modal__subtitle order-recived-modal__subtitle_additioanl-margin" : "order-recived-modal__subtitle order-recived-modal__subtitle-price"}>
                            Цена
                        </div>
                    </div>
                </div>
                <div className={itemsInCart.length > 3 ? "order-recived-modal__products-in-cart-wrapper order-recived-modal__products-in-cart-wrapper_scroll" : "order-recived-modal__products-in-cart-wrapper"} >
                    {
                        itemsInCart.map((item, index) => {
                            return <ModalProductInCart
                                key={index}
                                img={item.item.pictures}
                                name={item.item.name}
                                art={item.item.art}
                                quantity={item.quantity}
                                price={item.item.price[0]}
                            />
                        })
                    }
                </div>
                <div className="order-recived-modal__row order-recived-modal__row_without-top-border order-recived-modal__row_additional-padding">
                    <div className="order-recived-modal__text order-recived-modal__subtitle-value">
                        Итого: {totalPrice} ₽
                    </div>
                    <div className="order-recived-modal__text">
                        Скидка по промокоду {discount.couponName} {discount.discount * 100}%
                    </div>
                </div>
                <div className="order-recived-modal__text">
                    В настоящее время Ваш заказ обрабатывается.
                    В ближайшее время Вы получите электронное письмо с подтверждением заказа с ожидаемой датой доставки ваших товаров.
                </div>
                <div
                    className="order-recived-modal__btn-container"
                    
                >
                    <Link to="/">
                        <div className="order-recived-modal__btn-wrapper" onClick={(e) => btnClickHandler(e)}>
                            <Button name="Вернуться на главную" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default OrderRecivedModal;