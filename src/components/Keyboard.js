import React from "react";
import Button from "./Button";
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

            <Button write={fun} operator={"x(over)y"}>
                <img src={fraction} className="customIcon"/>
            </Button>
             <Button write={fun} operator={"sin"}>sin</Button>

        </>
    );
}

export default Keyboard;