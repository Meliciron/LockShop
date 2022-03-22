import React from "react";

import "./button.css"

function Button({name, color}){
    return(
        <button className="button">
            <div className="button__text">
                {name}
            </div> 
        </button>
    )
}

export default Button;