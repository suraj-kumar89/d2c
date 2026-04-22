"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function ContactusHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full flex justify-center top-0">
      <div
        className="
        flex w-full max-w-[90rem] 
        px-4 sm:px-8 lg:px-[6rem] 
        py-6
        items-center
      "
      >
        {/* Logo */}
       <Link href="/">
  <div className="w-[80px] h-[50px] sm:w-[110px] sm:h-[70px] shrink-0 cursor-pointer">
    <Image
      src="/logo1.png"
      alt="Logo"
      width={140}
      height={80}
      className="w-full h-full object-contain"
    />
  </div>
</Link>

        {/* CTA Button (now visible on all screens) */}
        <div className="flex items-center ml-auto">
          <Link href="/contact_us">
            <button
              className="
                flex items-center justify-center

                px-3 py-2 sm:px-5 sm:py-3   /* responsive padding */
                gap-2

                rounded-md
                border border-[#333]
                bg-[#242424]

                text-white text-xs sm:text-sm font-semibold  /* responsive text */

                transition-all duration-300
                hover:bg-[#3385E6] hover:border-[#3385E6]
                hover:scale-105
              "
            >
              Book A Quick Call
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}