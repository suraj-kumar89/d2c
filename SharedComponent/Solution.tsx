"use client";

export default function ComparisonSection() {
  return (
    <section className="w-full flex justify-center ">
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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M10.6 16.6L17.65 9.55L16.25 8.15L10.6 13.8L7.75 10.95L6.35 12.35L10.6 16.6ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88334 20.6867 5.825 19.9743 4.925 19.075C4.025 18.1757 3.31267 17.1173 2.788 15.9C2.26333 14.6827 2.00067 13.3827 2 12C1.99933 10.6173 2.262 9.31733 2.788 8.1C3.314 6.88267 4.02633 5.82433 4.925 4.925C5.82367 4.02567 6.882 3.31333 8.1 2.788C9.318 2.26267 10.618 2 12 2C13.382 2 14.682 2.26267 15.9 2.788C17.118 3.31333 18.1763 4.02567 19.075 4.925C19.9737 5.82433 20.6863 6.88267 21.213 8.1C21.7397 9.31733 22.002 10.6173 22 12C21.998 13.3827 21.7353 14.6827 21.212 15.9C20.6887 17.1173 19.9763 18.1757 19.075 19.075C18.1737 19.9743 17.1153 20.687 15.9 21.213C14.6847 21.739 13.3847 22.0013 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z" fill="#4D9EFF"/>
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