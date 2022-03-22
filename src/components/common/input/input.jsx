import React from "react";

import "./input.css";

const Input = React.forwardRef((props, ref) => {
    return(
        <input  className={`input ${props.className}`} name={props.name} id={props.id} type={props.type} placeholder={props.placeholder}>
        </input>
    )
})

export default Input