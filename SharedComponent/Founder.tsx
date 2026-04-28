"use client";

import Image from "next/image";
const MobileFounder = () => {
  return (
    <div className="block lg:hidden w-full">
    <section className="w-full px-4 py-[3.5rem] flex flex-col gap-6">

        {/* IMAGE */}
        <div className="w-full">
          <div className="relative w-full aspect-[4/5] rounded-[1rem] overflow-hidden">
            <Image
              src="/founder.png"
              alt="Founder"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>

        {/* TEXT */}
        <div className="flex flex-col items-start gap-4">

          {/* LABEL */}
          <span className="
            w-full
            text-[#7A7A7A]
            text-[0.75rem] leading-[1.125rem]
            tracking-[0.0075rem]
            capitalize
          ">
            Founder
          </span>

          {/* HEADING */}
          <h2 className="
            w-full
            text-white
            font-[600]
            text-[2.5rem] leading-[3.25rem]
            tracking-[-0.025rem]
          ">
            Built and led by <br />
            <span className="text-[#4D9EFF]">
              Shitanshu Kumar
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="
            w-full max-w-[22rem]
            text-[#B3B3B3]
            text-[0.875rem] leading-[1.25rem]
          ">
            ₹100 Cr+ in ad spend managed across D2C brands. Every strategy that leaves Bluvo has my involvement. At this level, judgment matters more than speed.
          </p>

        </div>

        {/* 🔥 LOGO MARQUEE (FIXED VERSION) */}
        <div className="w-full overflow-hidden mt-2">

          <div className="flex items-center gap-8 animate-marquee">

            {[
              "/founder/logo1.svg",
              "/founder/logo2.svg",
              "/founder/logo3.svg",
              "/founder/logo4.png",
              "/founder/logo5.svg",
            ].map((src, i) => (
              <div
                key={i}
                className="flex items-center justify-center h-[40px] min-w-[100px]"
              >
                <img
                  src={src}
                  alt="logo"
                  className="h-full w-auto object-contain opacity-90"
                />
              </div>
            ))}

            {/* duplicate for infinite scroll */}
            {[
              "/founder/logo1.svg",
              "/founder/logo2.svg",
              "/founder/logo3.svg",
              "/founder/logo4.png",
              "/founder/logo5.svg",
            ].map((src, i) => (
              <div
                key={"dup-" + i}
                className="flex items-center justify-center h-[40px] min-w-[100px]"
              >
                <img
                  src={src}
                  alt="logo"
                  className="h-full w-auto object-contain opacity-90"
                />
              </div>
            ))}

          </div>

        </div>

      </section>

    </div>
  );
};

const DesktopFounder = () => {
  return (
    <div className="hidden lg:block">
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
    h-[400px] sm:h-[450px] lg:h-[550px]
    w-[350px] sm:w-[400px] lg:w-[500px ]
    flex-1
    aspect-square

    rounded-[1rem]
    overflow-hidden
    relative
  "
            >

              {/* Image */}
              <Image
                src="/founder.png"
                alt="Founder"
                fill
                className="object-cover"
              />

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
export default function FounderSection() {
  return (
    <>
      <MobileFounder />
      <DesktopFounder />
    </>
  );
}