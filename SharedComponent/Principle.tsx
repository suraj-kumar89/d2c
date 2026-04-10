"use client";

export default function PrinciplesSection() {
  return (
    <section className="w-full flex justify-center bg-black">
      <div
        className="
        w-full max-w-[90rem]
        px-4 sm:px-8 lg:px-[6rem]
        py-12 sm:py-16 lg:py-[6rem]

        flex flex-col lg:flex-row
        items-start
        gap-12 lg:gap-[5rem]
      "
      >

      <div className="flex flex-col items-start gap-4 sm:gap-5 w-full max-w-[48rem]">

  {/* Subtitle */}
  <span className="
    text-[#B3B3B3]
    text-[1rem] sm:text-[1.125rem] leading-[1.5rem] sm:leading-[1.75rem]
  ">
    Principles
  </span>

  {/* Heading */}
  <h2
    className="
    text-white font-semibold
    tracking-[-0.025rem]

    text-[2rem] leading-[2.6rem]
    sm:text-[2.5rem] sm:leading-[3.25rem]
    lg:text-[3rem] lg:leading-[3.75rem]

    max-w-[48rem]
  "
  >
    We do not operate like <br />
    most agencies. By design.
  </h2>

  {/* Description */}
  <p className="
    text-[#B3B3B3]
    text-[1rem] sm:text-[1.125rem] leading-[1.5rem] sm:leading-[1.75rem]

    max-w-[42rem]
  ">
    We would rather tell you an uncomfortable truth than protect the relationship.
  </p>

</div>

        {/* RIGHT SIDE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">

          {[
            "We do not optimise for dashboards.",
            "We do not scale what is not ready.",
            "We do not say yes to everything.",
            "We do not hide behind reports.",
          ].map((text, i) => (
            <div
              key={i}
              className="
              flex flex-col justify-between
              p-6 sm:p-[2.25rem]
              min-h-[180px] sm:min-h-[200px]

              rounded-[1rem]
              bg-[#1C1B1B]

              transition-all duration-300
              hover:shadow-[0_20px_30px_0_#0f172a]
            "
            >

              {/* Number */}
             <span
  className="
    font-semibold
    text-[3rem] leading-[3.5rem]
    sm:text-[4rem] sm:leading-[4.75rem]
    tracking-[-0.08rem]
    text-[#4D9EFF]
  "
>
  {String(i + 1).padStart(2, "0")}
</span>

              {/* Text */}
              <p
                className="
                text-[#E5E2E1]
                font-semibold

                text-[1.25rem]
                sm:text-[1.5rem]
                leading-[1.75rem]
                sm:leading-[2rem]
                tracking-[-0.015rem]
              "
              >
                {text}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
