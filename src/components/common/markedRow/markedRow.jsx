import React from 'react';

import "./markedRow.css";

import MarkImg from "../../../assets/img/deliveryMark.svg";

function MarkedRow({text}){
    return(
        <div className="marked-row">
            <div className="marked-row__img-wrapper">
                <img src={MarkImg} alt="mark" className="marked-row__img" />
            </div>
            <div className="marked-row__text-wrapper">
                <p className="marked-row__text">
                    {text}
                </p>
            </div>
        </div>
    )
}

export default MarkedRow;