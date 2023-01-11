import Navbar from "./Navbar";
import Logo from "./Logo";
import CalcBar from "./CalcBar";
import Keyboard from "./Keyboard";
import "../css/toggle.css";
import OperationsArea from "./OperationsArea";
import ResultBox from "./ResultBox";
import {useState} from "react";

function MainPage(props) {
    const [result, setResult] = useState({"result":""})

    return (
        <main className="mainFrame">
            <Logo/>
            <CalcBar fun={setResult}/>
            <Keyboard/>
            <ResultBox total={result.result}/>
        </main>

        //<div className={props.activo === "1" ? null : "invisible"}>

        //</div>
    );
}

export default MainPage;