"use client"
import React, { memo, useState } from 'react'

const WithMemo = () => {
    const [count, setCount] = useState(0);
  return (
    <div className='flex flex-col gap-4 items-center'>
      <h2 className='text-4xl font-bold'>{count}</h2>
      <button onClick={() => setCount(count + 1)} className='border-2 border-black bg-teal-700 text-white px-4 py-2'>Increment</button>
      <ChildComponent name="Bhawna Sharma" />
    </div>
  )
}

export const ChildComponent = memo(({name}) => {
    console.info("Child Component Rendered");
    return <h1>Hello, {name}</h1>

})

export default WithMemo
