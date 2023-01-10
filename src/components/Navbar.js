import React, {useState} from "react";
import burger from "../img/Burger.svg"
import "../css/style.css"

function Navbar(props){
    return (

        <header>
            <nav className="navbar lightNavbar sticky">
                <a href="#" id="burger" className="burger">
                    <img src={burger} className="burgerIcon"/>
                </a>
            </nav>
        </header>
    );
}

export default Navbar;