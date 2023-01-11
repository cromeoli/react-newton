import React from "react";
import Button from "./Button";
import "../css/style.css"
import fraction from "../img/fraction.svg"
import integral from "../img/integral.svg"
import calcArea from "../img/calcArea.svg"
import derivative from "../img/derivative.svg"
import absolute from "../img/absolute.svg"
import clear from "../img/clear.svg"

function Keyboard(props){
    return (
        <>
         <section className="keyBoardSection">
            <Button>
                <img src={fraction} className="customIcon"/>
            </Button>
            <Button>sin</Button>
            <Button>cos</Button>
            <Button>tan</Button>
            <Button>
                <img src={integral} className="customIcon"/>
            </Button>
            <Button>log</Button>
            <Button>
                <img src={calcArea} className="customIcon"/>
            </Button>
            <Button>smp</Button>
            <Button>factor</Button>
             <Button>π</Button>
            <Button>csc</Button>
            <Button>sec</Button>
            <Button>cot</Button>
            <Button>
                <img src={derivative} className="customIcon"/>
            </Button>
            <Button>
                <img src={absolute} className="customIcon"/>
            </Button>
            <Button>0's</Button>
            <Button>
                <img src={clear} className="customIcon clearButton"/>
            </Button>
         </section>
        </>
    );
}

export default Keyboard;