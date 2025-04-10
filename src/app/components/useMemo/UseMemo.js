import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [items, setItems] = useState(["Apple", "Banana", "Mango", "Orange"]);
    const filteringItems = useMemo(() => {
        console.info("Filtering Items....");
        return items.filter((item) => item.startsWith("M"));
    },[]);
  return (
    <div>
      <h1 className='text-4xl font-bold mb-2'>useMemo() Hook</h1>
      <h2 className='text-xl font-medium'>Filtering Items....</h2>
      {filteringItems.map((item, index) => {
        return <p key={index}>{item}</p>
      })}
    </div>
  )
}

export default UseMemo
