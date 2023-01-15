import React, {useState} from "react";
import burger from "../img/Burger.svg"
import "../css/style.css"
import GuestOverlay from "./GuestOverlay";
import {useLocation} from "react-router-dom";
import LoginOverlay from "./LoginOverlay";
import RegisterOverlay from "./RegisterOverlay";
import HomeOverlay from "./HomeOverlay";

function Navbar(props){
    //Estado con bool en false init
    const [guestMenu, setGuestMenu] = useState(false)
    const [loginMenu, setLoginMenu] = useState(false)
    const [registerMenu, setRegisterMenu] = useState(false)
    const [homeMenu, setHomeMenu] = useState(false)

    //funcion onclick abrirMenu para cambiar el estado !menu
    function toggleGuestMenu(){
        if(!(loginMenu || registerMenu)){
            setGuestMenu(!guestMenu)
        }
    }
    
    function toggleLoginMenu(){
        setLoginMenu(!loginMenu)
    }

    function toggleRegisterMenu(){
        setRegisterMenu(!registerMenu)
    }

    function toggleHomeMenu(){
        setHomeMenu(true)
        let homeOverlay = document.querySelector('.homeOverlay')
        homeOverlay.style.display = "flex"
    }

    function closeAll(){
        let homeOverlay = document.querySelector('.homeOverlay')

        setGuestMenu(false)
        setLoginMenu(false)
        setRegisterMenu(false)
        setHomeMenu(false)
        homeOverlay.style.display = "none"
    }

    let path = useLocation()


    return (
        <header>
            <nav className="navbar lightNavbar sticky">
                {/*Meter variable nada mas entrar que sea logueado false.
                Si logueado -> abre home
                else abre guest

                Para poder simular login
                */}
                <a onClick={localStorage.getItem('email') ? toggleHomeMenu : toggleGuestMenu}
                   id="burger"
                   className="burger"
                >
                    <img src={burger} className="burgerIcon"/>
                </a>
                <a href="/"
                   className={`returnToNewton ${path.pathname === "/" ? "ocultar" : ""}`}>
                    newton
                </a>
            </nav>

            <div onClick={closeAll}
                 className={`overlayCloseArea ${guestMenu || loginMenu || registerMenu || homeMenu ? "openOverlayCloseArea" : ""}`}>

            </div>

            <GuestOverlay menuState={guestMenu}
                          closeGuestMenu={toggleGuestMenu}
                          openLoginMenu={toggleLoginMenu}
                          openRegisterMenu={toggleRegisterMenu}
            />
            <LoginOverlay menuState={loginMenu} closeMenu={toggleLoginMenu}/>
            <RegisterOverlay menuState={registerMenu} closeMenu={toggleLoginMenu}/>
            <HomeOverlay menuState={homeMenu} closeMenu={toggleHomeMenu}/>

        </header>
    );
}

export default Navbar;