import React, {useState} from "react";
import "../../css/style.css"

function AccountSettings(props){

    function handleDoubleClick(){
        if(window.confirm("Are you sure you want to delete your account?")){
            alert("Jamás escaparás de newton")
        }
    }

    return (
        <section className={`settingsArea ${props.settingsStatus ? "open" : "closed"}`}>
            <h1 className="profileTitle">Settings</h1>

            <form className="settingsContainer">
                <div className="sliderAlign">
                    <p>Light Theme</p>
                    <label className="switch">
                        <input id="themeLightSlider" type="checkbox"/>
                            <span className="slider round"></span>
                    </label>
                </div>

                <div className="sliderAlign">
                    <p>Language</p>
                    <label>
                        <select className="customSelect">
                            <option value="value1">Español</option>
                            <option value="value2" selected>English</option>
                            <option value="value3">Français</option>
                        </select>
                    </label>
                </div>

                <div className="dangerZone">
                    <p>Danger Zone</p>
                    <p>Double click to delete</p>
                    <a className="deleteButton"
                       onDoubleClick={handleDoubleClick}ç
                    >
                        Delete Account
                    </a>

                </div>
            </form>
        </section>
    );
}

export default AccountSettings;