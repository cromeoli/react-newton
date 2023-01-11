import React, {useState} from "react";
import burger from "../img/Burger.svg"
import "../css/style.css"
import CalcBar from "./CalcBar";
import Keyboard from "./Keyboard";

function ResultArea(props){
    return (
        <>
            <CalcBar/>
            <Keyboard/>
        </>
    );
}

export default ResultArea;