import React, {useState} from "react";
import "../../css/style.css"
import AccountResponsiveNavbar from "./AccountResponsiveNavbar";
import AccountProfile from "./AccountProfile";
import AccountSecurity from "./AccountSecurity";
import AccountPayment from "./AccountPayment";
import AccountSettings from "./AccountSettings";
import AccountSelectionMenu from "./AccountSelectionMenu";

function AccountPage(props){
    const [profileMenu, setProfileMenu] = useState(true);
    const [securityMenu, setSecurityMenu] = useState(false);
    const [paymentMenu, setPaymentMenu] = useState(false);
    const [settingsMenu, setSettingsMenu] = useState(false);

    const menuStates = {"profile":profileMenu,
                        "security": securityMenu,
                        "payments": paymentMenu,
                        "settings": settingsMenu
                        }

    function openProfile(){
        //Abro perfil
        setProfileMenu(true);

        //Ciero todos los demas
        setSettingsMenu(false);
        setSecurityMenu(false);
        setPaymentMenu(false);
    }
    function openSecurity(){
        //Abro perfil
        setSecurityMenu(true);

        //Ciero todos los demas
        setProfileMenu(false);
        setSettingsMenu(false);
        setPaymentMenu(false);
    }
    function openPayment(){
        //Abro payment
        setPaymentMenu(true);

        //Ciero todos los demas
        setProfileMenu(false);
        setSettingsMenu(false);
        setSecurityMenu(false);

    }
    function openSettings(){
        //Abro settings
        setSettingsMenu(true);

        //Ciero todos los demas
        setProfileMenu(false);
        setSecurityMenu(false);
        setPaymentMenu(false);

    }

    const menuFunctions = {"openProfile":openProfile,
                            "openSecurity": openSecurity,
                            "openPayment": openPayment,
                            "openSettings": openSettings
                        }

    return (
        <main className="accountMain">
            <AccountResponsiveNavbar
                menuFunctions={menuFunctions}
            />
            <div className="board">
                <AccountSelectionMenu
                    menuFunctions={menuFunctions}
                    menuStatus={menuStates}
                />

                <AccountProfile profileStatus={profileMenu}/>
                <AccountSecurity securityStatus={securityMenu}/>
                <AccountPayment paymentStatus={paymentMenu}/>
                <AccountSettings settingsStatus={settingsMenu}/>
            </div>
        </main>
    );
}

export default AccountPage;