import React from "react";
import "../css/style.css"
import Link from 'react-router-dom'

function CalcBar(props){
    return (
        <>
            <section className="inputSection">
                <div className="inputBarArea lightInputBar">
                    <input className="inputBar lightInputBar"/>
                        <Link href="404.html" className="equal">
                            <img src="assets/img/Equal.svg" className="equalImg"/>
                        </Link>
                </div>
            </section>
        </>
    );
}

export default CalcBar;