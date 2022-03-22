import React from 'react';
import "./checkoutPage.css";
import RadioButton from "../common/radioButton/radioButton";
import PochtaRossii from "./pachtaRossii/pochtaRossii";
import { useSelector } from "react-redux";
import Product from "./checkoutPageProduct/checkoutPageProduct";
import DeliveryService from "./deliveryService/deliveryService";
import Button from "../common/button/button";
import OrderRecivedModal from "./orderRecivedModal/orderRecivedModal";

function CheckoutPage() {
    document.title = `Интернет магазин дверных замков. Оформление заказа | The project of Egor Kolentsionok`;
    const itemsInCart = useSelector(state => state.cart.itemsInCart);
    const discount = useSelector(state => state.discount);
    const [selectedShipment, setSelectedShipment] = React.useState();
    const [selectedPayment, setSelectedPayment] = React.useState();
    const [invalidInput, setInvalidInput] = React.useState([]);
    const [userData] = React.useState({
        surname: null,
        name: null,
        phoneNumber: null,
        email: null,
        deliveryService: {
            deliveryCompanyName: null,
        },
        payment: null
    })
    const [modalVisibility, setModalVisibility] = React.useState(false);

    let totalPrice = 0;
    for (let product of itemsInCart) {
        totalPrice += product.item.price[0].replace(/\s/g, '') * product.quantity
    }

    function nameValidation(data) {
        if (data.value.length === 0 || data.value.search(/\d/) !== -1) {
            invalidInput.push(data.name)
            setInvalidInput([...new Set(invalidInput)]);
        }
        else if (invalidInput.includes(data.name)) {
            invalidInput.splice(invalidInput.indexOf(data.name), 1)
            setInvalidInput([...new Set(invalidInput)]);
        }
        else {
            data.name === "name" ? userData.name = data.value : userData.surname = data.value
            checkIsDataCorrect()
        }
    }

    function phoneValidation(data) {
        if (data.value.length === 0 || data.value.search(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/) === -1) {
            invalidInput.push(data.name)
            setInvalidInput([...new Set(invalidInput)]);
        }
        else if (invalidInput.includes(data.name)) {
            invalidInput.splice(invalidInput.indexOf(data.name), 1)
            setInvalidInput([...new Set(invalidInput)]);
        }
        else {
            userData.phoneNumber = data.value;
            checkIsDataCorrect()
        }
    }

    function emailValidation(data) {
        if (data.value.length === 0 || data.value.search(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/) === -1) {
            invalidInput.push(data.name)
            setInvalidInput([...new Set(invalidInput)]);
        }
        else if (invalidInput.includes(data.name)) {
            invalidInput.splice(invalidInput.indexOf(data.name), 1)
            setInvalidInput([...new Set(invalidInput)]);
        }
        else {
            userData.email = data.value
            checkIsDataCorrect()
        }
    }

    function pochtaRossiiClickHandler() {
        userData.deliveryService = {};
        userData.deliveryService.deliveryCompanyName = "Почта России";
        checkIsDataCorrect()
    }

    function deliveryServiceClickHandler(company) {
        userData.deliveryService = {};
        userData.deliveryService.deliveryCompanyName = `${company}`;
        checkIsDataCorrect()
    }

    const [isBtnActive, setIsBtnActive] = React.useState(false)

    function checkIsDataCorrect() {
        if (
            userData.name !== null &&
            userData.surname !== null &&
            userData.email !== null &&
            userData.phoneNumber !== null &&
            userData.payment !== null &&
            userData.deliveryService.deliveryCompanyName !== null &&
            itemsInCart.length > 0
        ) {
            if (userData.deliveryService.deliveryCompanyName === "Почта России") {
                if (
                    userData.deliveryService.zip != null &&
                    userData.deliveryService.city != null &&
                    userData.deliveryService.oblast != null &&
                    userData.deliveryService.street != null &&
                    userData.deliveryService.region != null &&
                    userData.deliveryService.apartment != null
                ) {
                    setIsBtnActive(true)
                }
                else {
                    setIsBtnActive(false)
                }
            }
            else if (userData.deliveryService.deliveryCompanyName === "СДЕК" || userData.deliveryService.deliveryCompanyName === "Деловые линии") {
                if (
                    userData.deliveryService.city != null &&
                    userData.deliveryService.otdelenie != null
                ) {
                    setIsBtnActive(true)
                }
                else {
                    setIsBtnActive(false)
                }
            }
            else {
                setIsBtnActive(false)
            }
        }
        else {
            setIsBtnActive(false)
        }
    }

    function submitBtnHandler() {
        checkIsDataCorrect()
        if (isBtnActive) {
            setModalVisibility(true);
        }
    }

    return (
            <div className="checout-page__wrapper">
                <div className="checkout-page">
                    <h2 className="checkout-page__page-title">Оформление заказа</h2>
                    <div className="checkout-page__flex-container">
                        <div className="checkout-page__contact-data-wrapper">
                            <h2 className="checkout-page__section-title">
                                1. Контакные данные
                            </h2>
                            <div className="checkout-page__contact-data-client-info">
                                <div className="checkout-page__inputs-area">
                                    <div className="checkout-page__input-wrapper">
                                        <label className="checkout-page__input-label" htmlFor="surname">Фамилия</label>
                                        <input
                                            id="surname"
                                            name="surname"
                                            type="text"
                                            placeholder="Зайцев"
                                            onChange={(e) => nameValidation(e.target)}
                                            onBlur={(e) => nameValidation(e.target)}
                                            className={invalidInput.includes("surname") ? "checkout-page__input checkout-page__input_invalid" : "checkout-page__input"}
                                        ></input>
                                    </div>
                                </div>
                                <div className="checkout-page__inputs-area">
                                    <div className="checkout-page__input-wrapper">
                                        <label className="checkout-page__input-label" htmlFor="name">Имя</label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="Сергей"
                                            onChange={(e) => nameValidation(e.target)}
                                            onBlur={(e) => nameValidation(e.target)}
                                            className={invalidInput.includes("name") ? "checkout-page__input checkout-page__input_invalid" : "checkout-page__input"}
                                        ></input>
                                    </div>
                                </div>
                                <div className="checkout-page__inputs-area">
                                    <div className="checkout-page__input-wrapper">
                                        <label className="checkout-page__input-label" htmlFor="phone">Телефон</label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="text"
                                            placeholder="+7 (_ _ _) _ _  _ _  _ _ _"
                                            onChange={(e) => phoneValidation(e.target)}
                                            onBlur={(e) => phoneValidation(e.target)}
                                            className={invalidInput.includes("phone") ? "checkout-page__input checkout-page__input_invalid" : "checkout-page__input"}
                                        ></input>
                                    </div>
                                </div>
                                <div className="checkout-page__inputs-area">
                                    <div className="checkout-page__input-wrapper">
                                        <label className="checkout-page__input-label" htmlFor="email">E-mail</label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="text"
                                            placeholder="example@mail.ru"
                                            onChange={(e) => emailValidation(e.target)}
                                            onBlur={(e) => emailValidation(e.target)}
                                            className={invalidInput.includes("email") ? "checkout-page__input checkout-page__input_invalid" : "checkout-page__input"}
                                        ></input>
                                    </div>
                                </div>
                            </div>
                            <div className="checkout-page__contact-data">
                                <h2 className="checkout-page__section-title">
                                    2. Доставка
                                </h2>
                                <div className="checkout-page__drop-section">
                                    <div className="checkout-page__radio-area">
                                        <div className="checkout-page__radio-wrapper" onClick={() => pochtaRossiiClickHandler()}>
                                            <RadioButton
                                                labelText={"Почта России"}
                                                value="pochta"
                                                selected={selectedShipment}
                                                onChange={setSelectedShipment}
                                            />
                                        </div>
                                    </div>
                                    <div className={selectedShipment === "pochta" ? "checkout-page__droping-area" : "checkout-page__droping-area_hidden"}>
                                        <PochtaRossii userData={userData} checkDataFunction={checkIsDataCorrect} />
                                    </div>

                                    <div className="checkout-page__radio-area">
                                        <div className="checkout-page__radio-wrapper" onClick={() => deliveryServiceClickHandler("СДЕК")}>
                                            <RadioButton
                                                labelText={"СДЭК"}
                                                value="sdek"
                                                selected={selectedShipment}
                                                onChange={setSelectedShipment}
                                            />
                                        </div>
                                        <div className={selectedShipment === "sdek" ? "checkout-page__droping-area" : "checkout-page__droping-area_hidden"}>
                                            <DeliveryService userData={userData} checkDataFunction={checkIsDataCorrect} />
                                        </div>
                                    </div>
                                    <div className="checkout-page__radio-area">
                                        <div className="checkout-page__radio-wrapper" onClick={() => deliveryServiceClickHandler("Деловые линии")}>
                                            <RadioButton
                                                labelText={"Деловые линии"}
                                                value="linii"
                                                selected={selectedShipment}
                                                onChange={setSelectedShipment}
                                            />
                                        </div>
                                        <div className={selectedShipment === "linii" ? "checkout-page__droping-area" : "checkout-page__droping-area_hidden"}>
                                            <DeliveryService userData={userData} checkDataFunction={checkIsDataCorrect} />
                                        </div>
                                    </div>
                                </div>
                                <div className="checkout-page__contact-data">
                                    <h2 className="checkout-page__section-title">
                                        3. Оплата
                                    </h2>
                                    <div className="checkout-page__radio-area" onClick={() => { userData.payment = "Оплата при получении"; checkIsDataCorrect() }}>
                                        <RadioButton
                                            labelText={"Оплата при получении товара"}
                                            value="cash" selected={selectedPayment}
                                            onChange={setSelectedPayment} />
                                    </div>
                                    <div className="checkout-page__radio-area">
                                        <div className="checkout-page__radio-wrapper" onClick={() => { userData.payment = "Банковская карта"; checkIsDataCorrect() }}>
                                            <RadioButton
                                                labelText={"Банковская карта"}
                                                value="card"
                                                selected={selectedPayment}
                                                onChange={setSelectedPayment} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="checkout-page__cart-info">
                            <h3 className="checkout-page__cart-info-title">Итого</h3>
                            <div className={itemsInCart.length <= 3 ? "checkout-page__items-in-cart-wrapper" : "checkout-page__items-in-cart-wrapper checkout-page__items-in-cart-wrapper_scrollbar"}>
                                {
                                    itemsInCart.map((item, index) => { return <Product key={index} product={item} /> })
                                }
                            </div>
                            <div className="checkout-page__price-wrapper">
                                <div className="checkout-page__total-price-wrapper">
                                    К оплате: {totalPrice - totalPrice * discount.discount}
                                </div>
                                <div className="checkout-page__promocode-wrapper">
                                    Скидка по промокоду {discount.couponName} {discount.discount * 100}%
                                </div>
                            </div>
                            <div
                                className={(isBtnActive) ? "checkout-page__acept-order-button" : "checkout-page__acept-order-button checkout-page__acept-order-button_disabled"}
                                onClick={() => submitBtnHandler()}
                            >
                                <Button name={"Подтвердить заказ"} />
                            </div>
                            <div className="checkout-page__agreement">
                                {`Оформляя заказ, я принимаю `}
                                <a className="checkout-page__agreement-link" href="https://legal-box.ru/blog/polzovatelskoe-soglashenie" rel="noreferrer" target="_blank">
                                    условия пользовательского соглашения
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <OrderRecivedModal
                    itemsInCart={itemsInCart}
                    totalPrice={totalPrice - totalPrice * discount.discount}
                    discount={discount}
                    payment={userData.payment}
                    visibility={modalVisibility}
                    setVisibility={setModalVisibility}
                />
            </div>
    )
}

export default CheckoutPage;