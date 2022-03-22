import React from "react";
import "./mainPage.css";
import { Link } from "react-router-dom";
import IntroSlider from "./introSlider/introSlider";
import Button from "../common/button/button";
import BackCallForm from "../backCallForm/backCallForm";
import AdvantagesCashbackImage from "../../assets/img/advantagesCashback.svg";
import AdvantagesLikekImage from "../../assets/img/advantagesLike.svg";
import SliderCard from "../mainPage/introSlider/sliderCard/sliderCard";
import { addFilteringTag, clearAllTags, setLastChosenCategory } from "../../redux/store/sortingAndFiltering";
import { useDispatch } from "react-redux";

function MainPage() {
    document.title = "Интернет магазин дверных замков | The project of Egor Kolentsionok";

    const dispatch = useDispatch();

    function categoryClickHandler(data) {
        dispatch(clearAllTags());
        dispatch(addFilteringTag(data));
        dispatch(setLastChosenCategory(data.item));
    }

    return (
        <div className="main-page">
            <div className="main-page__intro">
                <div className="main-page__intro-slider">
                    <IntroSlider card={<SliderCard/>} />
                </div>
            </div>
            <div className="main-page__numbers-wrapper">
                <div className="main-page__numbers">
                    <div className="main-page__numbers-column">
                        <h2 className="main-page__numbers-column-title">5,567</h2>
                        <p className="main-page__numbers-column-info">Счастливых клиентов</p>
                    </div>
                    <div className="main-page__numbers-column">
                        <h2 className="main-page__numbers-column-title">1245</h2>
                        <p className="main-page__numbers-column-info">Продуктов на выбор</p>
                    </div>
                    <div className="main-page__numbers-column">
                        <h2 className="main-page__numbers-column-title">372</h2>
                        <p className="main-page__numbers-column-info">Продаж в день</p>
                    </div>
                    <div className="main-page__numbers-column">
                        <h2 className="main-page__numbers-column-title">20</h2>
                        <p className="main-page__numbers-column-info">Лет на рынке</p>
                    </div>
                </div>
            </div>
            <div className="main-page__advantages">
                <h2 className="main-page__advantages-title">Почему GoldenService? </h2>
                <div className="main-page__advantages-columns-wrapper">
                    <div className="main-page__advantages-column">
                        <img src={AdvantagesCashbackImage} alt="advantage" className="main-page__advantages-column-image" />
                        <p className="main-page__advantages-column-description">
                            Возврат удвоенной стоимости каждого замка в случае брака.
                        </p>
                    </div>
                    <div className="main-page__advantages-column">
                        <img src={AdvantagesLikekImage} alt="advantage" className="main-page__advantages-column-image" />
                        <p className="main-page__advantages-column-description">
                            Наносим ваш логотип компании на наш продукт
                        </p>
                    </div>
                    <div className="main-page__advantages-column">
                        <img src={AdvantagesCashbackImage} alt="advantage" className="main-page__advantages-column-image" />
                        <p className="main-page__advantages-column-description">
                            Возврат удвоенной стоимости каждого замка в случае брака.
                        </p>
                    </div>
                </div>
            </div>
            <div className="main-page__categories">
                <h2 className="main-page__categories-title">Категории</h2>
                <div className="main-page__categories-content">
                    <div className="main-page__categories-content-item for-hotels">
                        <h3 className="main-page__categories-content-item-title">Для отелей</h3>
                        <Link to="/Catalogue/CatalogueFull" onClick={() => categoryClickHandler({ item: "Замки для отеля", title: "Особенности" })}>
                            <button className="main-page__categories-content-item-button">Перейти</button>
                        </Link>
                    </div>
                    <div className="main-page__categories-content-item for-cases">
                        <h3 className="main-page__categories-content-item-title">Для шкафчиков</h3>
                        <Link to="/Catalogue/CatalogueFull" onClick={() => categoryClickHandler({ item: "Замки для шкафчиков", title: "Особенности" })}>
                            <button className="main-page__categories-content-item-button">Перейти</button>
                        </Link>
                    </div>
                    <div className="main-page__categories-content-item for-office">
                        <h3 className="main-page__categories-content-item-title">Для офисов</h3>
                        <Link to="/Catalogue/CatalogueFull" onClick={() => categoryClickHandler({ item: "Замки для офиса", title: "Особенности" })}>
                            <button className="main-page__categories-content-item-button">Перейти</button>
                        </Link>
                    </div>
                    <div className="main-page__categories-content-item for-home">
                        <h3 className="main-page__categories-content-item-title">Замки для дома</h3>
                        <Link to="/Catalogue/CatalogueFull" onClick={() => categoryClickHandler({ item: "Замки для дома", title: "Особенности" })}>
                            <button className="main-page__categories-content-item-button">Перейти</button>
                        </Link>
                    </div>
                </div>
                <div className="main-page__categories-button-wrapper">
                    <Link className="main-page__nav-link" to="/Catalogue">
                        <Button name={"Все категории"} />
                    </Link>
                </div>
            </div>
            <BackCallForm />
        </div>
    )
}

export default MainPage;