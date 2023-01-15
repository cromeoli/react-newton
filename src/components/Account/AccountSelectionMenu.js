import React from "react";
import "../../css/style.css"

function AccountSelectionMenu(props){
    return (
        <section className="accountMenu">
            <a href="#" id="profile" className="accountMenuButton">Profile</a>
            <a href="#" id="security" className="accountMenuButton">Security</a>
            <a href="#" id="payment" className="accountMenuButton">Payment Methods</a>
            <a href="#" id="settings" className="accountMenuButton">Settings</a>
        </section>
    );
}

export default AccountSelectionMenu;