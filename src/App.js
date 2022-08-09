import { useState } from "react";
import "./components/nice";
import "./App.css";
import Nice from "./components/nice";

function App() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  function randomNumber() {
    return setNumber(Math.floor(Math.random() * 100) + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <p className="rotulo">Sua vontade de viver hoje é de:</p>
          <Nice number={number} />
          <p className="numero-random">{number}%</p>
          <Nice number={number} />
          <button className="button" onClick={randomNumber}>
            Tente melhorar o resultado!
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
