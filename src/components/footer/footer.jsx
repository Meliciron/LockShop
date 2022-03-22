import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import logo from "../../assets/img/Logo.svg";
import vkIcon from "../../assets/img/vk.svg";
import twitterIcon from "../../assets/img/twitter.svg";
import fbIcon from "../../assets/img/fb.svg";
import { useDispatch } from "react-redux";
import { setSelectedSection } from "../../redux/store/scrollSlice";

function Footer() {
    const dispatch = useDispatch();

    return (
        <div className="footer">
            <div className="footer__inner">
                <div className="footer__feedback-column">
                    <Link to="/">
                        <div className="footer__logo-wrapper">
                            <img className="footer__logo" src={logo} alt="logo" />
                        </div>
                    </Link>
                    <div className="footer__social-wrapper">
                        <a className="footer__social-link" target="_blanck" rel="noopener noreferrer" href="https:/vk.com" >
                            <img className="footer__social-icon" src={vkIcon} alt="vk icon" />
                        </a>
                        <a className="footer__social-link" target="_blanck" rel="noopener noreferrer" href="https:/twitter.com" >
                            <img className="footer__social-icon" src={twitterIcon} alt="twitter icon" />
                        </a>
                        <a className="footer__social-link" target="_blanck" rel="noopener noreferrer" href="https:/facebook.com" >
                            <img className="footer__social-icon" src={fbIcon} alt="fb icon" />
                        </a>
                    </div>
                </div>
                <div className="footer__column">
                    <h3 className="footer__column-title">Навигация</h3>
                    <ul className="footer__links-list">
                        <li className="footer__links-list-item">
                            <Link className="footer__link" to="/" onClick={() => window.scroll(0, 0)}>Главная</Link>
                        </li>
                        <li className="footer__links-list-item">
                            <Link className="footer__link" to="/Catalogue">Каталог</Link>
                        </li>
                        <li className="footer__links-list-item">
                            <Link className="footer__link" to="/wholeSale">Отповая продажа</Link>
                        </li>
                        <li className="footer__links-list-item">
                            <Link className="footer__link" to="/AboutUs">О нас</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer__column">
                    <h3 className="footer__column-title">Наши контакты</h3>
                    <h4 className="footer__column-subtitle">Телефоны</h4>
                    <ul className="footer__links-list">
                        <li className="footer__links-list-item">
                            <a className="footer__link" rel="noopener noreferrer" href="tel:8-988-585-00-38">+7 (988) 585 00 38</a>
                        </li>
                        <li className="footer__links-list-item">
                            <a className="footer__link" rel="noopener noreferrer" href="tel:375-33-662-82-56">+375 33 662 82 56</a>
                        </li>
                    </ul>
                    <h4 className="footer__column-subtitle">Email</h4>
                    <ul className="footer__links-list">
                        <li className="footer__links-list-item">
                            <a className="footer__link" rel="noopener noreferrer" href="mailto:vladpetrecev@gmail.com">vladpetrecev@gmail.com</a>
                        </li>
                        <li className="footer__links-list-item">
                            <a className="footer__link" rel="noopener noreferrer" href="mailto:korobka@mail.ru">korobka@mail.ru</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__column">
                    <h3 className="footer__column-title">Наш адрес</h3>
                    <ul className="footer__links-list">
                        <li className="footer__links-list-item">
                            <a href="https://goo.gl/maps/8ZHxSZ7y12EVJPwd6" target="_blank" rel="noopener noreferrer" className="footer__link">
                                <p className="footer__link footer__link_multiline">Россия, <br /> Ростов-на-Дону, ул. <br /> Богачева, 16</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer__column">
                    <h3 className="footer__column-title">Информация</h3>
                    <ul className="footer__links-list">
                        <li className="footer__links-list-item">
                            <Link className="footer__link" to="/Delivery" onClick={() => dispatch(setSelectedSection("Доставка"))}>Доставка</Link>
                        </li>
                        <li className="footer__links-list-item">
                            <Link className="footer__link" to="/Delivery" onClick={() => dispatch(setSelectedSection("Оплата"))}>Оплата</Link>
                        </li>
                        <li className="footer__links-list-item">
                            <Link className="footer__link" to="/Delivery" onClick={() => dispatch(setSelectedSection("Гарантии"))}>Гарантии</Link>
                        </li>
                        <li className="footer__links-list-item">
                            <Link className="footer__link" to="/Delivery" onClick={() => dispatch(setSelectedSection("Возврат товара"))}>Возврат товара</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer__rights">
                © 2022 Golden Soft All Rights reserved.
            </div>
        </div>
    )
}

export default Footer;