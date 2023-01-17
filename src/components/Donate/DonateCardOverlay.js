import React, {useState} from "react";
import "../../css/style.css"

/**
 * DonateCardOverlay - Componente secundario que devuelve un overlay menu abierto
 * cuando se clica al boton "Credit Card"
 *
 * @component
 * @returns {JSX.Element} El elemento JSX que representa el componente
 */
function DonateCardOverlay(props){

    const [creditCard, setCreditCard] = useState('');
    const [caducity, setCaducity] = useState('');
    const [cvc, setCvc] = useState('');
    const [success, setSuccess] = useState('');

    const [creditCardError, setCreditCardError] = useState('');
    const [caducityError, setCaducityError] = useState('');
    const [cvcError, setCvcError] = useState('');

    const handleBlur = (event) => {
        const { name, value } = event.target;

        switch (name) {
            case 'creditcard':
                if (!/^\d{4} \d{4} \d{4} \d{4}$/.test(value)) {
                    setCreditCardError('La tarjeta debe ir en formato XXXX XXXX XXXX XXXX');
                } else {
                    setCreditCardError('');
                }
                break;
            case 'cvc':
                if (!/^\d{3}$/.test(value)) {
                    setCvcError('Codigo CVC inválido');
                } else {
                    setCvcError('');
                }
                break;
            case 'caducity':
                if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(value)) {
                    setCaducityError('Fecha de caducidad no válida');
                } else {
                    setCaducityError('');
                }
                break;

            default:
                break;
        }
    };

    function checkCard(){
        if (!caducityError && !creditCardError && !cvcError) {
            localStorage.setItem('creditcard', creditCard);


            setSuccess('Tarjeta válida')
            setTimeout(() => {
                setSuccess('')
            }, 1000);
        }

    }



    return (
        <div className={`cardOverlay ${props.cardMenuState ? "openOverlayDonations" : "closeOverlayDonations"}`}>
            <form className="userDataForm">
                <label className="userDataLabel">
                    Credit card number
                    <input className="formInputBox"
                           placeholder="1234 1234 1234 1234"
                           name="creditcard"
                           onBlur={handleBlur}
                           onChange={(event) => setCreditCard(event.target.value)}
                    />
                </label>
                <label className="userDataLabel">
                    Caducity
                    <input className="formInputBox"
                           placeholder="MM/YY"
                           name="caducity"
                           onBlur={handleBlur}
                           onChange={(event) => setCaducity(event.target.value)}
                    />
                </label>
                <label className="userDataLabel">
                    CVC
                    <input className="formInputBox"
                           placeholder="000"
                           type="number"
                           name="cvc"
                           onBlur={handleBlur}
                           onChange={(event) => setCvc(event.target.value)}
                    />
                </label>
                <a id="checkButton"
                        className="orangeRoundedButton"
                   onClick={checkCard}
                >
                    Check card
                </a>
                <p className="registerSuccess">{success}</p>
                <p className="registerErrorText">{creditCardError}</p>
                <p className="registerErrorText">{caducityError}</p>
                <p className="registerErrorText">{cvcError}</p>
            </form>
        </div>
    );
}

export default DonateCardOverlay;