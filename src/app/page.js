"use client"
import Image from "next/image";
import Link from "next/link";
import Header from "./UI/Header";


export default function Home() {
  // const isLoggedIn = true;
  return (
    <main className="bg-gray-600 flex flex-col lg:flex-row items-center justify-between px-8 py-4">
      <div className="space-y-2">
        <h2 className="uppercase text-sm text-gray-300">Explore the latest in movie industries</h2>
        <h1 className=" capitalize text-3xl lg:text-5xl font-bold text-white">Unlimited Movie, TVs Shows, & More.</h1>
        <p className="text-xs text-gray-400">Discover the Top Best Movies and Dramas with a catchy subtitle like Your Ultimate Guide to Must-Watch Content.</p>
      </div>
      <Image src="/movies.png" alt="movies" height={500} width={500} />
    </main>
    
  );
}
