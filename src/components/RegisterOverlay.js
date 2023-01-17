import React, {useState} from "react";
import "../css/style.css"
import appleLogo from "../img/apple.svg"
import googleLogo from "../img/google.png"

/**
 * RegisterOverlay
 *
 * Componente de React que se encarga de la funcionalidad de registro en la aplicación.
 *
 * @param {object} props - Props pasadas al componente.
 * @param {function} props.closeRegister - Función que cierra el overlay de registro.
 * @param {string} props.menuState - Estado actual del menú de la aplicación.
 *
 * @returns {JSX} - JSX del componente.
 */

function RegisterOverlay(props){
    /**
     * State: email
     *
     * Contiene el valor del email ingresado en el input correspondiente.
     *
     * @type {string}
     */
    const [email, setEmail] = useState('');
    /**
     * State: username
     *
     * Contiene el valor del username ingresado en el input correspondiente.
     *
     * @type {string}
     */
    const [username, setUsername] = useState('');
    /**
     * State: password
     *
     * Contiene el valor de la contraseña ingresada en el input correspondiente.
     *
     * @type {string}
     */
    const [password, setPassword] = useState('');

    /**
     * State: confirmPassword
     *
     * Contiene el valor de la confirmación de contraseña ingresada en el input correspondiente.
     *
     * @type {string}
     */
    const [confirmPassword, setConfirmPassword] = useState('');

    /**
     * State: emailError
     *
     * Contiene el valor del error de email.
     *
     * @type {string}
     */
    const [emailError, setEmailError] = useState('');
    /**
     * State: usernameError
     *
     * Contiene el valor del error de username.
     *
     * @type {string}
     */
    const [usernameError, setUsernameError] = useState('');
    /**
     * State: passwordError
     *
     * Contiene el valor del error de password.
     *
     * @type {string}
     */
    const [passwordError, setPasswordError] = useState('');
    /**
     * State: confirmPasswordError
     *
     * Contiene el valor del error de confirmPassword.
     *
     * @type {string}
     */

    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    /**
     * State: success
     *
     * Contiene el valor del mensaje de éxito de registro.
     *
     * @type {string}
     */

    const [success, setSuccess] = useState('');
    /**
     * handleBlur
     *
     * Función que maneja el evento blur de los inputs del formulario de registro.
     *
     * @param {Event} event - Evento blur del input.
     */
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

    /**
     * handleSubmit
     *
     * Función que maneja el evento submit del formulario de registro.
     *
     * @param {Event} event - Evento submit del formulario.
     */

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
                       type="email"
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