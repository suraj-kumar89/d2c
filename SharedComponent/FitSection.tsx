"use client";
const MobileFitSection = () => {
  const goodFit = [
    "Spending ₹5L+/month on ads",
    "Serious about profitable growth",
    "Open to fixing uncomfortable problems",
    "Performance is not just about campaigns to you",
  ];

  const notFit = [
    "Looking for the cheapest option",
    "Expecting guaranteed ROAS",
    "Not open to feedback",
    "No ad spend history yet",
  ];

  return (
    <div className="block lg:hidden w-full">

      <section className="w-full px-4 py-[3.5rem] flex flex-col items-center gap-8">

        {/* HEADING */}
        <h2 className="
          text-white text-center font-semibold
          tracking-[-0.03rem]

          text-[1.9rem] leading-[2.4rem]
          max-w-[22rem]
        ">
          This is not for every <br />
          <span className="text-[#4D9EFF]">
            D2C brand.
          </span>
        </h2>

        {/* CARDS */}
        <div className="w-full flex flex-col gap-4 max-w-[24rem]">

          {/* GOOD FIT */}
          <div className="
            flex flex-col items-start
            px-5 py-5
            gap-5

            rounded-[1rem]
            border border-[#4D4D4D]

            bg-[linear-gradient(0deg,rgba(36,36,36,0.5),rgba(36,36,36,0.5))]
          ">

            <h3 className="
              text-white font-semibold
              text-[1.5rem] leading-[2rem]
              tracking-[-0.02rem]
            ">
              Good fit
            </h3>

            <div className="flex flex-col gap-3">

              {goodFit.map((item, i) => (
                <div key={i} className="flex items-start gap-3">

                  <div className="w-5 h-5 flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#34D399" strokeWidth="2"/>
                      <path d="M9 12L11 14L15 10" stroke="#34D399" strokeWidth="2"/>
                    </svg>
                  </div>

                  <p className="
                    text-[#E0E0E0]
                    text-[0.95rem] leading-[1.5rem]
                  ">
                    {item}
                  </p>

                </div>
              ))}

            </div>
          </div>

          {/* NOT FIT */}
          <div className="
            flex flex-col items-start
            px-5 py-5
            gap-5

            rounded-[1rem]
            border border-[#4D4D4D]
          ">

            <h3 className="
              text-[#B3B3B3] font-semibold
              text-[1.5rem] leading-[2rem]
              tracking-[-0.02rem]
            ">
              Not a fit
            </h3>

            <div className="flex flex-col gap-3">

              {notFit.map((item, i) => (
                <div key={i} className="flex items-start gap-3">

                  <div className="w-5 h-5 flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#EF4444" strokeWidth="2"/>
                      <path d="M12 8V12" stroke="#EF4444" strokeWidth="2"/>
                      <path d="M12 16H12.01" stroke="#EF4444" strokeWidth="2"/>
                    </svg>
                  </div>

                  <p className="
                    text-[#E0E0E0]
                    text-[0.95rem] leading-[1.5rem]
                  ">
                    {item}
                  </p>

                </div>
              ))}

            </div>
          </div>

        </div>

      </section>

    </div>
  );
};


const DesktopFitSection = () => {

  const goodFit = [
    "Spending ₹5L+/month on ads",
    "Serious about profitable growth",
    "Open to fixing uncomfortable problems",
    "Performance is not just about campaigns to you",
  ];

  const notFit = [
    "Looking for the cheapest option",
    "Expecting guaranteed ROAS",
    "Not open to feedback",
    "No ad spend history yet",
  ];

  return (
    <div className="hidden lg:block">
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

        {/* HEADING */}
        <h2
          className="
          text-white text-center font-semibold
          tracking-[-0.07rem]

          text-[2rem] leading-[2.6rem]
          sm:text-[3rem] sm:leading-[3.8rem]
          lg:text-[3.5rem] lg:leading-[4.5rem]
        "
        >
          This is not for every <br />
          <span className="text-[#4D9EFF]">
            D2C brand.
          </span>
        </h2>

        {/* CARDS */}
        <div className="w-full max-w-[70rem] grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* GOOD FIT */}
          <div
            className="
            flex flex-col items-start
            px-6 sm:px-[2.5rem] py-6 sm:py-[2.5rem]
            gap-[1.75rem]

            flex-1

            rounded-[1rem]
            border border-[#4D4D4D]

            bg-[linear-gradient(0deg,rgba(36,36,36,0.5),rgba(36,36,36,0.5))]
          "
          >

            <h3
              className="
              text-white font-semibold
              text-[2rem] leading-[2.75rem]
              tracking-[-0.02rem]
            "
            >
              Good fit
            </h3>

            <div className="flex flex-col gap-4">

              {goodFit.map((item, i) => (
                <div key={i} className="flex items-start gap-3">

                  <div className="w-6 h-6 flex items-center justify-center shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#34D399" strokeWidth="2"/>
                      <path d="M9 12L11 14L15 10" stroke="#34D399" strokeWidth="2"/>
                    </svg>
                  </div>

                  <p
                    className="
                    text-[#E0E0E0]

                    text-[1.05rem] sm:text-[1.125rem]
                    leading-[1.6rem] sm:leading-[1.75rem]
                  "
                  >
                    {item}
                  </p>

                </div>
              ))}

            </div>
          </div>

          {/* NOT FIT */}
          <div
            className="
            flex flex-col items-start
            px-6 sm:px-[2.5rem] py-6 sm:py-[2.5rem]
            gap-[1.75rem]

            flex-1

            rounded-[1rem]
            border border-[#4D4D4D]
            bg-transparent
          "
          >

            <h3
              className="
              text-[#B3B3B3] font-semibold
              text-[2rem] leading-[2.75rem]
              tracking-[-0.02rem]
            "
            >
              Not a fit
            </h3>

            <div className="flex flex-col gap-4">

              {notFit.map((item, i) => (
                <div key={i} className="flex items-start gap-3">

                  <div className="w-6 h-6 flex items-center justify-center shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#EF4444" strokeWidth="2"/>
                      <path d="M12 8V12" stroke="#EF4444" strokeWidth="2"/>
                      <path d="M12 16H12.01" stroke="#EF4444" strokeWidth="2"/>
                    </svg>
                  </div>

                  <p
                    className="
                    text-[#E0E0E0]

                    text-[1.05rem] sm:text-[1.125rem]
                    leading-[1.6rem] sm:leading-[1.75rem]
                  "
                  >
                    {item}
                  </p>

                </div>
              ))}

            </div>
          </div>

        </div>

      </div>
    </section>
    </div>
  );
};
export default function FitSection() {
  
  return (
    <>
      <MobileFitSection />
      <DesktopFitSection />
    </>
  );
}