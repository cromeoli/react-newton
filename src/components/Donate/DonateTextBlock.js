import React from "react";
import "../../css/style.css"
import DonateCardOverlay from "./DonateCardOverlay";
import Logo from "../Logo";
import DonateBizumOverlay from "./DonateBizumOverlay";


/**
 * DonateTextBlock - Componente para construir sección donate donde irá
 * el texto principal de la página
 *
 * @component
 * @returns {JSX.Element} El elemento JSX que representa el componente
 */
function DonateTextBlock(props){
    return (
        <div className="contentBoard">
            <p className="commonText">
                The newton API is an open source project available to the public, so it does not generate any income.
            </p>
            <p className="commonText">
                You can support our work here.
            </p>
            <section className="alignNewtonLogo">
                <Logo/>
            </section>

            <DonateCardOverlay cardMenuState={props.cardMenuState}/>
            <DonateBizumOverlay bizumMenuState={props.bizumMenuState}/>
        </div>
    );
}

export default DonateTextBlock;