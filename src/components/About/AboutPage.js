import React from "react";
import "../../css/style.css"
import AboutText from "./AboutText";
import AboutSocial from "./AboutSocial";
import Logo from "../Logo";
function AboutPage(props){
    return (
        <main className="aboutMain">
            <AboutText/>
            <AboutSocial/>
            <Logo/>
        </main>

    );
}

export default AboutPage;