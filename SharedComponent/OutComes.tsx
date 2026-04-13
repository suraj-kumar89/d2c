"use client";

export default function OutcomesSection() {
  const points = [
    "You know your true CAC and contribution margin by channel.",
    "You know which products and campaigns are profitable.",
    "Scaling decisions come from economics, not gut feel.",
    "Reporting tells you what to do next, not just what happened.",
    "Less wondering. More deciding.",
  ];

  return (
    <section className="w-full flex justify-center bg-black">
      <div
        className="
        w-full max-w-[90rem]
        px-4 sm:px-8 lg:px-[6rem]
        py-12 sm:py-16 lg:py-[6rem]

        flex flex-col lg:flex-row
        items-start
        gap-10 sm:gap-12 lg:gap-[6rem]
      "
      >

        {/* RIGHT CONTENT (comes first on mobile) */}
        <div className="flex flex-col items-start gap-4 max-w-[30rem] w-full order-1 lg:order-2">

          {/* Label */}
          <span className="text-[#A79D9A] text-sm">
            Outcomes
          </span>

          {/* Heading */}
          <h2
            className="
            text-white font-semibold
            tracking-[-0.07rem]

            text-[2.5rem] leading-[3.2rem]
            sm:text-[3rem] sm:leading-[3.8rem]
            lg:text-[3.5rem] lg:leading-[4.5rem]
          "
          >
            What changes <br />
            within 60 days
          </h2>

          {/* Paragraph */}
          <p
            className="
            text-[#B3B3B3]

            text-[1rem]
            leading-[1.5rem]
            max-w-[32rem]
          "
          >
            This is not about better campaigns. It is about better control.
          </p>

        </div>

        {/* LEFT CARD */}
        <div
          className="
          flex flex-col items-start
          p-[2.25rem]
          gap-[2rem]
          flex-1
          rounded-[1rem]
          bg-[rgba(28,27,27,0.75)]
          shadow-[0_10px_13.1px_0_#131313]
           max-w-[600px] w-full
          order-2 lg:order-1
        "
        >
          {points.map((text, i) => (
            <div key={i} className="flex items-start gap-4">

              {/* ICON */}
              <div className="w-[1.75rem] h-[1.75rem] shrink-0">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M26.8327 14.0002L23.986 10.7569L24.3827 6.46354L20.171 5.50687L17.966 1.79688L13.9993 3.50021L10.0327 1.79688L7.82768 5.50687L3.61602 6.45188L4.01268 10.7452L1.16602 14.0002L4.01268 17.2435L3.61602 21.5485L7.82768 22.5052L10.0327 26.2152L13.9993 24.5002L17.966 26.2035L20.171 22.4935L24.3827 21.5369L23.986 17.2435L26.8327 14.0002ZM11.666 19.8335L6.99935 15.1669L8.64435 13.5219L11.666 16.5319L19.3544 8.84354L20.9993 10.5002L11.666 19.8335Z"
                    fill="#4D9EFF"
                  />
                </svg>
              </div>

              {/* TEXT */}
              <p
                className="
                text-[#C2C6D8]
                font-semibold

                text-[1.25rem]
                leading-[1.75rem]
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