import React from "react";
import "../../css/style.css"
import paypal from "../../img/paypal.svg"
import patreon from "../../img/patreon.svg"


function AccountPayment(props){
    return (
        <section className={`paymentsArea ${props.paymentStatus ? "open" : "closed"}`}>
            <h1 className="profileTitle">Payments</h1>

            <form className="userDataForm">
                <label className="userDataLabel">
                    <p className="miniFormTitle">Connect with Paypal</p>
                    <a className="continueButton continuePaypal">
                        <img src={paypal}/>
                    </a>
                    <p className="miniFormTitle">Connect with Patreon</p>
                    <a className="continueButton continuePaypal">
                        <img src={patreon}/>
                    </a>
                </label>


            </form>

        </section>
    );
}

export default AccountPayment;