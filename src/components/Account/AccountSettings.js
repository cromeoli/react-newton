import React from "react";
import "../../css/style.css"

function AccountSettings(props){
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
                    <button className="deleteButton">
                        Delete Account
                    </button>

                </div>
            </form>
        </section>
    );
}

export default AccountSettings;