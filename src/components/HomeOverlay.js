import React from "react";
import "../css/style.css"
import avatar from "../img/Avatar.png"
import {Link} from "react-router-dom"

function HomeOverlay(props){

    function logOut(){
        localStorage.setItem('logged', "false")
        props.closeHome()

    }

    const openHomeOverlay = () => {
        let homeOverlay = document.querySelector('.homeOverlay')
        homeOverlay.style.display = "flex"
    }

    return (
        <div className={`homeOverlay ${props.menuState ? "open" : ""}`}>
            <Link to="/"
               onClick={logOut}
               className="homeOverlayLogOut">
                Log out
            </Link>
            <img src={avatar} className="avatar"/>

            <a href="/account" className="overlayButton1">My account</a>
            <a href="/donate" className="overlayButton2">Donate</a>
            <a href="/about" className="overlayButton3">About</a>
        </div>
    );
}

export default HomeOverlay;