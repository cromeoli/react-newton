import React from "react";
import "../../css/style.css"

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