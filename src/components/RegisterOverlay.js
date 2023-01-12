import React from "react";
import "../css/style.css"
import appleLogo from "../img/apple.svg"
import googleLogo from "../img/google.png"

function RegisterOverlay(props){
    return (
        <div className={`registerOverlay ${props.menuState ? "open" : "closed"}`}>
            <div className="continueWithButtons">
                <a href="#" className="continueButton">
                    <img src={appleLogo} className="continueImg"/>
                        Register with Apple
                </a>
                <a href="#" className="continueButton">
                    <img src={googleLogo} className="continueImg"/>
                        Register with Google
                </a>
            </div>

            <form className="registerForm">
                <input className="formInputBox" placeholder="Register email"/>
                <input className="formInputBox" placeholder="Username"/>
                <input className="formInputBox" type="password" placeholder="Password"/>
                <input className="formInputBox" type="password" placeholder="Confirm password"/>

                <a href="#" id="formSignUp" className="registerSignUpButton">
                    Sign up
                </a>
            </form>
        </div>
    );
}

export default RegisterOverlay;