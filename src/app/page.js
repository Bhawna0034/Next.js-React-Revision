"use client"
import Image from "next/image";

import UseMemo from "./components/useMemo/UseMemo";

export default function Home() {
  const isLoggedIn = true;
  return (
    <main className="flex items-center justify-center h-lvh">
     <UseMemo/>
    </main>
  );
}
