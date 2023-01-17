import React, {useState} from "react";
import "../../css/style.css"

function AccountSecurity(props){
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [visiblePass, setVisiblepass] = useState(false);
    const [success, setSuccess] = useState('');

    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [newPasswordError, setNewPasswordError] = useState('');


    const handleBlur = (event) => {
        const { name, value } = event.target;

        switch (name) {
            case 'password':
                if (value.length < 6 || value !== localStorage.getItem('password')) {
                    setPasswordError('La contraseña debe ser mayor a 6 caracteres o es incorrecta');
                } else {
                    setPasswordError('');
                }
                break;
            case 'confirmpassword':
                if (newPassword !== confirmPassword) {
                    setConfirmPasswordError('Las contraseñas no coinciden');
                } else {
                    setConfirmPasswordError('');
                }
                break;
            case 'newpassword':
                if (!/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/.test(value)) {
                    setNewPasswordError('La contraseña debe contener mínimo 6 caracteres, una mayúscula y un dígito.');
                } else {
                    setNewPasswordError('');
                }
                break;

            default:
                break;
        }
    };

    function saveChanges(){
        if ((!passwordError && !confirmPasswordError && !newPasswordError)
            && password === localStorage.getItem('password')) {
            if(newPassword !== ""){
                localStorage.setItem('password', newPassword);
            }

            setSuccess('Contraseña actualizada con éxito')
            setTimeout(() => {
                setSuccess('')
            }, 1000);
        }

    }

    function toggleVisiblePass(){
        setVisiblepass(!visiblePass)
    }



    return (
        <section className={`securityArea ${props.securityStatus ? "open" : "closed"}`}>
            <h1 className="profileTitle">Security</h1>

            <form className="userDataForm">
                <label className="userDataLabel">
                    Current password
                    <input type="password"
                           className="formInputBox"
                           placeholder="Enter current password..."
                           name="password"
                           onBlur={handleBlur}
                           onChange={(event) => setPassword(event.target.value)}
                    />
                </label>
                <label className="userDataLabel">
                    New password
                    <input
                           className="formInputBox"
                           type={visiblePass ? "" : "password"}
                           placeholder="New password"
                           name="confirmpassword"
                           onBlur={handleBlur}
                           onChange={(event) => setConfirmPassword(event.target.value)}
                    />
                </label>
                <a className="orangeRoundedButton"
                   onClick={toggleVisiblePass}
                >
                    Ver contraseñas
                </a>
                <label className="userDataLabel">
                    Confirm new password
                    <input
                           className="formInputBox"
                           type={visiblePass ? "" : "password"}
                           placeholder="Confirm new password"
                           name="newpassword"
                           onBlur={handleBlur}
                           onChange={(event) => setNewPassword(event.target.value)}
                    />
                </label>
                <a className="orangeRoundedButton"
                   onClick={saveChanges}
                >
                    Save
                </a>
            </form>
            <p className="registerSuccess">{success}</p>
            <p className="registerErrorText">{passwordError}</p>
            <p className="registerErrorText">{newPasswordError}</p>
            <p className="registerErrorText">{confirmPasswordError}</p>
        </section>
    );
}

export default AccountSecurity;