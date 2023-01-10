import React from "react";
import Button from "./Button";
import "../css/style.css"

function Keyboard(props){
    return (
        <>
         <section className="keyBoardSection">
            <Button>
                <img src="../img/fraction.svg" className="customIcon"/>
            </Button>
            <Button>sin</Button>
            <Button>cos</Button>
            <Button>tan</Button>
            <Button>
                <img src="../img/integral.svg" className="customIcon"/>
            </Button>
            <Button>log</Button>
            <Button>
                <img src="../img/calcArea.svg" className="customIcon"/>
            </Button>
            <Button>smp</Button>
            <Button>factor</Button>
            <Button>csc</Button>
            <Button>sec</Button>
            <Button>cot</Button>
            <Button>
                <img src="../img/derivative.svg" className="customIcon"/>
            </Button>
            <Button>
                <img src="../img/absolute.svg" className="customIcon"/>
            </Button>
            <Button>0's</Button>
            <Button>
                <img src="../img/clear.svg" className="customIcon"/>
            </Button>
         </section>
        </>






    );
}

export default Keyboard;