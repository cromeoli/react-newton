import React, {useState} from "react";
import "../../css/style.css"

function ContactForm(props){
    const possibleMessages = ["Your message", "Any Second thoughts?", "But...Why?", "Feel free... really."]

    const [index, setIndex] = useState(0);

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [textArea, setTextArea] = useState('');

    const [emailError, setEmailError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [textAreaError, setTextAreaError] = useState('');

    const [success, setSuccess] = useState('');

    function handleOnCut(){
        console.log("focused")
        console.log(possibleMessages[1])
        setIndex(Math.floor(Math.random() * 4))
    }

    const handleBlur = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'email':
                if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                    console.log(email)
                    setEmailError('Email no válido');
                } else {
                    setEmailError('');
                }
                break;
            case 'username':
                if (!/^[a-zA-Z0-9_]{3,15}$/.test(value)) {
                    console.log(username)
                    setUsernameError('Usuario debe contener de 3 a 15 caracteres y solo puede incluir "_"');
                } else {
                    setUsernameError('');
                }
                break;
            case 'textarea':
                if (value.length > 200) {
                    setTextAreaError('El mensaje es demasiado largo...');
                } else {
                    setTextAreaError('');
                }
                break;

            default:
                break;
        }
    };

    function sendMessage(){
        if (!usernameError && !emailError && !textAreaError) {
            localStorage.setItem('contact', textArea);

            setSuccess('Mensaje enviado')
            setTimeout(() => {
                setSuccess('')
            }, 1000);
        }

    }


    return (
        <div className="mainFrame contactPage">
            <h1 className="contactFormTitle">
                Feel free to contact us
            </h1>
            <form className="contactForm">
                <input className="formInputBox contactInput"
                       placeholder="Nickname"
                       defaultValue={localStorage.getItem('username')}
                       name="username"
                       onBlur={handleBlur}
                       onChange={(event) => setUsername(event.target.value)}
                />
                <input className="formInputBox contactInput"
                       placeholder="Email"
                       defaultValue={localStorage.getItem('email')}
                       name="email"
                       onBlur={handleBlur}
                       onChange={(event) => setEmail(event.target.value)}
                />

                <textarea className={`contactTextArea resetTextArea `}
                          placeholder={possibleMessages[index]}
                          name="textarea"
                          onFocus={handleOnCut}
                          onBlur={handleBlur}
                          onChange={(event) => setTextArea(event.target.value)}
                />
                <a className="donateButton contactButton"
                   onClick={sendMessage}
                >
                    Send
                </a>
            </form>

            <p className="registerSuccess">{success}</p>
            <p className="registerErrorText">{usernameError}</p>
            <p className="registerErrorText">{emailError}</p>
            <p className="registerErrorText">{textAreaError}</p>
        </div>
    );
}

export default ContactForm;