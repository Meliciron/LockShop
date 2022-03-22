import React from 'react';
import "./setFilterButton.css";

function SetFilterButton(){
    return(
        <div className={"set-filter-button"}>
            <div className="set-filter-button__rectangle">
                <div className="set-filter-button__text">
                    Применить
                </div>
            </div>
            <div className="set-filter-button__square"></div>
        </div>
    )
}

export default SetFilterButton;