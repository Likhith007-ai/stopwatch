import { useEffect, useRef, useState } from "react";
import "./App.css";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!running && time !== 0) {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [running, time]);

  const startHandler = () => {
    setRunning(true);
  };

  const stopHandler = () => {
    setRunning(false);
  };

  const resetHandler = () => {
    setRunning(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return ` ${hours > 0 ? `${hours}:` : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div>
      <div>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "80px",
            color: "darkgrey",
            fontFamily: "revert-layer",
          }}
        >
          Stopwatch
        </h1>
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "50px",
            color: "darkgrey",
            fontFamily: "revert-layer",
          }}
        >
          Time: {formatTime(time)}
        </h2>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "-90px",
        }}
        className="button-styling"
      >
        <button onClick={startHandler}>Start</button>
        <button onClick={stopHandler}>Stop</button>
        <button onClick={resetHandler}>Reset</button>
      </div>
      <p style={{ color: "white", fontFamily: "cursive", textAlign: "center" }}>
        Developed by Likhith❤️
      </p>
    </div>
  );
};

export default Stopwatch;
