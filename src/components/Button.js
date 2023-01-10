import React from "react";
import "../css/style.css"

function Button(props){
    return (
        <a href="#" className="keyboardButton lightKeyboardButtons">
            {props.children}
        </a>
    );
}

export default Button;