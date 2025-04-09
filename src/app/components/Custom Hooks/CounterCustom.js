"use client";
import React, { useState } from "react";

const CounterCustom = () => {
  const { count, increment, decrement } = useCounter(10);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-4">Custom Hooks</h1>
      <h2 className="text-3xl font-bold mb-4">{count}</h2>
      <button
        onClick={increment}
        className="bg-pink-500 text-white px-4 py-2 mb-4"
      >
        Increment
      </button>
      <button
        onClick={decrement}
        className="bg-blue-500 text-white px-4 py-2 mb-4"
      >
        Decrement
      </button>
    </div>
  );
};

export const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return { count, increment, decrement };
};

export default CounterCustom;
