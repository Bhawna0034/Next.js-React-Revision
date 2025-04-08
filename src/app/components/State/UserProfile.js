"use client"
import React, { useState } from 'react'

const UserProfile = () => {
    const [user, setUser] = useState({
        fullName: "Bhawna Sharma",
        age: 22,
        designation: "Frontend Developer Intern"
    });

    const updateUser = () => {
        setUser({
            ...user,
            fullName: "Hemant Sharma"
        })
    }
  return (
    <div className='border p-4 rounded-lg space-y-1'>
        <h2>FullName: {user.fullName}</h2>
        <p>Age: {user.age}</p>
        <p>Designation: {user.designation}</p>
        <button onClick={updateUser} className='bg-purple-700 text-white px-4 py-2 font-bold'>Change User</button>
    </div>
  )
}

export default UserProfile
