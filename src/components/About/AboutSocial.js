import React from "react";
import "../../css/style.css"
import twitterIco from "../../img/Twitter.svg"
import instagramIco from "../../img/Instagram.svg"
import githubIco from "../../img/github.svg"


/**
 * AboutSocial - Componente secundario que añade un bloque con enlaces e
 * iconos a redes sociales varias
 *
 *
 * @component
 * @param {props} props - Las propiedades del componente
 * @returns {JSX.Element} El elemento JSX que representa el componente
 */
function AboutSocial(props){
    return (
        <>
            <p className="commonTitle aboutTitle">Social sites</p>

            <span className="accountSocial aboutSocial">
                <a href="https://twitter.com/" className="mediaIcon">
                    <img src={twitterIco}/>
                </a>
                <a href="https://www.instagram.com/" className="mediaIcon">
                    <img src={instagramIco}/>
                </a>
                <a href="https://github.com/cromeoli" className="mediaIcon">
                    <img src={githubIco}/>
                </a>
            </span>
        </>
    );
}

export default AboutSocial;