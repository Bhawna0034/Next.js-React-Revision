"use client"
import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <div className='flex flex-col gap-2 items-center'>
       <h1 className='text-5xl font-bold'>{count}</h1>
       <button onClick={() => setCount(count + 1)} className='bg-black text-white px-4 py-2 rounded-md w-[150px]'>Increment</button>
    </div>
  )
}

export default Counter
