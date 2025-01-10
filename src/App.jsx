import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState([]);

  const handleOnCLick = (e) => {
    const { innerText } = e.target;
    e.preventDefault();

    setDisplay([...display, innerText]);

    if (innerText === "AC") {
      setDisplay("");
    }

    if (innerText === "C") {
      const newText = display.slice(0, -1);
      setDisplay(newText);
    }
  };

  return (
    <div className="container">
      <form className="calculator" onClick={handleOnCLick}>
        <div className="display">{display}</div>
        <div className="btn btn-ac">AC</div>
        <button className="btn btn-c">C</button>
        <button className="btn btn-divide">/</button>
        <button className="btn btn-per">%</button>
        <button className="btn btn-sev">7</button>
        <button className="btn btn-eight">8</button>
        <button className="btn btn-nine">9</button>
        <button className="btn btn-mul">*</button>
        <button className="btn btn-four">4</button>
        <button className="btn btn-five">5</button>
        <button className="btn btn-six">6</button>
        <button className="btn btn-minuus">-</button>
        <button className="btn btn-one">1</button>
        <button className="btn btn-two">2</button>
        <button className="btn btn-three">3</button>
        <button className="btn btn-plus">+</button>
        <button className="btn btn-zero">0</button>
        <button className="btn btn-dot">.</button>
        <button className="btn btn-equal">=</button>
      </form>
    </div>
  );
}

export default App;
