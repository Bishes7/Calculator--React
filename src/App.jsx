import { useState } from "react";
import "./App.css";

function App() {
  const operators = ["/", "+", "-", "%", "*"];
  // make a state to show the innerText in display area
  const [display, setDisplay] = useState([]);

  const handleOnClick = (e) => {
    e.preventDefault();
    const { innerText } = e.target;
    setDisplay([...display, innerText]);

    if (innerText === "AC") {
      setDisplay([]);
    }

    // making C button work
    if (innerText === "C") {
      const newDisplay = display.slice(0, -1);
      setDisplay(newDisplay);
    }
    // making = button work

    if (innerText === "=") {
      const result = eval(display.join(""));
      setDisplay([result]);
    }

    // making a single operators at a time
    const lastCharIndex = display[display.length - 1];

    if (operators.includes(innerText) && operators.includes(lastCharIndex)) {
      const newDisplay = [...display.slice(0, -1), innerText];
      setDisplay(newDisplay);
    }

    if (innerText.includes(".") && innerText.includes(!operators)) {
      return;
    }
  };

  return (
    <div className="container">
      <form className="calculator" onClick={handleOnClick}>
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
