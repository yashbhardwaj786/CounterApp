import logo from "./logo.svg";
import "./App.css";
import Counter from "./component/Counter";
import { useState } from "react";

const topContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "start",
  fontSize: "300%",
  marginLeft: "20px",
  width: "100%",
  height: "100%",
};

const buttonStyle = {
  marginTop: "20px",
  marginLeft: "10px",
};

function App() {
  
  const [counterUI, setCounterUI] = useState(0);
  const uicount = new Array(counterUI).fill(0);
  console.log(uicount);
  const startCounter = () => {
    setCounterUI((c) => c + 1);
   
  };
  return (
    <div style={topContainer}>
      <div>
        <button type="button" style={buttonStyle} onClick={startCounter}>
          Start Counter
        </button>
        <hr />
      </div>
      {uicount.map((person) => {
        return <Counter key={person}/>;
      })}
    </div>
  );
}

export default App;