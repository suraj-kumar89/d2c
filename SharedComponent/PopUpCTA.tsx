"use client";

import { useState, useEffect } from "react";

export default function PopupCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="
      fixed 

      bottom-4 sm:bottom-6
      right-0 sm:right-6
      left-0 sm:left-auto

      px-4 sm:px-0

      z-[100] 
      flex justify-center sm:block
    "
    >

      <div
        className="
        relative 

        w-full sm:w-[20rem]
        max-w-[22rem]

        p-[1.25rem] sm:p-[1.5rem]

        rounded-[1rem] 
        bg-[#131313] 
        border border-[#1f2937] 
        shadow-[0_20px_60px_rgba(0,0,0,0.5)]

        animate-slideUp
      "
      >

        {/* CLOSE BUTTON */}
        <button
          onClick={() => setVisible(false)}
          className="absolute top-3 right-3 text-[#888] hover:text-white text-sm"
        >
          ✕
        </button>

        {/* CONTENT */}
        <h3 className="text-white text-[1.05rem] sm:text-[1.125rem] font-semibold leading-[1.6rem]">
          If We Don’t See a Problem,
          <br />
          We Won’t Sell You a Page
        </h3>

        <p className="mt-3 text-[#B3B3B3] text-sm leading-relaxed">
          If your current landing page is already optimised, we will tell you that. No unnecessary work. No forced selling.
        </p>

        {/* BUTTON */}
        <button
          className="
          mt-4 sm:mt-5 
          w-full 
          py-[0.7rem] sm:py-[0.75rem] 
          rounded-[0.5rem] 
          bg-[#4D9EFF] 
          text-white 
          text-sm font-medium 
          hover:bg-[#3b82f6] 
          transition
        "
        >
          Get Free Audit
        </button>

      </div>

    </div>
  );
}