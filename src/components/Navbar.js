import React, {useState} from "react";
import burger from "../img/Burger.svg"
import "../css/style.css"
import GuestOverlay from "./GuestOverlay";
import {Link, useLocation} from "react-router-dom";
import LoginOverlay from "./LoginOverlay";
import RegisterOverlay from "./RegisterOverlay";
import HomeOverlay from "./HomeOverlay";


/**
 * Navbar
 *
 * @component
 *
 * Componente que renderiza la barra de navegación superior de la aplicación.
 *
 * @param {Object} props - Props pasadas al componente.
 * @returns {JSX.Element} El elemento JSX que representa el componente
 */
function Navbar(props){

    /**
     * State: email
     *
     * Contiene el valor del email ingresado en el input correspondiente.
     *
     * @type {boolean}
     */
    const [guestMenu, setGuestMenu] = useState(false)

    /**
     * State: loginMenu
     *
     * Contiene el estado del menu, si está abierto o no
     *
     * @type {boolean}
     */
    const [loginMenu, setLoginMenu] = useState(false)

    /**
     * State: registerMenu
     *
     * Contiene el estado del menu, si está abierto o no
     *
     * @type {boolean}
     */
    const [registerMenu, setRegisterMenu] = useState(false)

    /**
     * State: homeMenu
     *
     * Contiene el estado del menu, si está abierto o no
     *
     * @type {boolean}
     */
    const [homeMenu, setHomeMenu] = useState(false)

    /**
     * toggleGuestMenu
     *
     * Función que maneja el evento click del botón de menú de invitado.
     * Cambia el estado del menú de invitado a su opuesto.
     */
    function toggleGuestMenu(){
        if(!(loginMenu || registerMenu)){
            setGuestMenu(!guestMenu)
        }
    }

    /**
     * toggleLoginMenu
     *
     * Función que maneja el evento click del botón de menú de inicio de sesión.
     * Cambia el estado del menú de inicio de sesión a su opuesto.
     */
    function toggleLoginMenu(){
        setLoginMenu(!loginMenu)
    }

    /**
     * toggleRegisterMenu
     *
     * Función que maneja el evento click del botón de menú de registro.
     * Cambia el estado del menú de registro a su opuesto.
     */
    function toggleRegisterMenu(){
        setRegisterMenu(!registerMenu)
    }

    /**
     * toggleHomeMenu
     *
     * Función que maneja el evento click del botón de menú de inicio.
     * Cambia el estado del menú de inicio a verdadero.
     */
    function toggleHomeMenu(){
        setHomeMenu(true)
        let homeOverlay = document.querySelector('.homeOverlay')
        homeOverlay.style.display = "flex"
    }

    /**
     * closeAll
     *
     * Función que maneja el evento click del área de cierre de menús.
     * Cierra todos los menús y oculta el overlay de inicio.
     */
    function closeAll(){
        let homeOverlay = document.querySelector('.homeOverlay')

        setGuestMenu(false)
        setLoginMenu(false)
        setRegisterMenu(false)
        setHomeMenu(false)
        homeOverlay.style.display = "none"
    }

    /*
    Defino donde estoy para que solo se muestre el logo de newton para regresar
     a inicio desde páginas distintas al inicio
     */
    let path = useLocation()


    return (
        <header>
            <nav className="navbar lightNavbar sticky">
                {/*Meter variable nada mas entrar que sea logueado false.
                Si logueado -> abre home
                else abre guest

                Para poder simular login
                */}
                <Link to="#" onClick={localStorage.getItem('logged') === "true" ? toggleHomeMenu : toggleGuestMenu}
                   onDoubleClick={closeAll}
                   id="burger"
                   className="burger"
                >
                    <img src={burger} className="burgerIcon"/>
                </Link>
                <Link to="/"
                   className={`returnToNewton ${path.pathname === "/" ? "ocultar" : ""}`}>
                    newton
                </Link>
            </nav>

            <div onClick={closeAll}
                 className={`overlayCloseArea ${guestMenu || loginMenu || registerMenu || homeMenu ? "openOverlayCloseArea" : ""}`}>

            </div>

            <GuestOverlay menuState={guestMenu}
                          closeGuestMenu={toggleGuestMenu}
                          openLoginMenu={toggleLoginMenu}
                          openRegisterMenu={toggleRegisterMenu}
            />
            <LoginOverlay menuState={loginMenu} closeMenu={toggleLoginMenu} closeLogin={closeAll}/>
            <RegisterOverlay menuState={registerMenu}
                             closeMenu={toggleLoginMenu}
                             closeRegister={closeAll}/>
            <HomeOverlay menuState={homeMenu} closeMenu={toggleHomeMenu} closeHome={closeAll}/>

        </header>
    );
}

export default Navbar;