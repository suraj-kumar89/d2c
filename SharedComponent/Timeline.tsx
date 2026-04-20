"use client";
import { useEffect, useState } from "react";




export default function TimelineSection() {
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
  );
}