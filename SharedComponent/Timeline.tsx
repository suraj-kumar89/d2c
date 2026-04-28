"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
const MobileView = () => {
  return (
    <div className="block sm:hidden w-full">

      <section className="w-full px-4 py-[3rem]">


        <div className="w-full flex flex-col items-center text-center">

          {/* Heading */}
          <h2 className="
    w-full
    text-white
    font-[600]
    tracking-[-0.025rem]
    text-[2.5rem] leading-[3.25rem]
  ">
            This is where <br />
            <span className="text-[#4D9EFF]">Bluvo</span> {" "}
            operates.
          </h2>

          {/* Paragraph */}
          <p className="
    mt-4
    max-w-[22.25rem]
    text-[#B3B3B3]
    text-[1rem] leading-[1.5rem]
    font-normal
  ">
            We stay involved where performance is decided. Not just where it is reported.
          </p>

        </div>

        {/* Section Heading + Button */}
        <div className="flex flex-col items-center text-center gap-4 mt-[3rem]">

          {/* Heading */}
          <h3 className="
    w-full
    text-white
    font-[600]
    tracking-[-0.025rem]
    text-[2.5rem] leading-[3.25rem]
  ">
            What the first 60 days look like
          </h3>

          {/* Button */}
          <a
            href="/contact_us"
            className="
      flex items-center justify-center gap-[0.5rem]
      px-[1.5rem] py-[0.875rem]
      rounded-[0.75rem]
      bg-[#3385E6]
      text-white
      text-[1rem] leading-[1.5rem] font-[600]
      shadow-[0_10px_53.4px_-19px_rgba(56,147,255,0.58)]
      w-fit
    "
          >
            Get Started

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M13 6l6 6-6 6"
              />
            </svg>
          </a>

        </div>
        <div className="relative mt-[3rem] flex flex-col gap-[2rem]">

          {[
            {
              title: "The Diagnosis",
              time: "Weeks 1 to 2",
              text: "We map where money is being lost, which channels are actually profitable, and what your true CAC and contribution margins look like.",
            },
            {
              title: "The Rebuild",
              time: "Weeks 3 to 4",
              text: "We restructure campaigns around your real economics. Fix what is leaking.",
            },
            {
              title: "The System Performance stabilises",
              time: "Weeks 5 to 8",
              text: "Scaling decisions come from clarity. Reporting shifts from 'what happened' to 'what to do next.'",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="sticky top-0 mb-6"
              style={{ zIndex: 10 + i }}
            >
              <div className="p-5 rounded-[1rem] bg-[rgba(28,27,27,1)] shadow-[0_10px_13px_0_#131313]">

                <span className="text-[#4D9EFF] text-[0.7rem] font-semibold uppercase tracking-wide">
                  {card.time}
                </span>

                <h4 className="text-white font-semibold text-[1.1rem] mt-2">
                  {card.title}
                </h4>

                <p className="text-[#A79D9A] text-sm mt-2">
                  {card.text}
                </p>

              </div>
            </div>
          ))}

          {/* Final Card */}
          <div className="sticky top-0" style={{ zIndex: 50 }}>
            <div className="p-5 rounded-[1rem] bg-[#34D399] shadow-[0_10px_13px_0_#131313]">
              <p className="text-[#0F172A] font-semibold text-[1.1rem]">
                Within 60 days, you will have more control over your growth than you
                have had in the last 12 months.
              </p>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
};
const DesktopView = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll("[data-card]");

      let current = 0;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();

        if (rect.top <= 120) {
          current = index;
        }
      });

      setActiveIndex(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="hidden sm:block">
      <section className="w-full flex justify-center">
        <div className="w-full max-w-[90rem] px-4 sm:px-6 lg:px-8 py-[5rem] lg:py-[3rem] flex flex-col gap-[4rem]">

          {/* Top Heading */}
          <div className="flex flex-col items-center text-center gap-3">
            <h2 className="text-white font-semibold tracking-[-0.08rem]
            text-[2.5rem] leading-[3rem]
            sm:text-[3.25rem] sm:leading-[3.75rem]
            lg:text-[4rem] lg:leading-[4.75rem]">
              This is where{" "}
              <span className="text-[#4D9EFF]">Bluvo</span> <br />
              operates.
            </h2>

            <p className="text-[#B3B3B3] text-[1rem] sm:text-[1.125rem] leading-[1.75rem] max-w-[28rem]">
              We stay involved where performance is decided. Not just where it is reported.
            </p>
          </div>

          {/* Main Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[3rem]">

            {/* Left */}
            {/* Left */}
            <div className="h-fit sticky top-[120px] self-start flex flex-col items-start gap-4">
              <h3 className="text-white font-semibold tracking-[-0.07rem]
              text-[2.5rem] leading-[3.2rem]
              sm:text-[3rem] sm:leading-[3.8rem]
              lg:text-[3.5rem] lg:leading-[4.5rem]
              max-w-[28rem]">
                What the first 60 days look like
              </h3>

              import Link from "next/link";

              <Link
                href="/contact_us"
                className="
    flex justify-center items-center
    gap-2
    px-[1.5rem] py-[0.875rem]
    rounded-[0.75rem]
    bg-[#3385E6]
    text-white text-center
    font-semibold text-[1rem] leading-[1.5rem]
    shadow-[0_10px_53.4px_-19px_rgba(56,147,255,0.58)]
    hover:bg-[#2f78cf] transition-all duration-200
  "
              >
                <span>Get Started</span>

                {/* Arrow Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M13 6l6 6-6 6"
                  />
                </svg>
              </Link>
            </div>


            {/* Right Timeline */}
            <div className="relative flex flex-col gap-[2rem]">

              {[0, 1, 2, 3].map((index) => {
                const isSuccess = index === 3;
                const distance = index - activeIndex;
                const isBehind = distance < 0;
                const depth = Math.abs(distance);
                return (
                  <div
                    key={index}
                    className={`
          sticky
          flex w-full max-w-[30.875rem]
          p-6 gap-8
          rounded-[1rem]
          shadow-[0_10px_13px_0_#131313]
          ${index === 1 || index === 3 ? "ml-auto" : ""}
          ${isSuccess ? "bg-[#34D399]" : "bg-[rgba(28,27,27,1)]"}
        `}
                    style={{
                      top: `${80 + index * 80}px`,
                      zIndex: 10 + index,

                      // 👇 KEY PART (only blur when covered)
                      filter: isBehind ? `blur(${depth * 2}px)` : "blur(0px)",

                      opacity: isBehind ? 1 - depth * 0.2 : 1,

                      transform: isBehind
                        ? `scale(${1 - depth * 0.8})`
                        : "scale(1)",
                    }}
                  >
                    {isSuccess ? (
                      <p className="text-[#0F172A] font-semibold text-[1.25rem] leading-[1.75rem]">
                        Within 60 days, you will have more control over your growth than you
                        have had in the last 12 months.
                      </p>
                    ) : (
                      <div className="flex flex-col w-full gap-3">

                        <div className="flex justify-between items-center">
                          <span className="text-[#4D9EFF] text-[0.75rem] font-semibold tracking-[0.075rem] uppercase">
                            {index === 0 && "WEEKS 1 TO 2"}
                            {index === 1 && "WEEKS 3 TO 4"}
                            {index === 2 && "WEEKS 5 TO 8"}
                          </span>

                          <span className="px-3 py-1 border border-[#082B59] rounded-full text-xs text-[#A79D9A]">
                            Phase {index + 1}
                          </span>
                        </div>

                        <h4 className="text-[#E5E2E1] font-semibold text-[1.25rem]">
                          {index === 0 && "The Diagnosis"}
                          {index === 1 && "The Rebuild"}
                          {index === 2 && "The System Performance stabilises"}
                        </h4>

                        <p className="text-[#A79D9A] text-sm">
                          {index === 0 &&
                            "We map where money is being lost, which channels are actually profitable, and what your true CAC and contribution margins look like."}

                          {index === 1 &&
                            "We restructure campaigns around your real economics. Fix what is leaking."}

                          {index === 2 &&
                            "Scaling decisions come from clarity. Reporting shifts from 'what happened' to 'what to do next.'"}
                        </p>

                      </div>
                    )}
                  </div>
                );
              })}

            </div>




          </div>
        </div>
      </section>

    </div>
  );
};


export default function TimelineSection() {
  return (
    <div className="relative w-full flex flex-col items-center">

      <MobileView />
      <DesktopView />

    </div>
  );
}