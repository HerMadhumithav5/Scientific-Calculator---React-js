import React, { useState } from "react";
import "./App.css";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");
  const [lastAnswer, setLastAnswer] = useState("");

  const handleClick = (value) => {
    switch (value) {
      case "=":
        try {
          const result = evaluate(input).toString();
          setInput(result);
          setLastAnswer(result);
        } catch {
          setInput("Error");
        }
        break;
      case "AC":
        setInput("");
        break;
      case "⌫":
        setInput((prev) => prev.slice(0, -1));
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
          if (!Number.isInteger(num) || num < 0) {
            setInput("Error");
          } else {
            const fact = (n) => (n <= 1 ? 1 : n * fact(n - 1));
            setInput(fact(num).toString());
          }
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
        setInput((prev) => prev + lastAnswer);
        break;
      case "ln":
        setInput((prev) => prev + "log("); // mathjs uses log() for natural log
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
      case "(":
        if (/[0-9)]$/.test(input)) {
          setInput((prev) => prev + "*("); // Implicit multiplication
        } else {
          setInput((prev) => prev + "(");
        }
        break;
      case ")":
        setInput((prev) => prev + ")");
        break;
      case "+":
      case ".":
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        setInput((prev) => prev + value);
        break;
      default:
        // Skip unhandled keys like %, |, Inv, Deg, Rad
        break;
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
