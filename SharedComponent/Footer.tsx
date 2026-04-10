"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center bg-black border-t border-[#808080]/50">
      <div
        className="
        w-full max-w-[90rem]
        px-4 sm:px-8 lg:px-[6rem]
        py-8 sm:py-[2.5rem]

        flex flex-col lg:flex-row
        justify-between
        items-start lg:items-center
        gap-6 lg:gap-[2rem]
      "
      >

        {/* LEFT */}
        <div className="flex flex-col gap-3">

          {/* Logo Image */}
          <div className="relative w-[4.75rem] h-[2.5rem]">
            <Image
              src="/logo.png"
              alt="Bluvo Logo"
              fill
              className="object-contain"
            />
          </div>

          {/* Tagline */}
          <p
            className="
            text-[#737373]

            text-[0.875rem]
            leading-[1.25rem]

            max-w-[18rem]
          "
          >
            Elevating brands through strategic design excellence.
          </p>

        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-start lg:items-end gap-3 w-full lg:w-auto">

          {/* Links */}
          <div className="flex flex-wrap gap-4 sm:gap-6 text-[#737373] text-[0.875rem] leading-[1.25rem]">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <p className="text-[#737373] text-[0.875rem] leading-[1.25rem]">
            © 2024 Bluvo Digital. Excellence in Identity.
          </p>

        </div>

      </div>
    </footer>
  );
}