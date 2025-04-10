"use client"
import Image from "next/image";

import UseMemo from "./components/useMemo/UseMemo";
import CounterCallback from "./components/useCallback/CounterCallback";

export default function Home() {
  const isLoggedIn = true;
  return (
    <main className="flex items-center justify-center h-lvh">
     <h1>Welcome to the Home Page</h1>
    </main>
    
  );
}
