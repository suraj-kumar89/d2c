"use client";

import Image from "next/image";

export default function ClientsSection() {
  const logos = [
    "/ourclients/img1.svg",
    "/ourclients/img2.svg",
    "/ourclients/img3.svg",
    "/ourclients/img4.svg",
    "/ourclients/img5.svg",
  ];

  return (
    <section className="w-full flex justify-center ">
      <div
        className="
        w-full max-w-[90rem]
        px-4 sm:px-8 lg:px-[6rem]
        py-12 sm:py-16 lg:py-[6rem]
        flex flex-col items-center
        gap-[3rem]
      "
      >

        {/* Heading */}
        <div className="text-center flex flex-col gap-3 max-w-[50rem]">
          <span className="text-[#A79D9A] text-sm">
            Our Clients
          </span>

          <h2
            className="
            text-white font-semibold text-center
            tracking-[-0.07rem]

            text-[2rem] leading-[2.6rem]
            sm:text-[3rem] sm:leading-[3.8rem]
            lg:text-[3.5rem] lg:leading-[4.5rem]
          "
          >
            Brands we have <br />
            worked closely with
          </h2>
        </div>

        {/* FLEX GRID */}
        <div
          className="
          w-full max-w-[70rem]
          flex flex-wrap justify-center
          gap-4 sm:gap-6
        "
        >

          {logos.map((logo, i) => (
            <div
              key={i}
              className="
               flex flex-col justify-center items-center

    p-4 sm:p-[2.25rem]
    h-[5.5rem] sm:h-[7rem]

    w-full
    sm:w-[calc(50%-0.75rem)]
    lg:w-[calc(25.33%-1rem)]

    rounded-[1rem]
    bg-[#1C1B1B]

    transition-all duration-300
    hover:bg-[#222]
    hover:shadow-[0_10px_25px_0_#0b0b0b]
  "
            >
              <div className="relative w-[100px] sm:w-[120px] h-[32px] sm:h-[40px]">
                <Image
                  src={logo}
                  alt="client logo"
                  fill
                  className="
                  object-contain
                  opacity-80
                  grayscale
                  hover:grayscale-0
                  transition duration-300
                "
                />
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}