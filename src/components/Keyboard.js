import React from "react";
import KeyboardButton from "./MainPage/keyboardButton";
import "../css/style.css"
import fraction from "../img/fraction.svg"
import integral from "../img/integral.svg"
import calcArea from "../img/calcArea.svg"
import derivative from "../img/derivative.svg"
import absolute from "../img/absolute.svg"
import clear from "../img/clear.svg"

function Keyboard({fun}){
    return (
        <>

            <KeyboardButton write={fun} operator={"x(over)y"}>
                <img src={fraction} className="customIcon"/>
            </KeyboardButton>
             <KeyboardButton write={fun} operator={"sin"}>sin</KeyboardButton>

        </>
    );
}

export default Keyboard;