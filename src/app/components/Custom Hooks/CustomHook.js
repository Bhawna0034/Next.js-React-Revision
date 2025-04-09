"use client"
import React, { useEffect, useState } from 'react'

const CustomHook = () => {
  return (
    <div>
      <StatusBar />
    </div>
  )
}

export const StatusBar = () => {
    const isOnline = useOnlineStatus();
    return <h1 className='text-2xl font-bold'>{isOnline? "✅ Online": "❌ Offline"}</h1>
}


const useOnlineStatus = () => {
    const[isOnline, setIsOnline] = useState(true);
    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);
        return(() => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        })
    },[]);

    return isOnline;
}

export default CustomHook
