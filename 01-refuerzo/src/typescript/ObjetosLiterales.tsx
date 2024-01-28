import { json } from "stream/consumers";

export const ObjetoLiterates = () => {
//   interfaces
    // type,class,interface
    // interface=estructura y reglas de validacion del objeto
    interface Persona{
        nombreCompleto:string;
        edad:number;
        direccion:Direccion; //objeto anidado

    }
    interface Direccion{
        pais:string;
            casaNumero:number;
        
    }  
    //objeto de tipo Persona
    const persona: Persona = {
    nombreCompleto: "Jahir",
    edad: 18,
    direccion: {
      pais: "Ecuador",
      casaNumero: 365,
    },
  }
  //intancias la interface
//   const persona=new Persona(); <- no es permitido

  //acceder a un valor del objeto
//persona.nombreCompleto="Jahir Shande";
  return (
    <div>
      <h3>Objetos literales</h3>
      <code>
        <pre>
            {JSON.stringify(persona, null, 2)}
        </pre>
      </code>
    </div>
  );
};
