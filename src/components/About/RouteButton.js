import React from "react";
import "../../css/style.css"
import {Link} from "react-router-dom";

/**
 * AboutPage - Componente que renderiza un botón que recibe
 *
 * @component
 * @property {string} path - La ruta a la que el botón enlaza
 * @property {React.ReactNode} children - El contenido del botón
 * @param {props} props - Las propiedades del componente
 * @returns {JSX.Element} El elemento JSX que representa el componente
 */
function RouteButton(props){
    return (
        <Link to={props.path} className="registerSignUpButton routeButton">
            {props.children}
        </Link>
    );
}

export default RouteButton;