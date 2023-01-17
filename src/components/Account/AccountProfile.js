import React, {useState} from "react";
import "../../css/style.css"
import avatar from "../../img/Avatar.png"
import twitterLogo from "../../img/Twitter.svg"
import instagram from "../../img/Instagram.svg"
import github from "../../img/github.svg"
import more from "../../img/+.svg"

function AccountProfile(props){

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [fullName, setFullname] = useState('');
    const [birthday, setBirthday] = useState('');


    const [emailError, setEmailError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [fullNameError, setFullNameError] = useState('');
    const [birthdayError, setBirthdayError] = useState('');

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