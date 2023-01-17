import React, {useState} from "react";
import "../../css/style.css"
import DonateTextBlock from "./DonateTextBlock";
import DonateButtonsBlock from "./DonateButtonsBlock";

function DonatePage(props){

    const [cardMenu, setCardMenu] = useState(false);
    const [bizumMenu, setBizumMenu] = useState(false);


    function openCreditCard(){
        if(!bizumMenu){ setCardMenu(!cardMenu); }
    }

    function openBizumMenu(){
        if(!cardMenu){ setBizumMenu(!bizumMenu); }
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