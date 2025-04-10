"use client"
import React, { useReducer } from "react";

const countReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
        return {count: state.count - 1};
    case "RESET":
        return {count: 0};
    default:
      return "CANNOT UPDATE";
  }
};
const CounterReducer = () => {
    const initialState = {count: 0};
  const [state, dispatch] = useReducer(countReducer, initialState);

  return (
    <div className="flex flex-col gap-3 items-center">
      <h2 className="text-3xl font-bold">{state.count}</h2>
      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
        className="bg-black text-white px-4 py-2 w-[130px]"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
        className="bg-black text-white px-4 py-2 w-[130px]"
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch({ type: "RESET" })}
        className="bg-black text-white px-4 py-2  w-[130px]"
      >
        Reset
      </button>
    </div>
  );
};

export default CounterReducer;
