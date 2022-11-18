import React, { useState } from "react";
import "./App.css";

const App = () => {
  // Initializing it to zero
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount(count + 1);
  };

  const dec = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <div className="title">
        <h1>Counter App</h1>
      </div>
      <button onClick={dec}>Decrease</button>
      <span>{count}</span>
      <button onClick={inc}>Increase</button>
    </div>
  );
};

export default App;