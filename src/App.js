import "./App.css";
import Message from "./Mensaje";
const App = () => {
  const Description = () => {
    return <p>Y esta la descripción</p>;
  };
  //esto funciona, pero no es recomendable, lo recomendable es crear
  //los componentes en su propio archivo
  return (
    <div className="App">
      <Message color="green" msg="Mi primer App en React" />
      <Message msg="pos no sé" />
      <Message color="red" msg="es React" />
      <Description />
    </div>
  );
};

export default App;
