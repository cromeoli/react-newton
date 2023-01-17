import React, {useState} from "react";
import "../../css/style.css"
import DonateTextBlock from "./DonateTextBlock";
import DonateButtonsBlock from "./DonateButtonsBlock";


/**
 * DonatePage - Componente principal que agrupa todos los componentes secundarios
 * de la sección donate
 *
 * @component
 * @returns {JSX.Element} El elemento JSX que representa el componente
 */
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