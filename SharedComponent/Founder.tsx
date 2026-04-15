"use client";

import Image from "next/image";

export default function FounderSection() {
  return (
    <section className="w-full flex justify-center ">
      <div
        className="
        w-full max-w-[90rem]
        px-4 sm:px-8 lg:px-[6rem]
        py-12 sm:py-16 lg:py-[6rem]

        flex flex-col lg:flex-row
        justify-center items-stretch
        gap-8 sm:gap-12 lg:gap-[3rem]
      "
      >

        {/* LEFT CONTENT */}
        <div className="flex flex-col items-start gap-4 sm:gap-5 max-w-[48rem] w-full">

          {/* Label */}
          <span className="text-[#B3B3B3] text-[1rem] sm:text-[1.125rem] leading-[1.5rem] sm:leading-[1.75rem]">
            Founder
          </span>

          {/* Heading (H2) */}
          <h2
            className="
            text-white font-semibold
            tracking-[-0.07rem]

            text-[2rem] leading-[2.6rem]
            sm:text-[3rem] sm:leading-[3.8rem]
            lg:text-[3.5rem] lg:leading-[4.5rem]
          "
          >
            Built and led by <br />
            <span className="text-[#4D9EFF]">
              Shitanshu Kumar
            </span>
          </h2>

          {/* Description */}
          <p className="
            text-[#B3B3B3]
            text-[1rem] sm:text-[1.125rem] leading-[1.5rem] sm:leading-[1.75rem]
            max-w-[40rem]
          ">
            ₹100 Cr+ in ad spend managed across D2C brands. Every strategy that leaves Bluvo has my involvement. At this level, judgment matters more than speed.
          </p>

          {/* LOGO MARQUEE */}
          <div className="flex items-center gap-6 sm:gap-8 mt-4 flex-wrap">

            {/* Logo 1 */}
            <div className="flex flex-col justify-center items-start h-[1.75rem] py-[0.375rem]">
              <Image src="/founder/logo1.svg" alt="logo" width={80} height={24} />
            </div>

            {/* Logo 2 */}
            <div className="flex flex-col justify-center items-start h-[1.75rem] py-[0.375rem]">
              <Image src="/founder/logo2.svg" alt="logo" width={80} height={24} />
            </div>

            {/* Logo 3 */}
            <div className="flex flex-col justify-center items-start h-[1.75rem] py-[0.375rem]">
              <Image src="/founder/logo3.svg" alt="logo" width={80} height={24} />
            </div>

            <div className="flex flex-col justify-center items-start h-[1.75rem] py-[0.375rem]">
              <Image src="/founder/logo4.png" alt="logo" width={80} height={24} />
            </div>
            
            <div className="flex flex-col justify-center items-start h-[1.75rem] py-[0.375rem]">
              <Image src="/founder/logo5.svg" alt="logo" width={80} height={24} />
            </div>
          </div>

        </div>

      {/* RIGHT IMAGE CONTAINER */}
<div className="w-full lg:w-1/2 flex">
  <div
    className="
    flex flex-col justify-end items-start
    p-6 sm:p-[2.25rem]
    gap-[1.375rem]

    flex-1
    aspect-square

    rounded-[1rem]
    overflow-hidden
    relative
  "
  >

    {/* Image */}
    <Image
      src="/founder.jpg"
      alt="Founder"
      fill
      className="object-cover"
    />

  </div>
</div>

      </div>
    </section>
  );
}