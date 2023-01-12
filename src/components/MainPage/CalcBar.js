import React from "react";
import "../../css/style.css"
import equal from "../../img/Equal.svg"
import {useState} from "react";

function CalcBar(props){
        const [ejemplo, setEjemplo] = useState("simplify/")

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
        function handleChange(event){
            console.log(event)
            if(event.nativeEvent.data == null){
                props.handleInput(props.state.slice(0,-1))
            }else{
                props.handleInput(props.state + event.nativeEvent.data)
            }
        }

    return (
        <>
            <section className="inputSection">
                <div className="inputBarArea lightInputBar">
                    <input   id="inputValue"
                              value={props.state}
                             onChange={handleChange}
                           placeholder={ejemplo}
                           className="inputBar lightInputBar">
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