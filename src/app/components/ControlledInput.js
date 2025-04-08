"use client"
import React, { useState } from 'react'

const ControlledInput = () => {
    const [text, setText] = useState("");
  return (
    <div>
      <input type='text' value={text} onChange={(event) => setText(event.target.value)} placeholder='Enter your name' />
      <p>Name: {text}</p>
    </div>
  )
}

export default ControlledInput
