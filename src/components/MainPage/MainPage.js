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
                <KeyboardButton write={modificar} operator={"arcsin/"} name={"csc"}>csc</KeyboardButton>
                <KeyboardButton write={modificar} operator={"arccos/"} name={"sec"}>sec</KeyboardButton>
                <KeyboardButton write={modificar} operator={"arctan/"} name={"cot"}>cot</KeyboardButton>
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