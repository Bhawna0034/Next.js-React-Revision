import React, { useRef } from "react";

const GetRef = () => {
  const inputRef = useRef(null);
  return (
    <div>
      <Input ref={inputRef} placeholder="Type Here" />
      <button onClick={() => inputRef.current.focus()}>
        Focus Input Button
      </button>
    </div>
  );
};


export const Input = (props) => {
    return <input {...props} />

}
export default GetRef;
