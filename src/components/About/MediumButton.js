import React from "react";
import "../../css/style.css"

function MediumButton(props){
    return (
        <a href={props.ruta} id="formLogIn" className="registerSignUpButton">
            {props.children}
        </a>
    );
}

export default MediumButton;