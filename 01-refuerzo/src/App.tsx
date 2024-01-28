// import { Contador} from "./components/Contador";
// import { ContadorCustomHook } from "./components/ContadorCustomHook";
// import { Cuadrado } from "./components/Cuadrado";
// import { Parametro } from "./components/Parametro";
// import { Dividido } from "./components/Dividido";
import { Alumnos } from "./components/Alumnos";

//componente - en base de una funcion
const App = () => {
  return (
    <div className="mt-2">
      <h1>Introduccion a TS-React</h1>
      <hr />
      {/* <Contador/> */}
      {/* <Cuadrado/> */}
      {/* <ContadorCustomHook/> */}
      {/* <Parametro/> */}
      {/* <Dividido/> */}
      <Alumnos/>
    </div>
  );
};
export default App;
