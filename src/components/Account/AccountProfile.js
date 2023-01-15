import React from "react";
import "../../css/style.css"
import avatar from "../../img/Avatar.png"
import twitterLogo from "../../img/Twitter.svg"
import instagram from "../../img/Instagram.svg"
import github from "../../img/github.svg"
import more from "../../img/+.svg"

function AccountProfile(props){
    return (
    <section className="profileArea">
        <h1 className="profileTitle">My Profile</h1>
        <img src={avatar} className="accountAvatar"/>

        <form className="userDataForm">
            <label className="userDataLabel">
            Username
                <input value="Cromoli" className="formInputBox"/>
            </label>

            <label className="userDataLabel">
            Full Name
                <input value="Christian Romero Oliva" className="formInputBox"/>
            </label>

            <label className="userDataLabel">
            Associed account
                <input value="cromoli1808@gmail.com" className="formInputBox"/>
            </label>

            <label className="userDataLabel">
            Phone
                <input value="777 777 777" className="formInputBox"/>
            </label>
        </form>

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