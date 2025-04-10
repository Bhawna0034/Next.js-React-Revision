import React, { useCallback, useState } from 'react'

const CounterCallback = () => {
    const [count, setCount] = useState(0);
    const handleClick = useCallback(() => {
        console.log("Button clicked");
    },[])
  return (
    <div className='flex flex-col gap-4 items-center'>
      <h2 className='text-4xl font-bold'>{count}</h2>
      <button onClick={() => setCount(count + 1)} className='border-2 border-black bg-teal-700 text-white px-4 py-2'>Increment</button>
      <ChildComponent onClick={handleClick}/>
    </div>
  )
}

export const ChildComponent = ({onClick}) => {
    console.info("Child rendered");
    return <button onClick={onClick} className='border-2 border-black bg-teal-700 text-white font-bold px-4 py-2'>Click Me</button>
}

export default CounterCallback
