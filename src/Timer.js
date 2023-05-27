import React, { useState, useEffect } from "react";

export default function Timer() {
  const [timer, setTimer] = useState(10);

  let intID;
  const handleClick = () => {
    intID = setInterval(() => {
      setTimer((prev) => prev - 1);
      if (intID) {
        if (timer < 0) {
          clearInterval(intID);
        }
      }
    }, 1000);
  };

  if (timer !== 0) {
    clearInterval(intID);
  }

  return (
    <div>
      <h1>Timer</h1>
      <h3>{timer}</h3>

      <button onClick={handleClick}>Start Timer</button>
    </div>
  );
}
