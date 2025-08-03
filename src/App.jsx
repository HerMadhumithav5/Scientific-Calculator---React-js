import React, { useState } from "react";
import "./App.css";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    switch (value) {
      case "=":
        try {
          setInput(evaluate(input).toString());
        } catch {
          setInput("Error");
        }
        break;
      case "AC":
        setInput("");
        break;
      case "⌫":
        setInput(input.slice(0, -1));
        break;
      case "π":
        setInput((prev) => prev + Math.PI.toFixed(6));
        break;
      case "e":
        setInput((prev) => prev + Math.E.toFixed(6));
        break;
      case "√":
        setInput((prev) => prev + "sqrt(");
        break;
      case "x!":
        try {
          const num = parseFloat(input);
          const fact = (n) => (n <= 1 ? 1 : n * fact(n - 1));
          setInput(fact(num).toString());
        } catch {
          setInput("Error");
        }
        break;
      case "xʸ":
        setInput((prev) => prev + "^");
        break;
      case "EXP":
        setInput((prev) => prev + "e");
        break;
      case "Ans":
        setInput((prev) => prev);
        break;
      case "ln":
        setInput((prev) => prev + "log(");
        break;
      case "log":
      case "sin":
      case "cos":
      case "tan":
        setInput((prev) => prev + value + "(");
        break;
      case "÷":
        setInput((prev) => prev + "/");
        break;
      case "×":
        setInput((prev) => prev + "*");
        break;
      case "−":
        setInput((prev) => prev + "-");
        break;
      case "+":
      case ".":
      case "(":
      case ")":
      case "%":
      case "|":
      case "Rad":
      case "Deg":
      case "Inv":
        break;
      default:
        setInput((prev) => prev + value);
    }
  };

  const buttons = [
    "Rad",
    "Deg",
    "x!",
    "(",
    ")",
    "%",
    "AC",
    "Inv",
    "sin",
    "ln",
    "7",
    "8",
    "9",
    "÷",
    "π",
    "cos",
    "log",
    "4",
    "5",
    "6",
    "×",
    "e",
    "tan",
    "√",
    "1",
    "2",
    "3",
    "−",
    "Ans",
    "EXP",
    "xʸ",
    "0",
    ".",
    "=",
    "+",
  ];

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly className="display" />
      <div className="buttons">
        {buttons.map((btn, index) => (
          <button
            key={index}
            onClick={() => handleClick(btn)}
            className={btn === "=" ? "equal" : ""}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
