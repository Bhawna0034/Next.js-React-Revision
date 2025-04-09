"use client"
import React, { useRef } from 'react'

const CounterRef = () => {
    const ref = useRef(0);

    const handleClick = () => {
        ref.current = ref.current + 1;
        // console.info(ref.current);
        alert('You clicked ' + ref.current + ' times');
    }
  return (
    <div>
      <button onClick={handleClick} className='bg-black text-white px-4 py-2'>Click Me!</button>
    </div>
  )
}

export default CounterRef
