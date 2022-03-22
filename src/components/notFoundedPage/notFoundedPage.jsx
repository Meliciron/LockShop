import React from 'react';
import "./notFoundedPage.css";
import Image404 from "../../assets/img/404.gif";
import { Link } from "react-router-dom";

function NotFoundedPage() {
    return (
        <div className="not-founded-page__wrapper">
            <div className="not-founded-page">
                <div className="not-founded-page__text-wrapper">
                    <h2 className="not-founded-page__title">ОЙ!</h2>
                    <h3 className="not-founded-page__subtitle">Похоже, мы не можем найти нужную вам страницу</h3>
                    <p className="not-founded-page__text">Код ошибки: 404</p>
                    <div className="not-founded-page__links-area">
                        <p className="not-founded-page__links-area-title">
                            Вот несколько полезных ссылок:
                        </p>
                        <ul className="not-founded-page__ul">
                            <li className="not-founded-page__li">
                                <Link to="/">Главная</Link>
                            </li>
                            <li className="not-founded-page__li">
                                <Link to="/Catalogue/CatalogueFull">Каталог</Link>
                            </li>
                            <li className="not-founded-page__li">
                                <Link to="/Wholesale">Оптовая продажа</Link>
                            </li>
                            <li className="not-founded-page__li">
                                <Link to="/AboutUs">О нас</Link>
                            </li>
                            <li className="not-founded-page__li">
                                <Link to="/Delivery">Дополнительная иформация</Link>
                            </li>
                            <li className="not-founded-page__li">
                                <Link to="/Cart">Корзина</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <img src={Image404} alt="not founded" className="not-founded-page__image" />
            </div>
        </div>
    )
}

export default NotFoundedPage;