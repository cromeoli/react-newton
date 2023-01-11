import Navbar from "./Navbar";
import Logo from "./Logo";
import CalcBar from "./CalcBar";
import Keyboard from "./Keyboard";
import "../css/toggle.css";
import ResultBox from "./ResultBox";
import {useState} from "react";
import Button from "./Button";
import integral from "../img/integral.svg"
import calcArea from "../img/calcArea.svg"
import derivative from "../img/derivative.svg"
import absolute from "../img/absolute.svg"
import clearButton from "../img/clear.svg";
import fraction from "../img/fraction.svg";

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
                <Button write={modificar} operator={"(over)"}>
                    <img src={fraction} className="customIcon"/>
                </Button>
                <Button write={modificar} operator={"sin/"}>sin</Button>
                <Button write={modificar} operator={"cos/"}>cos</Button>
                <Button write={modificar} operator={"tan/"}>tan</Button>
                <Button write={modificar} operator={"integrate/"}>
                    <img src={integral} className="customIcon"/>
                </Button>
                <Button write={modificar} operator={"log/"}>log</Button>
                <Button write={modificar} operator={"area/"}>
                    <img src={calcArea} className="customIcon"/>
                </Button>
                <Button write={modificar} operator={"simplify/"}>smp</Button>
                <Button write={modificar} operator={"factor/"}>factor</Button>
                <Button write={modificar} operator={"pi"}>π</Button>
                <Button write={modificar} operator={"arcsin/"}>csc</Button>
                <Button write={modificar} operator={"arccos/"}>sec</Button>
                <Button write={modificar} operator={"arctan/"}>cot</Button>
                <Button write={modificar} operator={"derive/"}>
                    <img src={derivative} className="customIcon"/>
                </Button>
                <Button write={modificar} operator={"abs/"}>
                    <img src={absolute} className="customIcon"/>
                </Button>
                <Button write={modificar} operator={"zeroes/"}>0's</Button>
                <Button write={modificar} operator={"2.7182818"}>e</Button>
                <Button write={clear}>
                    <img src={clearButton} className="customIcon clearButton"/>
                </Button>
            </section>
            <ResultBox total={result.result}/>
        </main>

        //<div className={props.activo === "1" ? null : "invisible"}>

        //</div>
    );
}

export default MainPage;