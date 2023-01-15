import React from "react";
import "../../css/style.css"
import profile from "../../img/profileIcon.svg"
import securityIcon from "../../img/securityIcon.svg"
import billing from "../../img/billingIcon.svg"
import settings from "../../img/settingsIcon.svg"

function AccountResponsiveNavbar(props){
    return (
        <nav className="navbarAccount sticky">
            <a id="accountIcon" href="#" className="burger">
                <img src={profile} className="iconSVG"/>
            </a>
            <a id="securityIcon" href="#" className="burger">
                <img src={securityIcon} className="iconSVG"/>
            </a>
            <a id="billingIcon" href="#" className="burger">
                <img src={billing} className="iconSVG"/>
            </a>
            <a id="settingsIcon" href="#" className="burger">
                <img src={settings} className="iconSVG"/>
            </a>
        </nav>
    );
}

export default AccountResponsiveNavbar;