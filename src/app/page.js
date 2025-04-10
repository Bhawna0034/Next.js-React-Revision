"use client"
import Image from "next/image";

import FormReducer from "./components/useReducer/FormReducer";

export default function Home() {
  const isLoggedIn = true;
  return (
    <main className="flex items-center justify-center h-lvh">
     <FormReducer/>
    </main>
  );
}
