"use client";

export default function ComparisonSection() {
  return (
    <section className="w-full flex justify-center bg-black">
      <div
        className="
        w-full max-w-[90rem]
        px-4 sm:px-6 lg:px-8
        py-[3rem] sm:py-[3rem] lg:py-[3rem]
        flex flex-col items-center
        gap-[3rem]
      "
      >
        {/* Heading + Subtitle */}
        <div className="flex flex-col items-center text-center gap-3 w-full">
          <h2
            className="
            text-white
            font-[600]
            tracking-[-0.07rem]

            text-[2.2rem] leading-[3rem]
            sm:text-[2.8rem] sm:leading-[3.8rem]
            lg:text-[3.5rem] lg:leading-[4.5rem]
          "
          >
            Most performance marketing <br />
            is optimisation{" "}
            <span className="text-[#4D9EFF]">theatre.</span>
          </h2>

          <p className="text-[#A79D9A] text-[0.95rem] leading-[1.5rem]">
            It looks like progress. It rarely is.
          </p>
        </div>

        {/* Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-[1.5rem]">

          {/* Left Card */}
          <div
            className="
            flex flex-col items-start
            gap-[1.25rem]

            p-[2.25rem]

            rounded-[0.75rem]
            border border-[#4D4D4D]
          "
          >
            {/* Title */}
            <h3
              className="
              text-[#FF7F7A]
              font-[600]
              tracking-[-0.02rem]

              text-[1.5rem] leading-[2rem]
              sm:text-[1.75rem] sm:leading-[2.4rem]
              lg:text-[2rem] lg:leading-[2.75rem]
            "
            >
              What agencies do:
            </h3>

            {/* List */}
            <div className="flex flex-col gap-[0.75rem]">

              {[
                "Tweak campaigns instead of making real decisions",
                "Report ROAS without understanding the contribution margin",
                "Scale spend without fixing fundamentals",
                "Blame creative, platform, or market",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  
                  {/* Cross Icon */}
                  <svg
                    className="w-6 h-6 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M18 6L6 18"
                      stroke="#A79D9A"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 6L18 18"
                      stroke="#A79D9A"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <p className="text-[#A79D9A] text-[1rem] leading-[1.5rem]">
                    {item}
                  </p>
                </div>
              ))}

            </div>
          </div>

          {/* Right Card */}
          <div
            className="
            flex flex-col items-start
            gap-[1.25rem]

            p-[2.25rem]

            rounded-[0.75rem]
            border border-[#4D4D4D]
            bg-[rgba(52,211,153,0.10)]
          "
          >
            {/* Title */}
            <h3
              className="
              text-[#34D399]
              font-[600]
              tracking-[-0.02rem]

              text-[1.5rem] leading-[2rem]
              sm:text-[1.75rem] sm:leading-[2.4rem]
              lg:text-[2rem] lg:leading-[2.75rem]
            "
            >
              What actually matters
            </h3>

            {/* List */}
            <div className="flex flex-col gap-[0.75rem]">

              {[
                "Offer economics",
                "Funnel structure",
                "Decision-making process",
                "System-level clarity",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  
                  {/* Double Tick Icon */}
                  <svg
                    className="w-6 h-6 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M18 6L7 17L2 12"
                      stroke="#34D399"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 10L14.5 17.5L13 16"
                      stroke="#34D399"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <p className="text-[#E5E2E1] text-[1rem] leading-[1.5rem]">
                    {item}
                  </p>
                </div>
              ))}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}