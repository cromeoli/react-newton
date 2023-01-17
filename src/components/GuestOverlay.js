import React, {useState} from "react";
import burger from "../img/Burger.svg"
import "../css/style.css"


/**
 * GuestOverlay
 *
 * @component
 *
 * Componente que renderiza el overlay de menú de invitado
 * Permite al usuario abrir el menú de registro y de inicio de sesión
 *
 * @param {Object} props - Props pasadas al componente.
 * @returns {JSX.Element} El elemento JSX que representa el componente
 */
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