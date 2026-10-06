
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <div className="app">
      <div className="counter-box">
        <h1>Counter App</h1>

        <p className="count">{count}</p>

        <div className="buttons">
          <button onClick={decreaseCount}>-</button>

          <button onClick={resetCount}>Reset</button>

          <button onClick={increaseCount}>+</button>
        </div>

        <p className="message">
          Click the buttons to change the counter.
        </p>
      </div>
    </div>
  );
}

export default App;

