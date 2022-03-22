import React from "react";

import './catalogue.css';

import { Link } from "react-router-dom";
import CategoryCard from "./categoryCard/categoryCard";
import NakladnieImage from "../../assets/img/nakladnie.png";
import VreznieImage from "../../assets/img/vreznie.png";
import ForFlatImage from "../../assets/img/forFlat.png";
import ForHomeImage from "../../assets/img/forHomeCategories.png";
import ForHotelsImage from "../../assets/img/forHotelsCategories.png";
import ForOfficeImage from "../../assets/img/forOfficeCategories.png";
import ForCasesImage from "../../assets/img/forCasesCategories.png";
import ForFittingRoomImage from "../../assets/img/forFittingRoom.png";
import Button from "../common/button/button";
import { useDispatch } from "react-redux";
import { addFilteringTag, clearAllTags, setLastChosenCategory, setRenderCards } from "../../redux/store/sortingAndFiltering";

function Catalogue() {
    document.title = "Интернет магазин дверных замков. Выбор категории товаров | The project of Egor Kolentsionok";

    const dispatch = useDispatch();

    function clickHandler(data) {
        dispatch(clearAllTags());
        dispatch(addFilteringTag(data));
        dispatch(setLastChosenCategory(data.item))
    }

    function showAllBtnClickHandler(){
        dispatch(clearAllTags());
        dispatch(setRenderCards([]));
        dispatch(setLastChosenCategory(""));
    }

    return (
        <div className="catalogue-page">
            <div className="catalogue-page__main-content-wrapper">
                <div className="catalogue-page__nav-path">
                    <Link to="/" className="catalogue-page__nav-path-link">Главная </Link>
                    /
                    <Link to="/Catalogue" className="catalogue-page__nav-path-link catalogue-page__nav-path-link_active"> Каталог</Link>
                </div>
                <div className="catalogue-page__main-content">
                    <h2 className="catalogue-page__title">
                        Категории
                    </h2>
                    <div className="catalogue-page__categories-grid">
                        <Link
                            className="catalogue-page__category-link"
                            to="/Catalogue/CatalogueFull"
                            onClick={() => clickHandler({ item: "Накладные электронные замки", title: "Особенности" })}>
                            <CategoryCard name={"Накладные электронные замки"} image={NakladnieImage} />
                        </Link>
                        <Link
                            className="catalogue-page__category-link"
                            to="/Catalogue/CatalogueFull"
                            onClick={() => clickHandler({ item: "Врезные электроные замки", title: "Особенности" })}>
                            <CategoryCard name={"Врезные электроные замки"} image={VreznieImage} />
                        </Link>
                        <Link
                            className="catalogue-page__category-link"
                            to="/Catalogue/CatalogueFull"
                            onClick={() => clickHandler({ item: "Замки для квартиры", title: "Особенности" })}>
                            <CategoryCard name={"Замки для квартиры"} image={ForFlatImage} />
                        </Link>
                        <Link
                            className="catalogue-page__category-link"
                            to="/Catalogue/CatalogueFull"
                            onClick={() => clickHandler({ item: "Замки для дома", title: "Особенности" })}>
                            <CategoryCard name={"Замки для дома"} image={ForHomeImage} />
                        </Link>
                        <Link
                            className="catalogue-page__category-link"
                            to="/Catalogue/CatalogueFull"
                            onClick={() => clickHandler({ item: "Замки для отеля", title: "Особенности" })}>
                            <CategoryCard name={"Замки для отеля"} image={ForHotelsImage} />
                        </Link>
                        <Link
                            className="catalogue-page__category-link"
                            to="/Catalogue/CatalogueFull"
                            onClick={() => clickHandler({ item: "Замки для офиса", title: "Особенности" })}>
                            <CategoryCard name={"Замки для офиса"} image={ForOfficeImage} />
                        </Link>
                        <Link
                            className="catalogue-page__category-link"
                            to="/Catalogue/CatalogueFull"
                            onClick={() => clickHandler({ item: "Замки для шкафчиков", title: "Особенности" })}>
                            <CategoryCard name={"Замки для шкафчиков"} image={ForCasesImage} />
                        </Link>
                        <Link
                            className="catalogue-page__category-link"
                            to="/Catalogue/CatalogueFull"
                            onClick={() => clickHandler({ item: "Bluetooth замки", title: "Особенности" })}>
                            <CategoryCard name={"Bluetooth замки"} image={ForFittingRoomImage} />
                        </Link>                    </div>
                    <Link className="catalogue-page__show-all-link" to="/Catalogue/CatalogueFull">
                        <div className="catalogue-page__button-wrapper" onClick={showAllBtnClickHandler()}>
                            <Button className="catalogue-page__button" name={"Смотреть все"} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Catalogue