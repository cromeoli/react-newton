import React, {useState} from "react";
import burger from "../img/Burger.svg"
import "../css/style.css"
import GuestOverlay from "./GuestOverlay";
import {useLocation} from "react-router-dom";
import LoginOverlay from "./LoginOverlay";
import RegisterOverlay from "./RegisterOverlay";

function Navbar(props){
    //Estado con bool en false init
    const [guestMenu, setGuestMenu] = useState(false)
    const [loginMenu, setLoginMenu] = useState(false)
    const [registerMenu, setRegisterMenu] = useState(false)

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

    }

    function checkSession(){
        let registrado = ""

        if(registrado){
            toggleHomeMenu()
        }else{
            toggleGuestMenu()
        }
    }

    function closeAll(){
        setGuestMenu(false)
        setLoginMenu(false)
        setRegisterMenu(false)
    }



    let path = useLocation()


    return (
        <header>
            <nav className="navbar lightNavbar sticky">
                <a onClick={toggleGuestMenu} id="burger" className="burger">
                    <img src={burger} className="burgerIcon"/>
                </a>
                <a href="/"
                   className={`returnToNewton ${path.pathname === "/" ? "ocultar" : ""}`}>
                    newton
                </a>
                <a href="/about" >
                    About
                </a>
            </nav>

            <div onClick={closeAll}
                 className={`overlayCloseArea ${guestMenu || loginMenu || registerMenu ? "openOverlayCloseArea" : ""}`}>

            </div>

            <GuestOverlay menuState={guestMenu}
                          closeGuestMenu={toggleGuestMenu}
                          openLoginMenu={toggleLoginMenu}
                          openRegisterMenu={toggleRegisterMenu}
            />
            <LoginOverlay menuState={loginMenu} closeMenu={toggleLoginMenu}/>
            <RegisterOverlay menuState={registerMenu} closeMenu={toggleLoginMenu}/>

        </header>
    );
}

export default Navbar;