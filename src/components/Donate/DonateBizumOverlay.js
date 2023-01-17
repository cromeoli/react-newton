import React from "react";
import "../../css/style.css"

/**
 * DonateBizumOverlay - Componente que devuelve un overlay menu abierto
 * cuando se clica al boton "Bizum"
 *
 * @component
 * @returns {JSX.Element} El elemento JSX que representa el componente
 */
function DonateBizumOverlay(props){
    return (
        <div className={`bizumOverlay ${props.bizumMenuState ? "openOverlayDonations" : "closeOverlayDonations"}`}>
            <p className="bizumDonationText">
                Donations phone number
            </p>
            <p className="bizumMobileNumber">
                +1 123 123 123
            </p>
        </div>
    );
}

export default DonateBizumOverlay;