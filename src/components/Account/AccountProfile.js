import React, {useState} from "react";
import "../../css/style.css"
import avatar from "../../img/Avatar.png"
import twitterLogo from "../../img/Twitter.svg"
import instagram from "../../img/Instagram.svg"
import github from "../../img/github.svg"
import more from "../../img/+.svg"


/**
 * AccountProfile - Componente que renderiza el menú perfil de la sección account y permite
 * actualizar los datos del usuario registrado
 *
 * @returns {JSX.Element} El elemento JSX que representa el componente
 * @param {props} props - Las propiedades del componente
 * @component
 */
function AccountProfile(props){

    /**
     * @type {String} email - Estado que almacena el valor del email actual
     * @type {Function} setEmail - Función para cambiar el estado de email
     */
    const [email, setEmail] = useState('');
    /**
     * @type {String} username - Estado que almacena el valor del nombre de usuario actual
     * @type {Function} setUsername - Función para cambiar el estado de username
     */
    const [username, setUsername] = useState('');
    /**
     * @type {String} fullName - Estado que almacena el valor del nombre completo actual
     * @type {Function} setFullname - Función para cambiar el estado de fullName
     */
    const [fullName, setFullname] = useState('');
    /**
     * @type {String} birthday - Estado que almacena el valor de la fecha de nacimiento actual
     * @type {Function} setBirthday - Función para cambiar el estado de birthday
     */
    const [birthday, setBirthday] = useState('');

    ////////////Errores

    /**
     * @type {String} emailError - Estado que almacena el valor del mensaje de error del email actual
     * @type {Function} setEmailError - Función para cambiar el estado de emailError
     */
    const [emailError, setEmailError] = useState('');

    /**
     * @type {String} usernameError - Estado que almacena el valor del mensaje de error del nombre de usuario actual
     * @type {Function} setUsernameError - Función para cambiar el estado de usernameError
     */
    const [usernameError, setUsernameError] = useState('');

    /**
     * @type {String} fullNameError - Estado que almacena el valor del mensaje de error del nombre completo actual
     * @type {Function} setFullNameError - Función para cambiar el estado de fullNameError
     */
    const [fullNameError, setFullNameError] = useState('');

    /**
     * @type {String} birthdayError - Estado que almacena el valor del mensaje de error de la fecha de nacimiento actual
     * @type {Function} setBirthdayError - Función para cambiar el estado de birthdayError
     */
    const [birthdayError, setBirthdayError] = useState('');

    /**
     * @type {String} success - Estado que almacena el valor del mensaje de éxito actual
     * @type {Function} setSuccess - Función para cambiar el estado de success
     */
    const [success, setSuccess] = useState('');

    /**
     * handleBlur - Manejador de evento para el evento blur en los campos del formulario.
     * Verifica la validez de los datos ingresados en los campos de email, username, fullname y birthdate.
     * Utiliza expresiones regulares para verificar la validez de los datos ingresados.
     * @param {Object} event - El evento blur que se dispara cuando un campo pierde el foco
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
                    setUsernameError('Nombre de usuario no válido');
                } else {
                    setUsernameError('');
                }
                break;
            case 'fullname':
                if (!/^[a-zA-Z\s']{3,}$/.test(value)) {
                    console.log(fullName)
                    setFullNameError('Formato de nombre no válido');
                } else {
                    setFullNameError('');
                }
                break;

            case 'birthdate':
                if (!value.isValid()) {
                    setFullNameError('Formato de fecha no válido');
                } else {
                    setFullNameError('');
                }
                break;

            default:
                break;
        }
    };

    /**
     * saveChanges - Guarda los cambios realizados en el formulario en el almacenamiento local del navegador
     * Solo guarda los campos que no están vacíos y que no tienen errores.
     * Muestra un mensaje de éxito durante 1 segundo.
     */
    function saveChanges(){
        if (!emailError && !usernameError && !fullNameError && !birthdayError) {
            if(email !== ""){
                localStorage.setItem('email', email);
            }
            if(username !== ""){
                localStorage.setItem('username', username);
            }
            if(fullName !== ""){
                localStorage.setItem('fullname', fullName);
            }
            if(birthday !== ""){
                localStorage.setItem('birthdate', birthday)
            }

            setSuccess('Datos actualizados con éxito')
            setTimeout(() => {
                setSuccess('')
            }, 1000);

        }
    }

    return (
    <section className={`profileArea ${props.profileStatus ? "open" : "closed"}`}>
        <h1 className="profileTitle">My Profile</h1>
        <img src={avatar} className="accountAvatar"/>

        <form className="userDataForm">
            <label className="userDataLabel">
            Username
                <input defaultValue={localStorage.getItem('username')}
                       name="username"
                       className="formInputBox"
                       onBlur={handleBlur}
                       onChange={(event) => setUsername(event.target.value)}
                />
            </label>

            <label className="userDataLabel">
            Full Name
                <input placeholder="Completa tu perfil"
                       name="fullname"
                       className="formInputBox"
                       onBlur={handleBlur}
                       onChange={(event) => setFullname(event.target.value)}
                />
            </label>

            <label className="userDataLabel">
            Associed account
                <input defaultValue={localStorage.getItem('email')}
                       name="email"
                       className="formInputBox"
                       onBlur={handleBlur}
                       onChange={(event) => setEmail(event.target.value)}
                />
            </label>

            <label className="userDataLabel" >
            Birthdate
                <input type="date"
                       id="date"
                       className="formInputBox"
                       name="birthdate"
                       onBlur={handleBlur}
                       onChange={(event) => setBirthday(event.target.value)}
                />
            </label>

            <a className="orangeRoundedButton"
                    onClick={saveChanges}
            >
                Save
            </a>
        </form>
        <p className="registerSuccess">{success}</p>
        <p className="registerErrorText">{emailError}</p>
        <p className="registerErrorText">{fullNameError}</p>
        <p className="registerErrorText">{usernameError}</p>
        <p className="registerErrorText">{birthdayError}</p>

        <span className="accountSocial">
            <a href="https://twitter.com/" className="mediaIcon">
                <img src={twitterLogo}/>
            </a>
            <a href="https://www.instagram.com/" className="mediaIcon">
                <img src={instagram}/>
            </a>
            <a href="https://github.com/cromeoli" className="mediaIcon">
                <img src={github}/>
            </a>
            <a href="#" className="mediaIcon">
                <img src={more}/>
            </a>
        </span>
    </section>

    );
}

export default AccountProfile;