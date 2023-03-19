import React, { useState } from "react";
import "./App.css";

function App() {
  let deg = 6;
  const [hh, setHH] = useState(0);
  const [mm, setMM] = useState(0);
  const [ss, setSS] = useState(0);

  setInterval(() => {
    let day = new Date();
    let newhh = day.getHours() * 30;
    setHH(newhh);
    let newmm = day.getMinutes() * deg;
    setMM(newmm);
    let newss = day.getSeconds() * deg;
    setSS(newss);
  }, 100);

  return (
    <div className="background">
      <div className="watch1">Omega Speedmaster Professional</div>
      <div className="clock">
        <div className="hour">
          <div
            className="hr"
            id="hr"
            style={{ transform: `rotateZ(${hh + mm / 12}deg)` }}
          ></div>
        </div>
        <div className="min">
          <div
            className="mn"
            id="mn"
            style={{ transform: `rotateZ(${mm}deg)` }}
          ></div>
        </div>
        <div className="sec">
          <div
            className="sc"
            id="sc"
            style={{ transform: `rotateZ(${ss}deg)` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
