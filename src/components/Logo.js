import React from "react";
import "../css/style.css"
import {Link} from "react-router-dom";

/**
 * Logo
 *
 * @component
 *
 * Componente que renderiza el logo de la aplicación.
 *
 * @param {Object} props - Props pasadas al componente.
 * @returns {JSX.Element} El elemento JSX que representa el componente
 */
function Logo(props){
    return (
        <section className="logoSection">
            <Link to="/" className="logoNewton lightNewtonLogo">newton</Link>
        </section>
    );
}

export default Logo;