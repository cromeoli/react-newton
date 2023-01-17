import React from "react";
import "../../css/style.css"
import {Link} from "react-router-dom";

function RouteButton(props){
    return (
        <Link to={props.path} className="registerSignUpButton routeButton">
            {props.children}
        </Link>
    );
}

export default RouteButton;