import React, {useState} from "react";
import "../css/style.css"
import appleLogo from "../img/apple.svg"
import googleLogo from "../img/google.png"

function RegisterOverlay(props){
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const [success, setSuccess] = useState('');

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
                if (value.length < 3) {
                    console.log(username)
                    setUsernameError('Usuario debe contener mas de 3 caracteres');
                } else {
                    setUsernameError('');
                }
                break;
            case 'password':
                if (value.length < 6) {
                    console.log(password)
                    setPasswordError('La contraseña debe tener un mínimo de caracteres');
                } else {
                    setPasswordError('');
                }
                break;
            case 'confirmPassword':
                if (password !== confirmPassword) {
                    console.log("Contraseñas:")
                    console.log(confirmPassword)
                    setConfirmPasswordError('Las contraseñas no coinciden');
                } else {
                    setConfirmPasswordError('');
                }
                break;
            default:
                break;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!emailError && !usernameError && !passwordError && !confirmPasswordError) {
            localStorage.setItem('email', email);
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            localStorage.setItem('logged', "true")

            setSuccess('Registrado con éxito')
            setTimeout(() => {
                props.closeRegister()
            }, 600);

        }
    };

    return (
        <div className={`registerOverlay ${props.menuState ? "open" : "closed"}`}>
            <div className="continueWithButtons">
                <a href="#" className="continueButton">
                    <img src={appleLogo} className="continueImg"/>
                        Register with Apple
                </a>
                <a href="#" className="continueButton">
                    <img src={googleLogo} className="continueImg"/>
                        Register with Google
                </a>
            </div>

            <form className="registerForm" onSubmit={handleSubmit}>
                <input className={`formInputBox ${emailError ? "formInputError" : ""}`}
                       placeholder="Register email"
                       name="email"
                       value={email}
                       onChange={(event) => setEmail(event.target.value)}
                       onBlur={handleBlur}
                       required
                />
                <input className={`formInputBox ${usernameError ? "formInputError" : ""}`}
                       placeholder="Username"
                       name="username"
                       value={username}
                       onChange={(event) => setUsername(event.target.value)}
                       onBlur={handleBlur}
                       required
                />
                <input className={`formInputBox ${passwordError ? "formInputError" : ""}`}
                       type="password"
                       placeholder="Password"
                       name="password"
                       value={password}
                       onChange={(event) => setPassword(event.target.value)}
                       onBlur={handleBlur}
                       required
                />
                <input className={`formInputBox ${confirmPasswordError ? "formInputError" : ""}`}
                       type="password"
                       placeholder="Confirm password"
                       name="confirmPassword"
                       value={confirmPassword}
                       onChange={(event) => setConfirmPassword(event.target.value)}
                       onBlur={handleBlur}
                       required
                />

                <button id="formSignUp"
                   className="registerSignUpButton"
                >
                    Sign up
                </button>

                <p className="registerSuccess">
                    {success}
                </p>

                <p className="registerErrorText">
                    {emailError}
                </p>
                <p className="registerErrorText">
                    {usernameError}
                </p>
                <p className="registerErrorText">
                    {passwordError}
                </p>
                <p className="registerErrorText">
                    {confirmPasswordError}
                </p>
            </form>
        </div>
    );
}

export default RegisterOverlay;