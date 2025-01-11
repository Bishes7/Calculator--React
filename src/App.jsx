import { useState } from "react";
import "./App.css";

function App() {
  // make a state to update the display in the calulator
  const [display, setDisplay] = useState([]);

  const operators = ["/", "+", "-", "*", "%"];
  const handleOnclick = (e) => {
    e.preventDefault();
    const { innerText } = e.target;
    setDisplay([...display, innerText]);

    if (innerText === "AC") {
      setDisplay([]);
    }

    // making the C button work
    if (innerText === "C") {
      const newDisplay = display.slice(0, -1);

      setDisplay(newDisplay);
    }

    // making = button work
    const lastCharIndex = display[display.length - 1];
    if (innerText === "=") {
      try {
        const result = [eval(display.join(""), innerText)];
        setDisplay(result);
      } catch (error) {
        setDisplay("Error");
      }
    }

    if (operators.includes(innerText) && operators.includes(lastCharIndex)) {
      setDisplay([...display.slice(0, -1), innerText]);
    }

    if (".".includes(innerText) && ".".includes(lastCharIndex)) {
      setDisplay([...display.slice(0, -1), innerText]);
    }
  };
  return (
    <div className="container">
      <form className="calculator" onClick={handleOnclick}>
        <div className="display">{display} </div>
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
