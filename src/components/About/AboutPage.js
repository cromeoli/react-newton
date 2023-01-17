import React from "react";
import "../../css/style.css"
import AboutText from "./AboutText";
import AboutSocial from "./AboutSocial";
import Logo from "../Logo";
import RouteButton from "./RouteButton";


/**
 * AboutPage - Componente principal que renderiza los componentes para
 * construir la sección "about".
 *
 *
 * @component
 * @param {props} props - Las propiedades del componente
 * @returns {JSX.Element} El elemento JSX que representa el componente
 */
function AboutPage(props){
    return (
        <main className="aboutMain">
            <AboutText/>
            <span className="routeSection">
            <RouteButton path="/contact">
                Contact
            </RouteButton>
            <RouteButton path="/docs/all">
                Docs
            </RouteButton>
            </span>
            <AboutSocial/>
            <Logo/>
        </main>

    );
}

export default AboutPage;