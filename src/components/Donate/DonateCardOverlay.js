import React from "react";
import "../../css/style.css"

function DonateCardOverlay(props){
    return (
        <div className="cardOverlay">
            <form className="userDataForm">
                <label className="userDataLabel">
                    Credit card number
                    <input className="formInputBox" placeholder="1234 1234 1234 1234"/>
                </label>
                <label className="userDataLabel">
                    Caducity
                    <input className="formInputBox" placeholder="MM/YY"/>
                </label>
                <label className="userDataLabel">
                    CVC
                    <input className="formInputBox" placeholder="000"/>
                </label>
                <label className="userDataLabel">
                    Country
                    <input className="formInputBox" placeholder="Enter your country"/>
                </label>
                <button id="checkButton" className="orangeRoundedButton">
                    Check card
                </button>
            </form>
        </div>
    );
}

export default DonateCardOverlay;