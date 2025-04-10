"use client"
import Image from "next/image";

import WithMemo from "./components/memo/WithMemo";

export default function Home() {
  const isLoggedIn = true;
  return (
    <main className="flex items-center justify-center h-lvh">
     <WithMemo/>
    </main>
  );
}
