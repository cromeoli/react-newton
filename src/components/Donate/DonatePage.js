import React, {useState} from "react";
import "../../css/style.css"
import DonateTextBlock from "./DonateTextBlock";
import DonateCardOverlay from "./DonateCardOverlay";
import DonateButtonsBlock from "./DonateButtonsBlock";
import DonateBizumOverlay from "./DonateBizumOverlay";

function DonatePage(props){

    const [cardMenu, setCardMenu] = useState(false);
    const [bizumMenu, setBizumMenu] = useState(false);


    function openCreditCard(){
        setCardMenu(!cardMenu)
    }
    function openBizumMenu(){
        setBizumMenu(!bizumMenu)
    }



    return (
        <main className="donateMain">
            <DonateTextBlock cardMenuState={cardMenu} bizumMenuState={bizumMenu}/>
            <DonateButtonsBlock openCreditCard={openCreditCard}
                                openBizumMenu={openBizumMenu}
            />

        </main>
    );
}

export default DonatePage;