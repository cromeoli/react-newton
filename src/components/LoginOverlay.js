import React from "react";
import "../css/style.css"
import appleLogo from "../img/apple.svg"
import googleLogo from "../img/google.png"

function LoginOverlay(props){
    function logIn(){
        let auth = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        if( (localStorage.getItem('username') === auth ||
                localStorage.getItem('email') === auth) &&
            localStorage.getItem('password') === password){

            localStorage.setItem('logged', "true")
            props.closeLogin()
        }
    }

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
                <input id="username" className="formInputBox" placeholder="Email or username"/>
                <input id="password" className="formInputBox" type="password" placeholder="Password"/>

                <a onClick={logIn} href="#" id="formLogIn" className="registerSignUpButton">
                    Log in
                </a>
            </form>
        </div>
    );
}

export default LoginOverlay;