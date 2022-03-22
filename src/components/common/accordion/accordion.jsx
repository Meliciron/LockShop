import React from 'react';

import "./accordion.css";
import ArrowImg from "../../../assets/img/arrow.svg";

function Accordion({title, content}){

    const [accordionClass, setAccordionClass] = React.useState("accordion");

    function changeAccordionClass(){
        accordionClass === "accordion" ? setAccordionClass("accordion accordion_active") : setAccordionClass("accordion");
    }

    return(
        <div 
        className={accordionClass} 
        onClick={changeAccordionClass}>
            <div className="accordion__title-row">
                <span className="accordion__title">{title}</span>
                <img src={ArrowImg} alt="arrow" className="accordion__arrow-img" />
            </div>
            <div className="accordion__content-wrapper">
                {content}
            </div>
        </div>
    )
}

export default Accordion;