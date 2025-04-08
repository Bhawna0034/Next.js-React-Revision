"use client";
import React, { useEffect, useState } from "react";

const CounterEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.info("Count: ", count);
  }, [count]);
  return (
    <div className="flex flex-col gap-4 items-center">
      <h2 className="text-4xl font-bold">{count}</h2>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-black text-white px-4 py-2 "
      >
        Increment
      </button>
    </div>
  );
};

export default CounterEffect;
