import React from "react";
import "../../css/style.css"

function AccountSecurity(props){
    return (
        <section className="securityArea">
            <h1 className="profileTitle">Security</h1>

            <form className="userDataForm">
                <label className="userDataLabel">
                    Current password
                    <input type="password" className="formInputBox" placeholder="Enter current password..."/>
                </label>
                <label className="userDataLabel">
                    New password
                    <input type="password" className="formInputBox" placeholder="New password"/>
                </label>
                <label className="userDataLabel">
                    Confirm new password
                    <input type="password" className="formInputBox" placeholder="Confirm new password"/>
                </label>
                <label className="userDataLabel">
                    Change associed email
                    <input className="formInputBox" placeholder="New email"/>
                </label>
                <button className="orangeRoundedButton">
                    Set two step validation
                </button>
            </form>
        </section>
    );
}

export default AccountSecurity;