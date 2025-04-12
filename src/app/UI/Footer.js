import Link from "next/link";
import React from "react";
import { FaLinkedinIn, FaGithub, FaHackerrank } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 flex flex-col justify-between px-8 py-4">
      <div className="  flex gap-4 items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Movie Store</h1>
          <p className="text-md text-gray-300">
            Unlimited Movie, TVs Shows, & More
          </p>
        </div>
        <nav className="flex flex-col gap-2 justify-center">
          <Link href="/" className="text-md text-gray-400">
            Home
          </Link>
          <Link href="/about" className="text-md text-gray-400">
            About
          </Link>
          <Link href="/movie" className="text-md text-gray-400">
            Movie
          </Link>
          <Link href="/contact" className="text-md text-gray-400">
            Contact
          </Link>
        </nav>
        <div>
          <h2 className="text-lg text-gray-200 font-semibold">
            Subscribe to NewsLetter
          </h2>
          <div className="flex gap-1 items-center">
            <input
              type="email"
              placeholder="example@gmail.com"
              className="border p-2 text-white rounded-lg outline-none"
            />
            <button className="bg-white px-4 py-2 font-semibold rounded-lg">
              Join
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <Link href="www.linkedin.com/in/bhawna0034">
            <FaLinkedinIn className="text-gray-300" size={20} />
          </Link>
          <Link href="https://github.com/Bhawna0034">
            <FaGithub className="text-gray-300" size={20} />
          </Link>
          <Link href="https://www.hackerrank.com/profile/bhawnasharma7216">
            <FaHackerrank className="text-gray-300" size={20} />
          </Link>
        </div>
      </div>
      <div className="flex gap-4 items-center justify-between">
        <p className="text-xs text-gray-300">
          &copy; 2025 Movie Store Designed by{" "}
          <span className="text-white font-semibold">Bhawna Sharma</span>{" "}
        </p>
        <div className="flex items-center gap-x-3">
          <p className="text-xs text-gray-300">Privacy Policy</p>
          <p className="text-xs text-gray-300">Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
