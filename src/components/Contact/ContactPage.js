import React from "react";
import "../../css/style.css"
import ContactForm from "./ContactForm";
import Logo from "../Logo";

function ContactPage(props){
    return (
        <div className="mainFrame">
            <ContactForm/>
            <Logo/>
        </div>

    );
}

export default ContactPage;