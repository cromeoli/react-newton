import React from "react";
import "../css/style.css"

function Button(props){
    return (
        <a onClick={() => props.write(props.operator)} className="keyboardButton lightKeyboardButtons">
            {props.children}
        </a>
    );
}

export default Button;