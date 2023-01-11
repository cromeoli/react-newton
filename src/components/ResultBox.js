import React from "react";
import "../css/style.css"
import clipboard from "../img/clipboard-idle.svg"

function ResultBox(props){
    return (
        <section className="resultSection">
            <div className="resultBoxBackground lightResultArea">
                <div className="resultBox">
                    <a href="#" className="copyToClipboard">
                        <img src={clipboard} className="copyToClipboardImg"/>
                    </a>
                    <div className="result">
                        {props.total}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ResultBox;