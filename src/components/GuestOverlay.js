import React, {useState} from "react";
import burger from "../img/Burger.svg"
import "../css/style.css"

function GuestOverlay(props){
    return (
        <div className={`guestOverlay ${props.menuState ? "open" : ""}`}>
            <a onClick={() => {props.closeGuestMenu(); props.openRegisterMenu()}}
               href="#"
               id="signUpButton"
               className="signUpButton">
                Sign Up
            </a>
            <a onClick={() => {props.closeGuestMenu(); props.openLoginMenu()}}
               href="#"
               id="logInButton"
               className="logInButton">
                Log In
            </a>
        </div>
    );
}

export default GuestOverlay;