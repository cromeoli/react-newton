import React from "react";
import "../../css/style.css"
import profile from "../../img/profileIcon.svg"
import securityIcon from "../../img/securityIcon.svg"
import billing from "../../img/billingIcon.svg"
import settings from "../../img/settingsIcon.svg"


/**
 * AccountResponsiveNavbar - Navbar que aparece cuando la aplicación toma un
 * tamaño móvil. Funciona igual que el menú de selección de cuenta.
 *
 * @component
 * @param {props} props - Las propiedades del componente
 * @returns {JSX.Element} El elemento JSX que representa el componente
 */
function AccountResponsiveNavbar(props){
    return (
        <nav className="navbarAccount sticky">
            <a id="accountIcon"
               href="#"
               className="burger"
               onClick={props.menuFunctions.openProfile}
            >
                <img src={profile} className="iconSVG"/>
            </a>
            <a id="securityIcon"
               href="#"
               className="burger"
               onClick={props.menuFunctions.openSecurity}
            >
                <img src={securityIcon} className="iconSVG"/>
            </a>
            <a id="billingIcon"
               href="#"
               className="burger"
               onClick={props.menuFunctions.openPayment}
            >
                <img src={billing} className="iconSVG"/>
            </a>
            <a id="settingsIcon"
               href="#"
               className="burger"
               onClick={props.menuFunctions.openSettings}
            >
                <img src={settings} className="iconSVG"/>
            </a>
        </nav>
    );
}

export default AccountResponsiveNavbar;