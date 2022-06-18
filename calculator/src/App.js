import Button from "./componentes/Button";
import ClearButton from "./componentes/ClearButton";
import Display from "./componentes/Display";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");
  const addInput = (val) => {
    setInput(input + val);
  };
  const calculate = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Por favor añade valores para calcular.");
    }
  };

  return (
    <div className="App">
      <div className="calc-container">
        <div className="row">
          <Display input={input} />
        </div>
        <ClearButton clearHandler={() => setInput("")}>CLEAR</ClearButton>
        <div className="row">
          <Button clickHandler={addInput}>7</Button>
          <Button clickHandler={addInput}>8</Button>
          <Button clickHandler={addInput}>9</Button>
          <Button clickHandler={addInput}>*</Button>
        </div>
        <div className="row">
          <Button clickHandler={addInput}>4</Button>
          <Button clickHandler={addInput}>5</Button>
          <Button clickHandler={addInput}>6</Button>
          <Button clickHandler={addInput}>/</Button>
        </div>
        <div className="row">
          <Button clickHandler={addInput}>1</Button>
          <Button clickHandler={addInput}>2</Button>
          <Button clickHandler={addInput}>3</Button>
          <Button clickHandler={addInput}>+</Button>
        </div>
        <div className="row">
          <Button clickHandler={addInput}>.</Button>
          <Button clickHandler={addInput}>0</Button>
          <Button clickHandler={calculate}>=</Button>
          <Button clickHandler={addInput}>-</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
