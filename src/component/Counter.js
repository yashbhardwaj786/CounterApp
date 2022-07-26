import React, { useState, useEffect, useRef } from "react";

export default function Counter({id, removeLayer}) {
  const [count, setCount] = useState(0);
  const [isPaused, setPaused] = useState(false);
  const [isStop, setStop] = useState(false);
  const [pauseResumeBtn, setPauseResumeBtn] = useState('Pause Counter');
  const [restartBtn, setRestartBtn] = useState('Stop Counter');
  const timerId = useRef(null)
  
  useEffect(() => {
    
    timerId.current = setInterval(() => {
      setCount((counter) => counter + 1);
    }, 1000);
    return () => {
      clearInterval(timerId.current);
    };
  }, []);
  
  const buttonStyle1 = {
    marginTop: "20px",
    marginLeft: "10px",
    width: '120px'
  };
  
  const buttonContainer = {
    flexDirection: "row",
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
  };
  
  const stopCounter = () => {
    setStop(true)
    setRestartBtn("Restart Counter");
    setCount(0);
    clearInterval(timerId.current);
  };

  const restartCounter = () => {
    setStop(false)
    setRestartBtn("Stop Counter");
    setCount(0)
    timerId.current = setInterval(() => {
        setCount((counter) => counter + 1);
      }, 1000);
  }

  const pauseTimer = () => {
    setPaused(true)
    setPauseResumeBtn('Resume Counter')
    clearInterval(timerId.current);
  }

  const resumeTimer = () => {
    setPaused(false)
    setPauseResumeBtn('Pause Counter')
    timerId.current = setInterval(() => {
        setCount((counter) => counter + 1);
      }, 1000);
  }

  return (
    <div>
      {count}
      <div style={buttonContainer}>
        <button type="button" style={buttonStyle1} onClick= {isPaused ? resumeTimer : pauseTimer}>
          {pauseResumeBtn}
        </button>
        <button type="button" style={buttonStyle1} onClick={isStop ? restartCounter : stopCounter}>
          {restartBtn}
        </button>
        <button type="button" style={buttonStyle1} onClick={() => {removeLayer(id)}}>
          Remove
        </button>
      </div>
      <hr />
    </div>
  );
}
