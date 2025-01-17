"use client"
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row bg-orange-500 p-4 md:p-2 items-center fixed top-0 w-full z-50">
      <header className="w-full md:w-auto text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-extrabold text-yellow-300 py-2 md:ml-10">
          Café <span className="text-neutral-50">Grandeur</span>
        </h1>
      </header>

      {/* Hamburger Button */}
      <div className="ml-auto md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Navigation Links */}
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } mt-4 md:mt-0 md:flex md:ml-auto w-full md:w-auto`}
      >
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12 lg:space-x-24 justify-center">
          <li className="lg:text-xl text-xs md:text-xl cursor-pointer font-bold hover:text-white hover:underline transition ease-out duration-500 hover:shadow-inner transform hover:scale-110">
            <Link href="/">Home</Link>
          </li>
          <li className="lg:text-xl text-xs md:text-xl cursor-pointer font-bold hover:text-white hover:underline transition ease-out duration-500 hover:shadow-inner transform hover:scale-110">
            <Link href="/about">About</Link>
          </li>
          <li className="lg:text-xl text-xs md:text-xl cursor-pointer font-bold hover:text-white hover:underline transition ease-out duration-500 hover:shadow-inner transform hover:scale-110">
            <Link href="/menu">Menu</Link>
          </li>
          <li className="lg:text-xl text-xs md:text-xl cursor-pointer font-bold hover:text-white hover:underline transition ease-out duration-500 hover:shadow-inner transform hover:scale-110">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
