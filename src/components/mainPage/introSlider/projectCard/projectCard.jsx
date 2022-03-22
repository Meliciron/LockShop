import React from 'react';

import "./projectCard.css";

import ProjectImg from "../../../../assets/img/projCard.png";
import LogoImg from "../../../../assets/img/hotelLogo.svg";
import MarkedRow from "../../../common/markedRow/markedRow";

function ProjctCard() {
    return (
        <div className="project-card">
            <div className="project-card__img-wrapper">
                <img src={ProjectImg} alt="hotel" className="project-card__img" />
            </div>
            <div className="project-card__description-wrapper">
                <div className="project-card__logo-wrapper">
                    <img src={LogoImg} alt="logo" className="project-card__logo" />
                </div>
                <h4 className="project-card__title">Проект для гостинницы Radisson Hotels</h4>
                <ul className="project-card__features-list">
                    <li><MarkedRow text={`Установлено 123 Вариативных замка Golden Soft для отеля`} /></li>
                    <li><MarkedRow text={`Было нанесено личный брендинг на все замки`} /></li>
                    <li><MarkedRow text={`Были проведны монтажные работы, также была произведена помощь в пкделючении замков к системе`} /></li>
                </ul>
                <div className="project-card__budget-wrapper">
                    <p className="project-card__budget">
                        Бюджет - <span className="project-card__budget_blue">$5000</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProjctCard;