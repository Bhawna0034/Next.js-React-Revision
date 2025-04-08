"use client";
import { INFINITE_CACHE } from "next/dist/lib/constants";
import React, { useState } from "react";

const ParentComponent = () => {
  const [message, setMessage] = useState("");
  console.info(message);
  return (
    <div>
      <h2 className="text-4xl font-bold mb-4">Lifting State</h2>
      <InputBox message={message} setMessage={setMessage}/>
      <MessageDialog message={message} />
    </div>
  );
};

export const InputBox = ({message, setMessage}) => {
  return (
    <div>
      <textarea
        cols={30}
        rows={5}
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Type your message here"
        className="border bg-gray-50 p-4 outline-none "
      />
    </div>
  );
};

export const MessageDialog = ({message}) => {
    return(
        <div>
            <p className="font-semibold">{message}</p>
        </div>
    )

}

export default ParentComponent;
