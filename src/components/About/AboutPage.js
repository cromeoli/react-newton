import React from "react";
import "../../css/style.css"
import AboutText from "./AboutText";
import AboutSocial from "./AboutSocial";
import Logo from "../Logo";
import MediumButton from "./MediumButton";
function AboutPage(props){
    return (
        <main className="aboutMain">
            <AboutText/>
            <AboutSocial/>
            <MediumButton ruta="/about">
                Contacto
            </MediumButton>
            <Logo/>
        </main>

    );
}

export default AboutPage;