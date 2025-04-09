"use client"
import Image from "next/image";
import MessageContainer from "./components/use/MessageContainer";

export default function Home() {
  const isLoggedIn = true;
  return (
    <main className="flex items-center justify-center h-lvh">
     <MessageContainer/>
    </main>
  );
}
