"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
type NavItem = {
    name: string;
    id: string;
};

export default function ContactusHeader() {
    const [open, setOpen] = useState(false);



    const handleScroll = (id: string) => {
        setOpen(false);
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className="w-full flex justify-center top-0">
            {/* Container */}
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
                    <div className="w-[110px] h-[70px] shrink-0 cursor-pointer">
                        <Image
                            src="/logo1.png"
                            alt="Logo"
                            width={140}
                            height={80}
                            className="w-full h-full object-contain"
                        />
                    </div>
                </Link>

                {/* RIGHT SIDE (Nav + CTA) */}
                <div className="hidden md:flex items-center gap-8 ml-auto">


                    {/* CTA Button */}

                    <Link href="/contact_us">
                        <button
                            className="
                flex items-center justify-center
                px-5 py-3
              gap-2
              rounded-md
              border border-[#333]
              bg-[#242424]
              text-white text-sm font-semibold
              transition-all duration-300
              hover:bg-[#3385E6] hover:border-[#3385E6]
              hover:scale-105
            "
                        >
                            Book A Quick Call
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="
            md:hidden ml-auto text-white text-2xl
            transition-transform duration-200
            hover:scale-110
          "
                    onClick={() => setOpen(true)}
                >
                    ☰
                </button>
            </div>

            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 z-[55] transition-opacity duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={() => setOpen(false)}
            />

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-[75%] max-w-[20rem] bg-[#131313] z-[60] 
        transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="flex flex-col items-start gap-6 p-6 mt-16">


                    {/* Mobile CTA */}
                    <Link
                        href="/contact_us"
                        className="
    mt-4
    flex items-center justify-center
    px-5 py-3
    gap-2
    rounded-lg
    border border-[#333]
    bg-[#242424]
    text-white text-sm font-semibold
    transition-all duration-300
    hover:bg-[#3385E6] hover:border-[#3385E6]
  "
                    >
                        Book A Quick Call
                    </Link>
                </div>
            </div>
        </header>
    );
}