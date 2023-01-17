import React from "react";
import "../../css/style.css"



/**
 * AccountSelectionMenu - Componente que renderiza un menú para navegar entre
 * las diferentes secciones de account
 *
 * @component
 * @param {props} props - Las propiedades del componente
 * @returns {JSX.Element} El elemento JSX que representa el componente
 */
function AccountSelectionMenu(props){
    console.log(props.menuStatus.profile)

    return (
        <section className="accountMenu">
            <a onClick={props.menuFunctions.openProfile}
               className={`accountMenuButton ${props.menuStatus.profile ? "hasOpenedMenu" : ""}`}>
                Profile
            </a>
            <a onClick={props.menuFunctions.openSecurity}
               className={`accountMenuButton ${props.menuStatus.security ? "hasOpenedMenu" : ""}`}>
                Security
            </a>
            <a onClick={props.menuFunctions.openPayment}
               className={`accountMenuButton ${props.menuStatus.payments ? "hasOpenedMenu" : ""}`}>
                Payment Methods
            </a>
            <a onClick={props.menuFunctions.openSettings}
               className={`accountMenuButton ${props.menuStatus.settings ? "hasOpenedMenu" : ""}`}>
                Settings
            </a>
        </section>
    );
}

export default AccountSelectionMenu;