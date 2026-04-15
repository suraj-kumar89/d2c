"use client";

export default function ProcessSection() {
  return (
    <section className="w-full flex justify-center overflow-hidden">
      <div
        className="
        w-full max-w-[90rem]
        px-4 sm:px-6 lg:px-8
        py-[4rem] sm:py-[5rem] lg:py-[6rem]

        flex flex-col lg:flex-row
        items-start
        gap-[3rem] sm:gap-[4rem]
      "
      >

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-3 sm:gap-4 self-stretch order-1 lg:order-2">

          {/* Tag */}
          <span
            className="
            text-[#7A7A7A]
            text-[0.7rem] sm:text-[0.75rem] leading-[1rem] sm:leading-[1.125rem]
            tracking-[0.0075rem]
            capitalize
          "
          >
            Our Process
          </span>

          {/* Heading */}
          <h2
            className="
            text-white font-semibold
            tracking-[-0.08rem]

            text-[2rem] leading-[2.5rem]
            sm:text-[3.25rem] sm:leading-[3.75rem]
            lg:text-[4rem] lg:leading-[4.75rem]
          "
          >
            How <br />
            Bluvo works
          </h2>

        </div>

        {/* LEFT SIDE */}
        <div className="relative w-full lg:w-1/2 flex flex-col items-start gap-6 sm:gap-8 self-stretch order-2 lg:order-1">

          {/* Card 1 */}
          <div className="flex items-start gap-8 self-stretch ml-0 sm:ml-[4rem] lg:ml-[6rem]">
            <div
              className="
              flex w-full sm:w-[22.125rem]
              px-6 sm:px-9 py-5 sm:py-6
              rounded-[1rem]
              bg-[rgba(28,27,27,0.75)]
              shadow-[0_10px_13.1px_0_#131313]
            "
            >
              <p
                className="
                text-[#C2C6D8]
                text-[1rem] sm:text-[1.25rem] leading-[1.5rem] sm:leading-[1.75rem]
                font-semibold
              "
              >
                Your account never touches a junior. Experienced operators only. No freshers learning on your budget.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-start gap-8 self-stretch ml-0 sm:ml-[8rem] lg:ml-[13rem]">
            <div
              className="
              flex w-full sm:w-[22.125rem]
              px-6 sm:px-7 py-5 sm:py-6
              rounded-[1rem]
              bg-[rgba(28,27,27,0.75)]
              shadow-[0_10px_13.1px_0_#131313]
            "
            >
              <p
                className="
                text-[#C2C6D8]
                text-[1rem] sm:text-[1.25rem] leading-[1.5rem] sm:leading-[1.75rem]
                font-semibold
              "
              >
                We spend your money like it is ours. If it does not move the business forward, we do not do it.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-start gap-8 self-stretch ml-0 sm:ml-[4rem] lg:ml-[6rem]">
            <div
              className="
              flex w-full sm:w-[22.125rem]
              px-6 sm:px-7 py-5 sm:py-6
              rounded-[1rem]
              bg-[rgba(28,27,27,0.75)]
              shadow-[0_10px_13.1px_0_#131313]
            "
            >
              <p
                className="
                text-[#C2C6D8]
                text-[1rem] sm:text-[1.25rem] leading-[1.5rem] sm:leading-[1.75rem]
                font-semibold
              "
              >
                Everything stays connected. Ads, creative, funnel, economics. One system. No silos. Strategy stays close to the founder.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
