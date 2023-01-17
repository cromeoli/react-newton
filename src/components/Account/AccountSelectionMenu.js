import React from "react";
import "../../css/style.css"

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