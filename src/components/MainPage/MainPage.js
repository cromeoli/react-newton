import Logo from "../Logo";
import CalcBar from "./CalcBar";
import "../../css/toggle.css";
import ResultBox from "./ResultBox";
import {useState} from "react";
import KeyboardButton from "./keyboardButton";
import integral from "../../img/integral.svg"
import calcArea from "../../img/calcArea.svg"
import derivative from "../../img/derivative.svg"
import absolute from "../../img/absolute.svg"
import clearButton from "../../img/clear.svg";
import fraction from "../../img/fraction.svg";


/**
 * MainPage
 *
 * @component
 *
 * Componente principal de la aplicación que se encarga de renderizar el logo de la aplicación,
 * la barra de calculo, el teclado y el resultado
 *
 * @returns {JSX.Element} El elemento JSX que representa el componente
 */
function MainPage(props) {
    /**
     * State: result
     *
     * Contiene el estado del resultado
     *
     * @type {string}
     */
    const [result, setResult] = useState({"result":""})

    /**
     * State: buttonInput
     *
     * Contendrá la pulsación del botón que se ha pulsado en ese momento
     *
     * @type {string}
     */
    const [buttonInput, setButtonInput] = useState("")


    /**
     * Modifica el estado de buttonInput para ir mostrando los caracteres seleccionados en el teclado
     *
     * @param {string} value - valor a ser agregado a buttonInput
     */
    function modificar(value){
        console.log("llamado")
        setButtonInput(buttonInput+value)
    }

    /**
     * Limpia el estado de buttonInput
     */
    function clear(){
        setButtonInput("")
    }

    return (
        <main className="mainFrame">
            <Logo/>
            <CalcBar fun={setResult} state={buttonInput} handleInput={setButtonInput}/>
            <section className="keyBoardSection">
                <KeyboardButton write={modificar} operator={"(over)"} name={"(over)"}>
                    <img src={fraction} className="customIcon"/>
                </KeyboardButton>
                <KeyboardButton write={modificar} operator={"sin/"} name={"sin"}>sin</KeyboardButton>
                <KeyboardButton write={modificar} operator={"cos/"} name={"cos"}>cos</KeyboardButton>
                <KeyboardButton write={modificar} operator={"tan/"} name={"tan"}>tan</KeyboardButton>
                <KeyboardButton write={modificar} operator={"integrate/"} name={"integrate"}>
                    <img src={integral} className="customIcon"/>
                </KeyboardButton>
                <KeyboardButton write={modificar} operator={"log/"} name={"log"}>log</KeyboardButton>
                <KeyboardButton write={modificar} operator={"area/"} name={"area"}>
                    <img src={calcArea} className="customIcon"/>
                </KeyboardButton>
                <KeyboardButton write={modificar} operator={"simplify/"} name={"simplify"}>smp</KeyboardButton>
                <KeyboardButton write={modificar} operator={"factor/"} name={"factor"}>factor</KeyboardButton>
                <KeyboardButton write={modificar} operator={"pi"} name={"pi"}>π</KeyboardButton>
                <KeyboardButton write={modificar} operator={"arcsin/"} name={"arcsin"}>csc</KeyboardButton>
                <KeyboardButton write={modificar} operator={"arccos/"} name={"arccos"}>sec</KeyboardButton>
                <KeyboardButton write={modificar} operator={"arctan/"} name={"arctan"}>cot</KeyboardButton>
                <KeyboardButton write={modificar} operator={"derive/"} name={"derive"}>
                    <img src={derivative} className="customIcon"/>
                </KeyboardButton>
                <KeyboardButton write={modificar} operator={"abs/"} name={"abs"}>
                    <img src={absolute} className="customIcon"/>
                </KeyboardButton>
                <KeyboardButton write={modificar} operator={"zeroes/"} name={"zeroes"}>0's</KeyboardButton>
                <KeyboardButton write={modificar} operator={"tangent/"} name={"tangent/"}>tang</KeyboardButton>
                <KeyboardButton write={clear} name={"clear"}>
                    <img src={clearButton} className="customIcon clearButton"/>
                </KeyboardButton>
            </section>
            <ResultBox total={result.result}/>
        </main>
    );
}

export default MainPage;