"use client";

export default function TimelineSection() {
  return (
    <section className="w-full flex justify-center bg-black">
      <div className="w-full max-w-[90rem] px-4 sm:px-6 lg:px-8 py-[5rem] lg:py-[6rem] flex flex-col gap-[4rem]">

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
          <div className="flex flex-col items-start gap-4 self-stretch">
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

            {/* Vertical Line */}
{/* <div className="hidden lg:block absolute top-0 bottom-0 left-[calc(50%-13rem)] w-[1px] bg-[linear-gradient(to_bottom,transparent,#2E5F99,transparent)]" /> */}
            {/* Card */}
            {[1, 2, 3].map((item, index) => (
              <div
                key={item}
                className={`
                  flex w-full max-w-[30.875rem]
                  p-6 gap-8
                  rounded-[1rem]
                  bg-[rgba(28,27,27,0.75)]
                  shadow-[0_10px_13px_0_#131313]
                  ${index === 1 ? "ml-auto" : ""}
                `}
              >
                <div className="flex flex-col w-full gap-3">

                  {/* Top Row */}
                  <div className="flex justify-between items-center">

                    <span className="text-[#4D9EFF] text-[0.75rem] font-semibold tracking-[0.075rem] uppercase leading-[1rem]">
                      {index === 0 && "WEEKS 1 TO 2"}
                      {index === 1 && "WEEKS 3 TO 4"}
                      {index === 2 && "WEEKS 5 TO 8"}
                    </span>

                    <span className="flex items-center justify-center
                      px-3 py-1
                      border border-[#082B59]
                      rounded-full
                      text-xs text-[#A79D9A]">
                      
                      Phase {index + 1}
                    </span>
                  </div>

                  {/* Heading */}
                  <h4 className="text-[#E5E2E1] font-semibold
                    text-[1.25rem] leading-[1.75rem]">
                    
                    {index === 0 && "The Diagnosis"}
                    {index === 1 && "The Rebuild"}
                    {index === 2 && "The System Performance stabilises"}
                  </h4>

                  {/* Description */}
                  <p className="text-[#A79D9A] text-sm leading-[1.5rem]">
                    {index === 0 &&
                      "We map where money is being lost, which channels are actually profitable, and what your true CAC and contribution margins look like. Not a surface audit. A full system scan."}

                    {index === 1 &&
                      "We restructure campaigns around your real economics. Fix what is leaking. Align spend to products and channels that actually make money."}

                    {index === 2 &&
                      "Scaling decisions come from clarity. Reporting shifts from 'what happened' to 'what to do next.'"}
                  </p>

                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}