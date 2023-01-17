import React, {useState} from "react";
import "../../css/style.css"

function ContactForm(props){
    const possibleMessages = ["Your message", "Any Second thoughts?", "But...Why?", "Feel free... really."]

    const [index, setIndex] = useState(0);

    function handleOnCut(){
        console.log("focused")
        console.log(possibleMessages[1])
        setIndex(Math.floor(Math.random() * 4))
    }


    return (
        <div className="mainFrame contactPage">
            <h1 className="contactFormTitle">
                Feel free to contact us
            </h1>
            <form className="contactForm">
                <input className="formInputBox contactInput"
                       placeholder="Nickname"
                />
                <input className="formInputBox contactInput"
                       placeholder="Email"
                />

                <textarea className={`contactTextArea resetTextArea `}
                          placeholder={possibleMessages[index]}
                          onFocus={handleOnCut}
                />
                <a className="donateButton contactButton">
                    Send
                </a>
            </form>
        </div>
    );
}

export default ContactForm;