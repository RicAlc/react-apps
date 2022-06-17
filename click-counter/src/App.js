import "./App.css";
import Button from "./components/Button";
import Contador from "./components/Contador";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [numClics, setNumClics] = useState(0);
  const add = () => {
    setNumClics(numClics + 1);
  };
  const reset = () => {
    setNumClics(0);
  };
  return (
    <div className="App">
      <Header />
      <Contador numClics={numClics} />
      <Button texto="ADD" isAddButton={true} btnAction={add} />
      <Button texto="RESET" isAddButton={false} btnAction={reset} />
    </div>
  );
}

export default App;
