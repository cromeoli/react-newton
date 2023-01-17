import React from "react";
import "../css/style.css"
import avatar from "../img/Avatar.png"
import {Link} from "react-router-dom"

function HomeOverlay(props){

    function logOut(){
        localStorage.setItem('logged', "false")
        props.closeHome()

    }
    return (
        <div className={`homeOverlay ${props.menuState ? "open" : ""}`}>
            <Link to="/"
               onClick={logOut}
               className="homeOverlayLogOut">
                Log out
            </Link>
            <img src={avatar} className="avatar"/>

            <Link to="/account" className="overlayButton1">My account</Link>
            <Link to="/donate" className="overlayButton2">Donate</Link>
            <Link to="/about" className="overlayButton3">About</Link>
        </div>
    );
}

export default HomeOverlay;