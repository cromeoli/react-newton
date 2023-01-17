import React from "react";
import "../../css/style.css"
import ContactForm from "./ContactForm";
import Logo from "../Logo";


/**
 * ContactPage - Componente principal que renderiza los componentes para
 * construir la sección "contact".
 *
 * @returns {JSX.Element} El elemento JSX que representa el componente
 */
function ContactPage(props){
    return (
        <div className="mainFrame">
            <ContactForm/>
            <Logo/>
        </div>

    );
}

export default ContactPage;