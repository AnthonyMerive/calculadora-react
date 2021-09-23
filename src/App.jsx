import React, { useState } from 'react'

export default function App() {

    const [expresion, setExpresion] = useState("")
    const [calculo, setCalculo] = useState(0)
    const handleMostrar = (expr) => {
        setExpresion(anterior => anterior + expr)
    }

    const calcular = () => {
        setCalculo(eval(expresion));
    }

    const borrar = () => {
        setExpresion("")
        setCalculo(0)
    }

    return (<>
        <div className="container">
            <div className="grid">
                <div className="dis">
                    {expresion === "" ?
                        <div className="text-dark operacion">0</div>
                        :
                        <div className="operacion">{expresion}</div>
                    }
                    <div className="total">{calculo}</div>
                </div>
                <div onClick={borrar} className="pathbutton AC">AC</div>
                <div onClick={() => handleMostrar("/")} className="pathbutton div">/</div>
                <div onClick={() => handleMostrar("*")} className="pathbutton por">X</div>
                <div onClick={() => handleMostrar("7")} className="pathbutton siete">7</div>
                <div onClick={() => handleMostrar("8")} className="pathbutton ocho">8</div>
                <div onClick={() => handleMostrar("9")} className="pathbutton nueve">9</div>
                <div onClick={() => handleMostrar("-")} className="pathbutton menos">-</div>
                <div onClick={() => handleMostrar("4")} className="pathbutton cuatro">4</div>
                <div onClick={() => handleMostrar("5")} className="pathbutton cinco">5</div>
                <div onClick={() => handleMostrar("6")} className="pathbutton seis">6</div>
                <div onClick={() => handleMostrar("+")} className="pathbutton mas">+</div>
                <div onClick={() => handleMostrar("1")} className="pathbutton uno">1</div>
                <div onClick={() => handleMostrar("2")} className="pathbutton dos">2</div>
                <div onClick={() => handleMostrar("3")} className="pathbutton tres">3</div>
                <div onClick={calcular} className="pathbutton igual">=</div>
                <div onClick={() => handleMostrar("0")} className="pathbutton cero">0</div>
                <div onClick={() => handleMostrar(".")} className="pathbutton punto">.</div>
            </div>
        </div>
    </>)
}
