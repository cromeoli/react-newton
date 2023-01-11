import React from "react";
import "../css/style.css"
import equal from "../img/Equal.svg"
import {useState} from "react";

function CalcBar(props){

        const getData =  async () => {
            try{
                let operation = document.getElementById("inputValue").value
                const data = await fetch(`https://newton.now.sh/api/v2/${operation}`);
                const calculo = await data.json();
                props.fun(calculo);

            }catch{
                alert("Operación no válida")
            }
        }

    return (
        <>
            <section className="inputSection">
                <div className="inputBarArea lightInputBar">
                    <input id="inputValue" className="inputBar lightInputBar"/>
                        <a onClick={getData} className="equal">
                            <img src={equal} className="equalImg"/>
                        </a>
                </div>
            </section>
        </>
    );
}

export default CalcBar;