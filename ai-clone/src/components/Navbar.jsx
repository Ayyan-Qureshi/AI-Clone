import React from 'react';
import Image from 'next/image';
import logo from '../assets/logo.png'; // Make sure this path points to src/assets/logo.png

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 w-full max-w-7xl mx-auto bg-transparent relative z-20">
      {/* Brand Logo */}
      <div className="flex items-center">
        <a href="#" className="flex items-center">
          <Image 
            src={logo} 
            alt="Lovable Logo" 
            priority
            style={{ width: '130px', height: 'auto' }} 
            className="object-contain"
          />
        </a>
      </div>

      {/* Center Links */}
      <div className="hidden md:flex items-center space-x-7 text-[14px] text-neutral-800 font-medium">
        <a href="#" className="hover:text-black transition-colors flex items-center gap-1">
          Solutions <span className="text-[10px] text-neutral-500">▾</span>
        </a>
        <a href="#" className="hover:text-black transition-colors flex items-center gap-1">
          Resources <span className="text-[10px] text-neutral-500">▾</span>
        </a>
        <a href="#" className="hover:text-black transition-colors">
          Community
        </a>
        <a href="#" className="hover:text-black transition-colors">
          Enterprise
        </a>
        <a href="#" className="hover:text-black transition-colors">
          Pricing
        </a>
        <a href="#" className="hover:text-black transition-colors">
          Security
        </a>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-3 text-[13px]">
        <button className="px-3.5 py-1.5 text-neutral-800 hover:text-black font-medium transition-colors">
          Log in
        </button>
        <button className="px-3.5 py-1.5 bg-neutral-950 text-white rounded-lg font-medium hover:bg-neutral-800 transition-colors shadow-sm">
          Get started
        </button>
      </div>
    </nav>
  );
}