import logo from "./logo.svg";
import "./App.css";
//import Timer2 from './components/Timer2';
import Timer from "./components/Timer";
import { useState } from "react";

function App() {
  const [showTimer, setShowTimer] = useState(true);
  //a fenti sor alább kifejtve:
  //const state = useState(true)
  //const showTimer = state[0]
  //const setShowTimer = state[1]

  //a showtimer az állapotot adja vissza,a setshowtimer pedig a függvényt, ami megváltoztatja az állapotot

  if (5 < 3 && 10 < 20) {
    //lusta értékelés, az első nem igaz, így a 2.nem teljesül.{showTimer ? <Timer />} ez teljesülne, igaz a feltétel
  }

  return (
    <div className="App">
      <header className="App-header">
        {showTimer ? <Timer /> : <div>no timer</div>}
        <button
          onClick={() => {
            setShowTimer(false);
          }}
        >
          hide
        </button>

        <Timer2 />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
