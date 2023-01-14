import React from "react";
import "../../css/style.css"
import DonateTextBlock from "./DonateTextBlock";
import DonateCardOverlay from "./DonateCardOverlay";
import DonateButtonsBlock from "./DonateButtonsBlock";

function DonatePage(props){
    return (
        <main className="donateMain">
            <DonateTextBlock/>
            <DonateButtonsBlock/>
        </main>
    );
}

export default DonatePage;