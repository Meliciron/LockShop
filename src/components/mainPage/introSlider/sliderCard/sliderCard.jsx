import React from "react";
import "./sliderCard.css";
import sliderCardImage from "../../../../assets/img/goldenSoft.png";
import Button from "../../../common/button/button";
import CostSection from "../../../common/costSection/costSection";
import {Link} from "react-router-dom";


function SliderCard() {
    return (
        <div className="slider-card">
            <div className="slider-card__image-wrapper">
                <img className="slider-card__image" src={sliderCardImage} alt="golden-soft" />
            </div>
            <div className="slider-card__info">
                <div className="slider-card__title-wrapper">
                    <h2 className="slider-card__title">
                        Golden Soft <br/>
                        GS-200Z-5 для офиса
                    </h2>
                </div>

                <div className="slider-card__description-wrapper">
                    <p className="slider-card__description">
                        Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы.
                    </p>
                    <p className="slider-card__description">
                        Подходит для установки на деревянную межкомнатную дверь.
                    </p>
                </div>
                <div className="slider-card__cost-wrapper">
                    <p className="slider-card__cost-title">Цена</p>
                    <div className="slider-card__cost-value-wrapper">
                        <CostSection cost={["33 000", "37 000"]} />
                    </div>
                    <div className="slider-card__button-wrapper" onClick={(e)=> e.stopPropagation()}>
                        <Link to="/Catalogue/CatalogueFull">
                            <Button name={'Перейти в каталог'}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderCard;