import React from "react";
import "../css/style.css"
import avatar from "../img/Avatar.png"
import {Link} from "react-router-dom"


/**
 * HomeOverlay
 *
 * Componente que renderiza el overlay de la pantalla principal
 * Permite al usuario cerrar sesión y navegar a otras secciones de la aplicación
 *
 * @param {Object} props - Props pasadas al componente.
 */
function HomeOverlay(props){

    /**
     * logOut
     *
     * Funcion que maneja el cierre de sesión
     * establece el estado de sesión en el almacenamiento local como "false"
     */
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