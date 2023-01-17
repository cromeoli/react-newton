import React, {useState} from "react";
import "../css/style.css"
import appleLogo from "../img/apple.svg"
import googleLogo from "../img/google.png"

/**
 * LoginOverlay
 *
 * Componente que renderiza el overlay de login.
 * Permite al usuario iniciar sesión en la aplicación.
 *
 * @param {Object} props - Props pasadas al componente.
 */
function LoginOverlay(props){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [success, setSuccess] = useState('');

    /**
     * handleBlur
     *
     * Funcion que valida el usuario y la contraseña
     *
     * @param {Object} event - evento del componente.
     */
    const handleBlur = (event) => {
        const { name, value } = event.target;
        switch (name) {
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
                    setPasswordError('Debes escribir algo en contraseña');
                } else {
                    setPasswordError('');
                }
                break;
            default:
                break;
        }
    };

    /**
     * logIn
     *
     * Funcion que maneja el inicio de sesión
     * valida si el usuario y la contraseña son correctos y
     * guarda el estado de sesión en el almacenamiento local
     */
    function logIn(){
        console.log("Login...")
        let auth = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        if(password !== localStorage.getItem('password')){
            setPasswordError("Contraseña incorrecta")
        }
        if(auth !== localStorage.getItem('email')
            && auth !== localStorage.getItem('username')){
            setUsernameError("Usuario o email incorrecto o inexistente")
        }

        if( (localStorage.getItem('username') === auth ||
                localStorage.getItem('email') === auth) &&
            localStorage.getItem('password') === password){

            localStorage.setItem('logged', "true")

            setSuccess('Logueado con éxito')
            setTimeout(() => {
                props.closeLogin()
                setSuccess('')
            }, 600);
        }
    }

    return (
        <div className={`loginOverlay ${props.menuState ? "open" : "closed"}`}>
            <div className="continueWithButtons">
                <a className="continueButton">
                    <img src={appleLogo} className="continueImg"/>
                        Continue with Apple
                </a>
                <a className="continueButton">
                    <img src={googleLogo} className="continueImg"/>
                        Continue with Google
                </a>
            </div>

            <form className="registerForm">
                <input name="username"
                       id="username"
                       className={`formInputBox ${usernameError ? "formInputError" : ""}`}
                       placeholder="Email or username"
                       onBlur={handleBlur}
                       required
                />
                <input name="password"
                       id="password"
                       className={`formInputBox ${passwordError ? "formInputError" : ""}`}
                       type="password"
                       placeholder="Password"
                       onBlur={handleBlur}
                       required
                />

                <a onClick={logIn}
                   id="formLogIn"
                   className="registerSignUpButton"
                >
                    Log in
                </a>
                <p className="registerSuccess">{success}</p>
                <p className="registerErrorText">
                    {usernameError}
                </p>
                <p className="registerErrorText">
                    {passwordError}
                </p>
            </form>
        </div>
    );
}

export default LoginOverlay;