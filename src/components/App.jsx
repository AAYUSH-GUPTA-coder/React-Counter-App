import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  function add() {
    setCount((prevValue) => prevValue + 1);
  }

  function subtract() {
    setCount((prevValue) => prevValue - 1);
  }

  return (
    <div className="counter">
      <button className="counter--minus" onClick={subtract}>
        –
      </button>
      <div className="counter--count">
        <h1 className="counter--count--text">{count}</h1>
      </div>
      <button className="counter--plus" onClick={add}>
        +
      </button>
    </div>
  );
}
