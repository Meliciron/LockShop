import React from "react";
import './header.css'
import { Link } from "react-router-dom";
import Banner from "./banner/banner";
import logo from "../../assets/img/Logo.svg";
import phoneIcon from "../../assets/img/Phone-call.svg";
import cartIcon from "../../assets/img/Cart.svg";
import { useSelector } from "react-redux";

function Header() {
    const itemsInCart = useSelector(state => state.cart.itemsInCart)

    let quantityInCart = 0;
    for (let position of itemsInCart) {
        quantityInCart = quantityInCart + position.quantity;
    }

    return (
        <div className="header">
            <Banner />
            <div className="header__content">
                <div className="header__left-side-container">
                    <Link to="/">
                        <div className="header__logo-wrapper">
                            <img className="header__logo" src={logo} alt="logo" />
                        </div>
                    </Link>
                    <nav className="header__navigation">
                        <ul className="header__navigation-list">
                            <li className="header__navigation-list-item">
                                <Link className="header__navigation-link" to="/">Главная</Link>
                            </li>
                            <li className="header__navigation-list-item">
                                <div className="popup-item">
                                    <Link className="header__navigation-link catalogue-link" to="/Catalogue">Каталог</Link>
                                </div>
                            </li>
                            <li className="header__navigation-list-item">
                                <Link className="header__navigation-link" to="/Wholesale">Оптовая продажа</Link> </li>
                            <li className="header__navigation-list-item">
                                <Link className="header__navigation-link" to="/AboutUs">О нас</Link> </li>
                        </ul>
                    </nav>
                </div>
                <div className="header__right-section">
                    <div className="header__phone-call">
                        <img className="header__phone-icon" src={phoneIcon} alt="phone" />
                        <p className="header__phone-number">
                            +7 (966) 55 88 499
                        </p>
                    </div>
                    <div className="header__shopping-icons">
                        <Link to="/Cart">
                            <img className="header__cart-icon" src={cartIcon} alt="cart" />
                            {
                                quantityInCart > 0 ? <div className="header__cart-quantity">{quantityInCart}</div> : ''
                            }
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;