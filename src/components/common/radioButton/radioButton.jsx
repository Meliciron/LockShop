import React from "react";
import "./radioButton.css";

function RadioButton({ labelText, value, selected, onChange }) {

    return (
        <div className="radio-button__wrapper" onClick={()=>{onChange(value);}}>
            <div className={`radio-button__outer-circle ${value !== selected && "unselected"}`}>
                <div className={`radio-button__inner-circle ${value !== selected && "unselected-circle"}`}></div>
            </div>
            <div className="radio-button-text">{labelText}</div>
        </div>
    )
}

export default RadioButton;