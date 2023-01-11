import React, {useState} from "react";
import burger from "../img/Burger.svg"
import "../css/style.css"

function GuestOverlay(props){
    return (
        <div className={`guestOverlay ${props.menu ? "openGuestOverlay" : ""}`}>
            <a href="#" id="signUpButton" className="signUpButton">Sign Up</a>
            <a href="#" id="logInButton" className="logInButton">Log In</a>
        </div>
    );
}

export default GuestOverlay;