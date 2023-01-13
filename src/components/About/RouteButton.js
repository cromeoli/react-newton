import React from "react";
import "../../css/style.css"

function RouteButton(props){
    return (
        <a href={props.path} className="registerSignUpButton routeButton">
            {props.children}
        </a>
    );
}

export default RouteButton;