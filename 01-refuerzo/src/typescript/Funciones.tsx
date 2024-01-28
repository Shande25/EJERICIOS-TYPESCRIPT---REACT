//atajo para generar componenetes rafc
export const Funciones = () => {
    //funciones deben especificar el tipo de retorno
  const sumar=(num1:number,num2:number):number =>{
    return num1+num2;

  }
    return (
    <div>
        <h3>Funciones</h3>
        <span>El resulado es:{sumar(5,5)}</span>
    </div>
  )
}
