import { useState } from "react"
export const Contador = () => {

    const [valor,setValor]=useState(0);
    const contador=(num:number)=>{
        setValor(valor+num)
    }
  return (
    <>
        <h3>Contador <small>{valor}</small></h3>
      <button className="btn btn-primary " onClick={()=>contador(5)}>+5</button>
      &nbsp;
      <button className="btn btn-primary" onClick={()=>contador(-5)}>-5</button>
    </>
  )
}