import React from "react";
import "../../css/style.css"
import AccountResponsiveNavbar from "./AccountResponsiveNavbar";
import AccountProfile from "./AccountProfile";
import AccountSecurity from "./AccountPayment";
import AccountPayment from "./AccountPayment";
import AccountSettings from "./AccountSettings";
import AccountSelectionMenu from "./AccountSelectionMenu";

function AccountPage(props){
    return (
        <main className="accountMain">
            <AccountResponsiveNavbar/>
            <div className="board">
                <AccountSelectionMenu/>

                <AccountProfile/>
                <AccountSecurity/>
                <AccountPayment/>
                <AccountSettings/>
            </div>
        </main>
    );
}

export default AccountPage;