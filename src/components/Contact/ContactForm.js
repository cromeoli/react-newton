import React from "react";
import "../../css/style.css"

function ContactForm(props){
    return (
        <div className="mainFrame contactPage">
            <h1 className="contactFormTitle">
                Feel free to contact us
            </h1>
            <form className="contactForm">
                <input className="formInputBox contactInput" placeholder="Nickname"/>
                <input className="formInputBox contactInput" placeholder="Email"/>

                <textarea className="contactTextArea resetTextArea" placeholder="Your message"/>
                <a className="donateButton contactButton">
                    Send
                </a>
            </form>
        </div>
    );
}

export default ContactForm;