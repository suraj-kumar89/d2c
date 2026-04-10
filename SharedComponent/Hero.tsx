"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full flex justify-center">

      {/* Container */}
      <div
        className="
        w-full max-w-[90rem] 
        px-4 sm:px-6 lg:px-8
        py-[2rem] sm:py-[3rem] lg:py-[4rem]
        flex flex-col items-center 
        gap-[2.5rem] sm:gap-[3rem]
      "
      >

        {/* Content Block */}
        <div className="flex flex-col items-center gap-[1.5rem] sm:gap-[2rem] w-full">

          {/* Heading */}
          <h1
            className="
            text-white text-center 
            font-semibold 
            tracking-[-0.08rem]

            text-[2rem] leading-[2.5rem]
            sm:text-[3rem] sm:leading-[3.5rem]
            lg:text-[4rem] lg:leading-[4.75rem]

            max-w-[90%] sm:max-w-none
          "
          >
            <span className="text-[#4D9EFF]">
              Performance Marketing for D2C <br />Brands
            </span>{" "}
            That Need More Than <br/> Campaign Management
          </h1>

          {/* Paragraph */}
          <p
            className="
            text-[#B3B3B3] text-center 
            font-normal

            text-[0.95rem] leading-[1.4rem]
            sm:text-[1.125rem] sm:leading-[1.75rem]

            max-w-[34.75rem]
            px-2 sm:px-0
          "
          >
            Most agencies are not fixing your growth. They are managing your ad account.
          </p>

        </div>

        {/* Buttons */}
        <div
          className="
          flex flex-col sm:flex-row 
          items-center justify-center 
          gap-4 w-full sm:w-auto
        "
        >
          {/* Primary Button */}
          <button
            className="
            flex items-center justify-center 
            gap-[0.5rem]

            w-full sm:w-auto
            h-[3.25rem]

            px-[1rem] 
            rounded-[0.5rem]

            bg-[#3385E6] 
            text-white
            text-[1rem] font-semibold
            leading-none
            
            shadow-[0_10px_53.4px_-19px_rgba(56,147,255,0.58)]
            hover:bg-[#2f76cc]
            transition
          "
          >
            Book a Growth Diagnosis Call →
          </button>

        </div>

        {/* Small Note */}
        <p className="text-[#34D399] text-sm mt-[-1rem] text-center">
          30 Minutes. No Pitch. Just Clarity.
        </p>

      </div>
    </section>
  );
}