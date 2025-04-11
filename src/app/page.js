"use client"
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  const isLoggedIn = true;
  return (
    <main className="flex items-center justify-center h-lvh">
     <h1>Welcome to the Home Page</h1>
     <Link href="/about" className="text-blue-900 underline">About</Link>
     <Link href="/products" className="text-blue-800 underline">Products</Link>
    </main>
    
  );
}
