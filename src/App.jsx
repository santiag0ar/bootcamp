import "./App.css";
// import Greeting from "./components/pure/greeting";
// import GreetingF from "./components/pure/greetingF";
// import TaskListComponent from "./components/container/task_list";
// import Ejemplo1 from "./hooks/Ejemplo1";
// import Ejemplo2 from "./hooks/Ejemplo2";
// import MiComponenteConContexto from "./hooks/Ejemplo3";
import Ejemplo4 from "./hooks/Ejemplo4";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <div className="app">
      <header>
        {/* <Greeting name="Santiago" /> */}
        {/* <GreetingF name="Santiago" /> */}
        {/* <TaskListComponent /> */}
        {/* Ejemplos de uso de HOOKS */}
        {/* <Ejemplo1 /> */}
        {/* <Ejemplo2 /> */}
        {/* <MiComponenteConContexto /> */}
        <Ejemplo4 name="Santiago">
          <h2>Contenido del props.children</h2>
        </Ejemplo4>
      </header>
    </div>
  );
}

export default App;
