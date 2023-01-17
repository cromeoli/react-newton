import React, {useState} from "react";
import "../../css/style.css"
import creditCard from "../../img/creditcard.svg"
import divider from "../../img/divider.svg"
import paypal from "../../img/paypal.svg"
import patreon from "../../img/patreon.svg"
import bizum from "../../img/bizum.svg"

function DonateButtonsBlock(props){


    return (
        <div className="donationsBoard">
            <h1 className="commonTitle">Support Newton</h1>

            <a href="#"
               className="donateButton
               cardButton"
               onClick={props.openCreditCard}
            >
                <img src={creditCard} className="cardIcon"/>
                    <p className="cardText">Credit card</p>
            </a>

            <img src={divider} className="divider"/>

            <a href="https://www.paypal.com/es/home" className="donateButton">
                <img src={paypal} className="paypalIcon"/>
            </a>
            <a href="https://www.patreon.com/" className="donateButton">
                <img src={patreon} className="patreonIcon"/>
            </a>
            <a onClick={props.openBizumMenu} className="donateButton">
                <img src={bizum} className="bizumIcon"/>
            </a>

        </div>
    );
}

export default DonateButtonsBlock;