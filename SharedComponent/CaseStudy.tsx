"use client";

export default function CaseStudySection() {
  return (
    <section className="w-full flex justify-center ">
      <div
        className="
        w-full max-w-[90rem]
        px-4 sm:px-8 lg:px-[6rem]
        py-12 sm:py-16 lg:py-[1rem]

        flex flex-col items-center
        gap-[3rem]
      "
      >

        {/* HEADING */}
        <div className="text-center flex flex-col gap-3 max-w-[50rem]">

          <span className="text-[#A79D9A] text-sm">
            Case Study
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
            From plateaued to{" "}
            <span className="text-[#4D9EFF]">
              profitable.
            </span>{" "}
            60 days.
          </h2>
        </div>

        {/* SPLIT CARD */}
        <div className="w-full max-w-[70rem] grid grid-cols-1 md:grid-cols-2">

          {/* LEFT CARD */}
          <div
            className="
            flex flex-col items-start
            px-6 sm:px-[3.5rem] py-6 sm:py-[2.75rem]
            gap-[1.5rem]

            flex-1
            border border-[#2A2A2A]

            rounded-t-[1rem] md:rounded-l-[1rem] md:rounded-tr-none
          "
          >

            {/* Tag */}
            <span className="
             px-2 py-[0.125rem]
              rounded-[0.125rem]
              bg-[rgba(225, 71, 71, 0.20)]

              text-xs font-semibold
              text-[#E14747]
            ">
              Before
            </span>

            {/* Title */}
            <h3 className="
              text-white font-semibold
              text-[2rem] leading-[2.75rem]
              tracking-[-0.02rem]
            ">
              ₹12L/month ad spend on Meta
            </h3>

            {/* List */}
            <div className="flex flex-col gap-3">

              {[
                "Blended ROAS: 2.8x",
                "Revenue plateaued for 5 months",
                "Hero product contribution margin: 22%",
                "Losing money on every paid order",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">

                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#EF4444" strokeWidth="2"/>
                      <path d="M12 8V12" stroke="#EF4444" strokeWidth="2"/>
                      <path d="M12 16H12.01" stroke="#EF4444" strokeWidth="2"/>
                    </svg>
                  </div>

                  <p className="text-[#E0E0E0] text-[1.125rem] leading-[1.75rem]">
                    {item}
                  </p>

                </div>
              ))}

            </div>
          </div>

          {/* RIGHT CARD */}
          <div
            className="
            flex flex-col items-start
            px-6 sm:px-[3.5rem] py-6 sm:py-[2.75rem]
            gap-[2.5rem]

            flex-1

            rounded-b-[1rem] md:rounded-r-[1rem] md:rounded-bl-none
            border border-[#4D4D4D]

            bg-[linear-gradient(0deg,rgba(36,36,36,0.5),rgba(36,36,36,0.5))]
          "
          >

            {/* Tag */}
            <span className="
              px-2 py-[0.125rem]
              rounded-[0.125rem]
              bg-[rgba(174,172,100,0.2)]

              text-xs font-semibold
              text-[#E5E2E1]
            ">
              After
            </span>

            {/* Title */}
            <h3 className="
              text-white font-semibold
              text-[2rem] leading-[2.75rem]
              tracking-[-0.02rem]
            ">
              Revenue up 40%
            </h3>

            {/* List */}
            <div className="flex flex-col gap-3">

              {[
                "Blended ROAS: 2.8x → 4.1x",
                "Ad spend reduced by 15%",
                "Every rupee tied to a profitable product",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">

                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#34D399" strokeWidth="2"/>
                      <path d="M9 12L11 14L15 10" stroke="#34D399" strokeWidth="2"/>
                    </svg>
                  </div>

                  <p className="text-[#E0E0E0] text-[1.125rem] leading-[1.75rem]">
                    {item}
                  </p>

                </div>
              ))}

            </div>

            {/* Bottom Text */}
            <p className="
              text-[#34D399]
              font-semibold
              text-[1.125rem] leading-[1.75rem]
            ">
              No creative magic. No secret hack. Just clarity on where the money was actually going.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}