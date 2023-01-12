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

function MainPage(props) {
    const [result, setResult] = useState({"result":""})
    const [buttonInput, setButtonInput] = useState("")

    function modificar(value){
        console.log("llamado")
        setButtonInput(buttonInput+value)
    }

    function clear(){
        setButtonInput("")
    }

    return (
        <main className="mainFrame">
            <Logo/>
            <CalcBar fun={setResult} state={buttonInput} handleInput={setButtonInput}/>
            <section className="keyBoardSection">
                <KeyboardButton write={modificar} operator={"(over)"}>
                    <img src={fraction} className="customIcon"/>
                </KeyboardButton>
                <KeyboardButton write={modificar} operator={"sin/"}>sin</KeyboardButton>
                <KeyboardButton write={modificar} operator={"cos/"}>cos</KeyboardButton>
                <KeyboardButton write={modificar} operator={"tan/"}>tan</KeyboardButton>
                <KeyboardButton write={modificar} operator={"integrate/"}>
                    <img src={integral} className="customIcon"/>
                </KeyboardButton>
                <KeyboardButton write={modificar} operator={"log/"}>log</KeyboardButton>
                <KeyboardButton write={modificar} operator={"area/"}>
                    <img src={calcArea} className="customIcon"/>
                </KeyboardButton>
                <KeyboardButton write={modificar} operator={"simplify/"}>smp</KeyboardButton>
                <KeyboardButton write={modificar} operator={"factor/"}>factor</KeyboardButton>
                <KeyboardButton write={modificar} operator={"pi"}>π</KeyboardButton>
                <KeyboardButton write={modificar} operator={"arcsin/"}>csc</KeyboardButton>
                <KeyboardButton write={modificar} operator={"arccos/"}>sec</KeyboardButton>
                <KeyboardButton write={modificar} operator={"arctan/"}>cot</KeyboardButton>
                <KeyboardButton write={modificar} operator={"derive/"}>
                    <img src={derivative} className="customIcon"/>
                </KeyboardButton>
                <KeyboardButton write={modificar} operator={"abs/"}>
                    <img src={absolute} className="customIcon"/>
                </KeyboardButton>
                <KeyboardButton write={modificar} operator={"zeroes/"}>0's</KeyboardButton>
                <KeyboardButton write={modificar} operator={"2.7182818"}>e</KeyboardButton>
                <KeyboardButton write={clear}>
                    <img src={clearButton} className="customIcon clearButton"/>
                </KeyboardButton>
            </section>
            <ResultBox total={result.result}/>
        </main>
    );
}

export default MainPage;