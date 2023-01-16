import React, {useEffect} from "react";
import "../../css/style.css"
import equal from "../../img/Equal.svg"
import {useState} from "react";
import data from "../../datos.json";

function CalcBar(props){

    const exampleList = ["simplify/", "cos/", "derive/", "integrate/", "factor/", "zeroes/"]

    const [ejemplo, setEjemplo] = useState(exampleList[0]);

    const [counter, setCounter] = useState(1);

    const [pressEffect, setPressEffect] = useState(false);

    useEffect( () =>{
        const interval = setInterval(
            () => {
                console.log(counter)
                console.log(`Array ${exampleList.length}`)
                counter === exampleList.length ?
                    setCounter(0) :
                    setCounter(counter+1)
                console.log(counter === exampleList.length)

                setEjemplo(exampleList[counter])
            }, 2200
        );
        return () => clearInterval(interval);
            },[
                ejemplo
        ]

    )


    const getData =  async () => {
        try{
            let operation = document.getElementById("inputValue").value
            const data = await fetch(`https://newton.now.sh/api/v2/${operation.replace(/\+/g, "%2B")}`);
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

    function handleIntro(event){
        if (event.key === 'Enter') {
            setPressEffect(true)

            setTimeout(() => {
                setPressEffect(false)
            }, 600);
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