"use client";

import Image from "next/image";
import { useState } from "react";

type NavItem = {
  name: string;
  id: string;
};

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems: NavItem[] = [
    { name: "Projects", id: "projects" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Clients", id: "clients" },
    { name: "Pricing", id: "pricing" },
  ];

  const handleScroll = (id: string) => {
    setOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="w-full flex justify-center bg-[#131313] sticky top-0 z-50">

      {/* Container */}
      <div
        className="
        flex w-full max-w-[90rem] 
        px-4 sm:px-8 lg:px-[6rem] 
        py-4 sm:py-6 lg:py-[2rem] 
        justify-between items-center
      "
      >
        {/* Logo */}
        <div className="w-[5.75rem] h-[3rem] shrink-0">
          <Image
            src="/logo.png"
            alt="Logo"
            width={92}
            height={48}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-[2.5rem]">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleScroll(item.id)}
              className="
                relative 
                text-[#B3B3B3] 
                text-[0.875rem] 
                leading-[1.25rem] 
                font-normal 
                hover:text-white 
                transition

                after:absolute after:left-0 after:-bottom-1 
                after:w-0 after:h-[1px] after:bg-white
                hover:after:w-full after:transition-all
              "
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* CTA Button */}
          <button
            onClick={() => handleScroll("contact")}
            className="
              hidden md:flex 
              items-center justify-center 
              gap-[0.5rem]
              px-[1.25rem] py-[0.75rem] 
              rounded-[0.5rem] 
              border border-[#333] 
              bg-[#242424] 
              text-white 
              text-[0.875rem] 
              leading-[1.25rem]
              hover:bg-[#2f2f2f] 
              transition
            "
          >
            Book A Quick Call →
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>
        </div>
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

          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleScroll(item.id)}
              className="
                text-[#B3B3B3] 
                text-[0.875rem] 
                leading-[1.25rem]
                hover:text-white
              "
            >
              {item.name}
            </button>
          ))}

          <button
            onClick={() => handleScroll("contact")}
            className="
              mt-4
              flex items-center justify-center 
              gap-[0.5rem]
              px-[1.25rem] py-[0.75rem] 
              rounded-[0.5rem] 
              border border-[#333] 
              bg-[#242424] 
              text-white 
              text-[0.875rem]
            "
          >
            Book A Quick Call →
          </button>
        </div>
      </div>
    </header>
  );
}