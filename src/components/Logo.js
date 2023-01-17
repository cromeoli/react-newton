import React from "react";
import "../css/style.css"
import paco from "../ejemplo.json"
import {Link} from "react-router-dom";

function Logo(props){
    return (
        <section className="logoSection">
            <Link to="/" className="logoNewton lightNewtonLogo">newton</Link>
        </section>
    );
}

export default Logo;