import React from "react";
import './cartPage.css';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setNewDiscount } from "../../redux/store/discountSlice";
import ItemInCart from "./itemInCart/ItemInCart";
import EmptyCart from "./emptyCart/emptyCart"
import ItemInCartHeader from './itemInCartHeader/itemInCartHeader';
import Button from "../common/button/button";

function CartPage() {
    document.title = `Интернет магазин дверных замков. Корзина покупок | The project of Egor Kolentsionok`;
    const dispatch = useDispatch();
    const productsInCart = useSelector(state => state.cart);
    const discount = useSelector(state => state.discount);
    let id = Date.now();
    let totalCost = 0;
    const [textInputValue, setTextInputValue] = React.useState('');

    const navigate = useNavigate();

    for (let item of productsInCart.itemsInCart) {
        totalCost += +item.item.price[0].replace(/\s/g, '') * item.quantity;
    }

    function onSubmitHandler(e) {
        e.preventDefault();
        if (textInputValue === "ZAMOK") {
            dispatch(setNewDiscount({ couponName: "ZAMOK", discount: 0.1 }))
        }
        else {
            dispatch(setNewDiscount({ couponName: "", discount: 0 }))
        }
    }

    return (
        <div className="cart-page__wrapper">
            <div className="cart-page">
                <div className="cart-page__inner">
                    <h2 className="cart-page__title">Корзина</h2>
                    {
                        productsInCart.itemsInCart.length > 0 ?
                            <div>
                                <ItemInCartHeader />{
                                    productsInCart.itemsInCart.map((product, index) => {
                                        return (
                                            <ItemInCart key={id + index} itemInCart={product} />
                                        )
                                    })
                                }
                            </div> : <div><EmptyCart /></div>
                    }
                </div>
                {
                    productsInCart.itemsInCart.length > 0 ?
                        <div className="cart-page__right-menu">
                            <p className="cart-page__text-row cart-page__coupon-title">
                                Введите промокод
                            </p>
                            <div className="cart-page__inputs-wrapper">
                                <form id="coupon" onSubmit={(e) => onSubmitHandler(e)}>
                                    <input type="text" className="cart-page__coupon-text-input" onChange={(e) => setTextInputValue(e.target.value)} placeholder={discount.discount > 0 ? `${discount.couponName}` : ""} />
                                    <button type="submit" className="cart-page__coupon-button-input">Применить</button>
                                </form>
                            </div>
                            <div className="cart-page__text-row cart-page__coupon-price">
                                Без скидки:
                                <div>
                                    {totalCost} руб.
                                </div>
                            </div>
                            <div className="cart-page__text-row cart-page__coupon-price">
                                Скидка:
                                <div>
                                    {totalCost * discount.discount} руб.
                                </div>
                            </div>
                            <div className="cart-page__text-row cart-page__coupon-total-price">
                                Итого:
                                <div>
                                    {totalCost - totalCost * discount.discount} руб.
                                </div>
                            </div>
                            <div onClick={() => navigate("/Checkout", { replace: true })}>
                                <Button name={"Оформить заказ"} />
                            </div>
                        </div> : ""
                }
            </div>
        </div>
    )
}

export default CartPage;