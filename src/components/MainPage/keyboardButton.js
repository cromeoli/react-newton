import React, {useCallback, useState} from "react";
import "../../css/style.css"
import {Link} from "react-router-dom";
/**
 * Componente que representa un botón en el teclado de la calculadora.
 *
 * @component
 * @example
 * const operator = 'sin/'
 *
 * @returns {JSX.Element} El elemento JSX que representa el componente
 */
function KeyboardButton(props){
    /**
     * State: isPressed
     *
     * Almacena el estado sobre si se ha pulsado o no el botón
     *
     * @type {boolean}
     */
    const [isPressed, setIsPressed] = useState(false);

    /**
     * State: path
     *
     * Almacenará un path adonde se va a enviar al usuario para los instantDocs
     *
     * @type {boolean}
     */
    const [path, setPath] = useState("#");

    /**
     * @type {Object} timeoutRef - Referencia para almacenar el tiempo de espera
     */
    const timeoutRef = React.useRef(null);

    /**
     * Función para manejar el evento de soltar el clic del mouse.
     * Establece el estado 'isPressed' en falso y limpia el temporizador.
     */
    const handleMouseUp = useCallback(() => {
        setIsPressed(false);
        clearTimeout(timeoutRef.current);
    }, []);

    /**
     * Función para manejar el evento de presionar el clic del mouse.
     * Establece el estado 'isPressed' en verdadero y establece un temporizador de 1 segundo.
     * Si el temporizador se completa, redirige a la página de documentación correspondiente al botón.
     */
    const handleMouseDown = useCallback(() => {
        setIsPressed(true);
        timeoutRef.current = setTimeout(() => {
            //window.location.href = `/docs/${props.name}`;
            setPath(`/docs/${props.name}`)
        }, 1000); // 1000ms = 1s
    }, []);


    return (
        <Link onClick={() => props.write(props.operator)}
           onMouseDown={handleMouseDown}
           onMouseUp={handleMouseUp}
           onMouseLeave={handleMouseUp}
              to={path}
           className="keyboardButton lightKeyboardButtons">
            {props.children}
        </Link>
    );
}

export default KeyboardButton;