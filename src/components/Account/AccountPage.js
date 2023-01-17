import React, {useState} from "react";
import "../../css/style.css"
import AccountResponsiveNavbar from "./AccountResponsiveNavbar";
import AccountProfile from "./AccountProfile";
import AccountSecurity from "./AccountSecurity";
import AccountPayment from "./AccountPayment";
import AccountSettings from "./AccountSettings";
import AccountSelectionMenu from "./AccountSelectionMenu";


/**
 * AccountPage - Componente principal que renderiza la sección cuenta, donde se puede ver y
 * modificar la información de perfil, seguridad, pagos y configuraciones de la cuenta
 *
 * @returns {JSX.Element} El elemento JSX que representa el componente
 * @param {props} props - Las propiedades del componente
 * @component
 */
function AccountPage(props){

    /**
     * @type {Boolean} profileMenu - Estado que indica si el menú de perfil está abierto o cerrado
     * @type {Function} setProfileMenu - Función para cambiar el estado
     */
    const [profileMenu, setProfileMenu] = useState(true);

    /**
     * @type {Boolean} securityMenu - Estado que indica si el menú de seguridad está abierto o cerrado
     * @type {Function} setSecurityMenu - Función para cambiar el estado
     */
    const [securityMenu, setSecurityMenu] = useState(false);

    /**
     * @type {Boolean} paymentMenu - Estado que indica si el menú de pagos está abierto o cerrado
     * @type {Function} setPaymentMenu - Función para cambiar el estado
     */
    const [paymentMenu, setPaymentMenu] = useState(false);

    /**
     * @type {Boolean} settingsMenu - Estado que indica si el menú de settings está abierto o cerrado
     * @type {Function} setSettingsMenu - Función para cambiar el estado
     */
    const [settingsMenu, setSettingsMenu] = useState(false);

    // Objeto para guardar los estados y poder pasarlos cómodamente por prop a los componentes
    const menuStates = {"profile":profileMenu,
                        "security": securityMenu,
                        "payments": paymentMenu,
                        "settings": settingsMenu
                        }

    /**
     * Función que abre el menú perfil y oculta las demás
     */
    function openProfile(){
        //Abro perfil
        setProfileMenu(true);

        //Ciero todos los demas
        setSettingsMenu(false);
        setSecurityMenu(false);
        setPaymentMenu(false);
    }
    /**
     * Función que abre el menú security y oculta las demás
     */
    function openSecurity(){
        //Abro security
        setSecurityMenu(true);

        //Ciero todos los demas
        setProfileMenu(false);
        setSettingsMenu(false);
        setPaymentMenu(false);
    }
    /**
     * Función que abre el menú pagos y oculta las demás
     */
    function openPayment(){
        //Abro payment
        setPaymentMenu(true);

        //Ciero todos los demas
        setProfileMenu(false);
        setSettingsMenu(false);
        setSecurityMenu(false);

    }

    /**
     * Función que abre el menú settings y oculta las demás
     */
    function openSettings(){
        //Abro settings
        setSettingsMenu(true);

        //Ciero todos los demas
        setProfileMenu(false);
        setSecurityMenu(false);
        setPaymentMenu(false);

    }

    // Objeto que guarda las funciones para abrir cada menú
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