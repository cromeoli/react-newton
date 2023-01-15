import React from "react";
import "../../css/style.css"
import paypal from "../../img/paypal.svg"


function AccountPayment(props){
    return (
        <section className="paymentsArea">
            <h1 className="profileTitle">Payments</h1>

            <form className="userDataForm">
                <label className="userDataLabel">
                    <p className="miniFormTitle">Connect with Paypal</p>
                    <a href="#" className="continueButton continuePaypal">
                        <img src={paypal}/>
                    </a>
                </label>

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

                <button className="orangeRoundedButton">
                    Check card
                </button>
            </form>

        </section>
    );
}

export default AccountPayment;