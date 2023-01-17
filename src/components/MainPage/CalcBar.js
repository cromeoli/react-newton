import React, {useEffect} from "react";
import "../../css/style.css"
import equal from "../../img/Equal.svg"
import {useState} from "react";
import data from "../../datos.json";


/**
 * Componente principal de la calculadora que representa una
 * barra de inputs donde introducir operaciones matemáticas
 *
 * @component
 * @example
 * const operator = 'sin/'
 *
 * @returns {JSX.Element} El elemento JSX que representa el componente
 */
function CalcBar(props){

    // Lista para guardar posibles placeholders a mostrar
    const exampleList = ["simplify/", "cos/", "derive/", "integrate/", "factor/", "zeroes/"]

    // Lista para guardar posibles placeholders a mostrar
    const [ejemplo, setEjemplo] = useState(exampleList[0]);

    const [counter, setCounter] = useState(1);

    const [pressEffect, setPressEffect] = useState(false);

    /**
     * useEffect - Hook que se encarga de actualizar una variable "ejemplo" con un valor de un arreglo
     * "exampleList" cada 2200ms y reiniciar el contador "counter" si el valor actual es igual al
     * tamaño del arreglo. Utiliza la función "setInterval" para establecer el tiempo de actualización
     * y la función "clearInterval" para limpiar el intervalo cuando el componente se desmonta.
     */
    useEffect( () =>{
        const interval = setInterval(
            () => {
                console.log(counter)
                console.log(`Array ${exampleList.length}`)
                counter === exampleList.length ?
                    // Si es verdadero, reinicia el contador a 0
                    setCounter(0) :
                    // Si es falso, aumenta el contador en 1
                    setCounter(counter+1)
                console.log(counter === exampleList.length)
                // Actualiza el placeholder en función del índice del array
                setEjemplo(exampleList[counter])
            }, 2200
        );
        return () => clearInterval(interval);
            },[
                ejemplo
        ]

    )


    /**
     * Función que recoge el input de la calculadora y envía una petición
     * a la API de newton y establece el resultado como estado del componente
     * principal
     */
    const getData =  async () => {
        try{
            // Añadimos efectos cool a la barra para mostrar al usuario que se ha enviado la petición.
            setPressEffect(true)
            setTimeout(() => {
                setPressEffect(false)
            }, 3000);

            let operation = document.getElementById("inputValue").value
            const data = await fetch(`https://newton.now.sh/api/v2/${operation.replace(/\+/g, "%2B").replace(/\^/g, "%5E")}`);
            const calculo = await data.json();
            props.fun(calculo);

        }catch{
            alert("Operación no válida")
        }
    }

    /**
     * Función auxiliar para detectar lo escrito en la barra de cálculo y escribirlo. Si detecta
     * pulsación en la tecla borrar elimina el último carácter escrito
     */
    function handleChange(event){
        console.log(event)
        if(event.nativeEvent.data == null){
            props.handleInput(props.state.slice(0,-1))
        }else{
            props.handleInput(props.state + event.nativeEvent.data)
        }
    }

    /**
     * Función para añadir una pequeña animación en la barra que
     * nos informa de que la petición se ha enviado
     */
    function animateBar(){
        setPressEffect(true)
        setTimeout(() => {
            setPressEffect(false)
        }, 3000);
    }

    /**
     * Función para poder introducir nuestras operaciones
     * dando tan solo Intro mientras escribamos.
     */
    function handleIntro(event){
        if (event.key === 'Enter') {
            getData()
        }
    }

    return (
        <>
            <section className="inputSection">
                <div className={`inputBarArea lightInputBar ${pressEffect ? 'inputBarBlack' : ""}`}>
                    <input   id="inputValue"
                              value={props.state}
                             onChange={handleChange}
                             onKeyDown={handleIntro}
                             onPaste={animateBar}
                           placeholder={ejemplo}
                           className={`inputBar lightInputBar ${pressEffect ? 'inputBarBlack' : ""}`}>
                    </input>
                        <a onClick={getData} className="equal">
                            <img src={equal} className="equalImg"/>
                        </a>
                </div>
            </section>
        </>
    );
}

export default CalcBar;