import React from 'react';

import "./markedList.css";

import DotImg from "../../../assets/img/markedListDot.svg";

function MarkedList({ name }) {
    return (
        <div className="marked-list__item">
            <img src={DotImg} alt="dot" className="marked-list__dot-img" />
            <div className="marked-list__item-text-wrapper">
                <span className="marked-list__item-text">{name}</span>
            </div>
        </div>
    )
}

export default MarkedList;