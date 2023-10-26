import { useState } from "react";
import "./App.css";
import ShowCats from "./ShowCats";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Show cats with React Query + Zustand</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <ShowCats />
    </>
  );
}

export default App;
