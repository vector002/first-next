"use client"
import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-black text-white flex items-center justify-between px-6 py-3">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <span className="text-xl font-bold">\u25B2</span>
        <span className="text-xl font-bold">NEXT.js</span>
      </div>
      
      {/* Links */}
      <div className="hidden md:flex space-x-6">
        <a href="#" className="hover:underline">Showcase</a>
        <a href="#" className="hover:underline">Docs</a>
        <a href="#" className="hover:underline">Blog</a>
        <a href="#" className="flex items-center hover:underline">Templates <ChevronDown size={16} /></a>
        <a href="#" className="flex items-center hover:underline">Enterprise <ChevronDown size={16} /></a>
      </div>
      
      {/* Search & Buttons */}
      <div className="flex items-center space-x-4">
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search documentation..."
            className="bg-gray-800 text-white px-4 py-1 rounded-md text-sm w-48 focus:outline-none"
          />
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs">CtrlK</span>
        </div>
        <button className="bg-gray-800 px-4 py-2 rounded-md">\u25B2 Deploy</button>
        <button className="bg-white text-black px-4 py-2 rounded-md">Learn</button>
      </div>
    </nav>
  );
}
