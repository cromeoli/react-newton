import React from "react";
import "../../css/style.css"
import paypal from "../../img/paypal.svg"
import patreon from "../../img/patreon.svg"


/**
 * AccountPayment - Componente que renderiza
 *
 * @component
 * @property {string} path - La ruta a la que el botón enlaza
 * @property {React.ReactNode} children - El contenido del botón
 * @param {props} props - Las propiedades del componente
 * @returns {JSX.Element} El elemento JSX que representa el componente
 */
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