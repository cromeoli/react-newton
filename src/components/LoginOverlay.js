import React from "react";
import "../css/style.css"
import appleLogo from "../img/apple.svg"
import googleLogo from "../img/google.png"

function LoginOverlay(props){
    return (
        <div className={`loginOverlay ${props.menuState ? "open" : "closed"}`}>
            <div className="continueWithButtons">
                <a className="continueButton">
                    <img src={appleLogo} className="continueImg"/>
                        Continue with Apple
                </a>
                <a className="continueButton">
                    <img src={googleLogo} className="continueImg"/>
                        Continue with Google
                </a>
            </div>

            <form className="registerForm">
                <input className="formInputBox" placeholder="Username"/>
                <input className="formInputBox" type="password" placeholder="Password"/>

                <a onClick={props.closeMenu} href="#" id="formLogIn" className="registerSignUpButton">
                    Log in
                </a>
            </form>
        </div>
    );
}

export default LoginOverlay;