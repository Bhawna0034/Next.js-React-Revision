"use client";
import React, { useState, useRef } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    timerRef.current = setInterval((time) => {
      setTime((time) => time + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  }
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Stopwatch: {time} seconds</h2>
      <div className="flex flex-col gap-3 items-center">
        <button
          onClick={startTimer}
          className="bg-black text-white px-4 py-2 w-[130px]"
        >
          Start
        </button>
        <button onClick={stopTimer} className="bg-black text-white px-4 py-2 w-[130px]">
          Stop
        </button>
        <button onClick={resetTimer} className="bg-black text-white px-4 py-2 w-[130px]">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
