"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navber() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-[#F5F5F5]">
    <div className="mx-auto max-w-[1440px]">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Image
          src="/Frame-logo.png"
          alt="frame"
          width={24}
          height={24}
        />
        <div className="hidden md:flex items-center gap-4 font-Helvetica-Neue">
          <Link href="/store" className="text-sm md:text-base">Find a Store</Link>
          <span className="text-gray-500 hidden md:inline">|</span>
          <Link href="/help" className="text-sm md:text-base">Help</Link>
          <span className="text-gray-500 hidden md:inline">|</span>
          <Link href="/join" className="text-sm md:text-base">Join Us</Link>
          <span className="text-gray-500 hidden md:inline">|</span>
          <Link href="/login" className="text-sm md:text-base">Sign Up</Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="flex items-center justify-center w-10 h-10 text-black bg-gray-200 rounded focus:outline-none hover:bg-gray-300"
          >
            ☰
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-2 bg-white p-4">
          <Link href="/store" className="text-black">Find a Store</Link>
          <Link href="/help" className="text-black">Help</Link>
          <Link href="/join" className="text-black">Join Us</Link>
          <Link href="/login" className="text-black">Sign Up</Link>
        </div>
      )}
    </div>
    </div>
  );
}