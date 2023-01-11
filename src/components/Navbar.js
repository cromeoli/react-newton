import React, {useState} from "react";
import burger from "../img/Burger.svg"
import "../css/style.css"
import GuestOverlay from "./GuestOverlay";

function Navbar(props){
    //Estado con bool en false init
    const [menu, setMenu] = useState(false)

    //funcion onclick abrirMenu para cambiar el estado !menu
    function openMenu(){
        setMenu(!menu)
    }


    return (
        <header>
            <nav className="navbar lightNavbar sticky">
                <a onClick={openMenu} id="burger" className="burger">
                    <img src={burger} className="burgerIcon"/>
                </a>
            </nav>

            <GuestOverlay menu={menu}/>

            <div className={`overlayCloseArea ${menu ? "openOverlayCloseArea" : ""}`}>

            </div>



        </header>
    );
}

export default Navbar;