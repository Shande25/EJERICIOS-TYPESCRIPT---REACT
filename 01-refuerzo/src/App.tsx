import { Contador} from "./components/Contador";
import { Cuadrado } from "./components/Cuadrado";
import { Parametro } from "./components/Parametro";
import { Dividido } from "./components/Dividido";
import { Alumnos } from "./components/Alumnos";

//componente - en base de una funcion
const App = () => {
  return (
    <div className="mt-2">
      <h1>Ejercisios Typescript- React</h1>
      <hr />
      <Cuadrado/>
      <Parametro/>
      <Dividido/>
      <Alumnos/>
      <Contador/>
    </div>
  );
};
export default App;
