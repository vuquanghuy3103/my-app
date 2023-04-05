import React, { useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
import Board from "./components/Board/Board";

function App() {
  const [board, setBoard] = useState<string[]>([
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "y",
    "z",
  ]);
  return (
    <div className="App">
      <Heading type="h1" text="Wordiee" />
      <Heading type="subtitle" text="another wordle clone" />
      <div className="board-container">
        <Board board={board} />
      </div>
    </div>
  );
}

export default App;
