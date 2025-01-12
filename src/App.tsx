import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Home";

function App() {
  const [Toggle, setToggle] = useState(true);

  return (
    <small>
      <button onClick={() => setToggle((p) => !p)}>TOGGLE auto refetch</button>
      {Toggle && <Home />}
    </small>
  );
}

export default App;
