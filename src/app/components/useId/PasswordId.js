"use client"
import React, { useId } from 'react'

const PasswordId = () => {
  return (
    <div className='flex flex-col gap-y-4 '>
      <h2 className='text-2xl font-bold'>Choose Password</h2>
      <PasswordField />
      <h2 className='text-2xl font-bold'>Confirm Password</h2>
      <PasswordField />
    </div>
  )
}

export const PasswordField = () => {
    const passwordId = useId();
    return(
        <div>
            <input type='password' className="border p-1 outline-none" aria-describedby={passwordId}/>
            <p id={passwordId}>The password should contain at least 18 characters</p>
        </div>
    )
}

export default PasswordId
