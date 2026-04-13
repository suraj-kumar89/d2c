"use client";

import Image from "next/image";

export default function LogoMarquee() {
  const logos = [
    "/logo/logo1.png",
    "/logo/logo2.png",
    "/logo/logo3.png",
    "/logo/logo4.png",
    "/logo/logo5.png",
    "/logo/logo6.png",
  ];

  return (
    <section className="w-full py-1 sm:py-3 overflow-hidden mt-4 sm:mt-6 lg:mt-[-3rem]">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Heading */}
        <p className="text-[1rem] sm:text-xs text-[#B3B3B3] mb-8 sm:mb-10 tracking-wide">
          Trusted By Brands Spending Lakhs On Ads Every Month
        </p>

        {/* Marquee */}
        <div className="relative overflow-hidden">

          {/* Fade Left */}
          <div className="absolute left-0 top-0 w-12 sm:w-20 lg:w-24 h-full bg-gradient-to-r from-[#131313] to-transparent z-10" />

          {/* Fade Right */}
          <div className="absolute right-0 top-0 w-12 sm:w-20 lg:w-24 h-full bg-gradient-to-l from-[#131313] to-transparent z-10" />

          {/* Track */}
          <div className="flex items-center gap-10 sm:gap-16 lg:gap-20 animate-marquee whitespace-nowrap">

            {[...logos, ...logos].map((logo, index) => (
              
              <div
                key={index}
                className="
                  flex flex-col justify-center items-start 
                  px-[0.625rem] py-[0.125rem] gap-[0.625rem] 
                  hover:opacity-100 transition
                "
              >
                
                {/* LOGO IMAGE */}
                <div className="w-[6rem] sm:w-[7.65625rem] aspect-[35/8] flex items-center">
                  <Image
                    src={logo}
                    alt={`logo-${index}`}
                    width={122}
                    height={28}
                    className="w-full h-full object-contain"
                  />
                </div>

              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}