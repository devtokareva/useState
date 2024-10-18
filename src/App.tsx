import React, { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoList from "./components/Todo/Todo";

function App(): JSX.Element {
  const initialCount = Number(localStorage.getItem("count") || 0);

  const [count, setCount] = useState<number>(initialCount);
  // const [state, setState] = useState(initialValue);

  useEffect(() => {
    localStorage.setItem("count", count.toString());
  }, [count]);

  function incrementHandler(): void {
    setCount((prevCount) => prevCount + 1);
    // setCount(count + 1);
  }

  function decrementHandler(): void {
    setCount((prevCount) => prevCount - 1);
  }

  function resetCountHandler(): void {
    setCount(0);
    localStorage.removeItem("count");
  }

  console.log("RENDER APP");

  return (
    <React.Fragment>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h1>{count}</h1>
        <button onClick={incrementHandler}>++</button>
        <button onClick={decrementHandler}>--</button>
        <button onClick={resetCountHandler}>RESET</button>
      </div>
      <TodoList />
    </React.Fragment>
  );
}

export default App;
