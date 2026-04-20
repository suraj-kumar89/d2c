"use client";

export default function ProcessSection() {
  return (
    <section className="w-full flex justify-center min-h-[150vh]">
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

        {/* RIGHT SIDE (STICKY CONTENT) */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2 h-[150vh]">
          <div className="sticky top-[120px] flex flex-col items-start gap-3 sm:gap-4">

            <span className="text-[#7A7A7A] text-[0.7rem] sm:text-[0.75rem] leading-[1rem] tracking-[0.0075rem] capitalize">
              Our Process
            </span>

            <h2 className="text-white font-semibold tracking-[-0.08rem]
              text-[2rem] leading-[2.5rem]
              sm:text-[3.25rem] sm:leading-[3.75rem]
              lg:text-[4rem] lg:leading-[4.75rem]">
              How <br />
              Bluvo works
            </h2>

          </div>
        </div>

        {/* LEFT SIDE (STACKING CARDS) */}
        <div className="relative w-full lg:w-1/2 order-2 lg:order-1 h-[150vh]">

          <div className="sticky top-[120px]">

            {[
              "Your account never touches a junior. Experienced operators only. No freshers learning on your budget.",
              "We spend your money like it is ours. If it does not move the business forward, we do not do it.",
              "Everything stays connected. Ads, creative, funnel, economics. One system. No silos. Strategy stays close to the founder."
            ].map((text, index) => (
              <div
                key={index}
                className={`
                  sticky top-0
                  flex w-full max-w-[22.125rem]
                  px-6 sm:px-9 py-5 sm:py-6
                  rounded-[1rem]
                  bg-[#1C1B1B]
                  shadow-[0_10px_25px_rgba(0,0,0,0.5)]
                  ${index === 1 ? "ml-auto" : ""}
                `}
                style={{
                  zIndex: 10 + index,
                  transform: `translateY(${index * 16}px)`,
                }}
              >
                <p className="text-[#C2C6D8] text-[1rem] sm:text-[1.25rem] leading-[1.5rem] sm:leading-[1.75rem] font-semibold">
                  {text}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}