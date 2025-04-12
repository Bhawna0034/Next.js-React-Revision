"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
    const pathname = usePathname();
  return (
    <header className="flex items-center justify-between px-8 py-4">
      <h1 className="text-2xl font-bold text-purple-800">
        Movie <span className="text-pink-800">Store</span>
      </h1>
      <nav className="flex gap-4 items-center">
        <Link href="/" className={pathname === "/"? "text-lg text-blue-800 underline font-bold": "text-lg font-medium hover:text-blue-700"}>
          Home
        </Link>
        <Link href="/about" className={pathname === "/about" ? "text-lg text-blue-800 underline font-bold": "text-lg font-medium hover:text-blue-700"}>
          About
        </Link>
        <Link href="/movie" className={pathname === "/movie" ? "text-lg text-blue-800 underline font-bold": "text-lg font-medium hover:text-blue-700"}>
          Movie
        </Link>
        <Link
          href="/contact"
          className={pathname === "/contact" ? "text-lg text-blue-800 underline font-bold": "text-lg font-medium hover:text-blue-700"}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
