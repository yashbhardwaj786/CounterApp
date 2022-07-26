import "./App.css";
import Counter from "./component/Counter";
import { useState, useEffect } from "react";

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

function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}

function App() {
  
  const [counterUI, setCounterUI] = useState(0);
  const [uicount, setUicount] = useState([]);
  // const uicount = Array(counterUI).fill().map((_, index) => index);

  function removeLayer(id){
    let newArr = uicount.filter(value => value !== id);
    setUicount(newArr)
  }

  useEffect(() => {
    if (counterUI > 0) {
      setUicount([...uicount,  makeid(5)]);    
    }
  
  }, [counterUI]);

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
        return <Counter key={person} id={person} removeLayer={removeLayer}/>;
      })}
    </div>
  );
}

export default App;