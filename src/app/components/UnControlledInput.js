"use client";
import React, { useRef } from "react";

const UnControlledInput = () => {
  const inputRef = useRef();
  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert(inputRef.current.value);
    console.info(inputRef.current.value);
    
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
        <input type="text" ref={inputRef} placeholder="Enter your name" />
        <button type="submit" className="bg-black text-white px-4 py-2">Submit</button>
      </form>
      
    </div>
  );
};

export default UnControlledInput;
