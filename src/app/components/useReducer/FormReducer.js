"use client";
import React, { useReducer, useState } from "react";

const intitalState = { name: "Bhawna Sharma", age: 22 };
const formReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_AGE":
      return { name: state.name, age: state.age + 1 };
    case "CHANGE_NAME":
      return { name: action.payload, age: state.age };
    default:
      return "Sorry! Not able to fulfull your request";
  }
};

const FormReducer = () => {
  const [state, dispatch] = useReducer(formReducer, intitalState);
  const [inputName, setInputChange] = useState("");
  const handleChangeName = () => {
    dispatch({ type: "CHANGE_NAME", payload: inputName });
    setInputChange("");
  };
  return (
    <div className="flex flex-col gap-4 items-center">
      <h2 className="text-3xl font-bold">Hi, {state.name}</h2>
      <input
        type="text"
        name="name"
        value={inputName}
        onChange={() => setInputChange(event.target.value)}
        placeholder="Enter your Name"
        className="border p-1 outline-none"
      />
      <button
        onClick={handleChangeName}
        className="border-2 border-black bg-teal-700 text-white font-bold px-4 py-2"
      >
        Change Name
      </button>
      <button
        onClick={() => dispatch({ type: "INCREMENT_AGE" })}
        className="border-2 border-black bg-teal-700 text-white font-bold px-4 py-2"
      >
        Increment Age
      </button>
      <p>Here is the incrment age {state.age}</p>
    </div>
  );
};

export default FormReducer;
