import React from 'react';
import "./emptyFilters.css";
import ProductNotFoundImg from "../../../assets/img/roductNotFound.png";

function EmptyFilters() {
    return(
        <div className="empty-filters">
            <img src={ProductNotFoundImg} alt="not found" className="empty-filters__image" />
            <div className="empty-filters__text">К сожалению, мы не смогли найти товары по вашему запросу...</div>
            <div className="empty-filters__text"> Измените критерии поиска.</div>
        </div>
    )
}

export default EmptyFilters;