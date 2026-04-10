"use client";

export default function CTASection() {
  return (
    <section className="w-full flex justify-center bg-black">
      <div
        className="
        w-full max-w-[90rem]
        px-4 sm:px-8 lg:px-[6rem]
        py-12 sm:py-16 lg:py-[6rem]

        flex flex-col lg:flex-row
        items-start
        gap-8 lg:gap-0
      "
      >

        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-5 max-w-[42rem] w-full">

          {/* Heading */}
          <h2
            className="
            text-white font-semibold
            tracking-[-0.07rem]

            text-[2rem] leading-[2.6rem]
            sm:text-[3rem] sm:leading-[3.8rem]
            lg:text-[3.5rem] lg:leading-[4.5rem]
          "
          >
            Most testimonials will not fix your business. A real conversation might.
          </h2>

          {/* Subtext */}
          <p
            className="
            text-[#C2C6D8]

            text-[0.95rem] sm:text-[1rem]
            leading-[1.4rem] sm:leading-[1.5rem]
            max-w-[32rem]
          "
          >
            If this page made sense, you already know what is going on.
          </p>

          {/* CTA Button */}
          <button
            className="
            flex items-center justify-center
            w-fit

            px-[1.75rem] py-[0.875rem]
            gap-[0.625rem]

            rounded-[0.5rem]
            bg-[#3385E6]

            text-white font-semibold

            hover:bg-[#2f76cc]
            transition
          "
          >
            Book a Growth Diagnosis Call →
          </button>

        </div>

        {/* RIGHT FORM */}
        <div
          className="
          w-full max-w-[33rem]
          lg:ml-auto

          flex flex-col justify-center items-center
          gap-[1rem]

          px-6 sm:px-[2.3rem] pt-6 sm:pt-[2.25rem] pb-5 sm:pb-[1.5rem]

          rounded-[1rem]
          border border-[#4D4D4D]

          bg-[rgba(36,36,36,0.5)]
        "
        >

          {/* Form Heading */}
          <h3
            className="
            text-white text-center font-semibold
            tracking-[-0.015rem]

            text-[1.4rem] sm:text-[1.5rem]
            leading-[1.9rem] sm:leading-[2rem]
          "
          >
            Want to Fix Your <br /> Store’s Conversions?
          </h3>

          {/* NAME */}
          <div className="w-full flex flex-col gap-2">
            <label className="
              text-[#E0E0E0]
              text-[0.75rem]
              leading-[1rem]
              tracking-[0.075rem]
              uppercase
            ">
              NAME
            </label>
            <input
              type="text"
              placeholder="Full name"
              className="
              w-full
              px-[0.875rem] py-[0.875rem]

              rounded-[0.5rem]
              border border-[rgba(255,255,255,0.1)]

              bg-[rgba(36,36,36,0.75)]
              text-white text-sm

              outline-none
            "
            />
          </div>

          {/* EMAIL */}
          <div className="w-full flex flex-col gap-2">
            <label className="text-[#E0E0E0] text-[0.75rem] leading-[1rem] tracking-[0.075rem] uppercase">
              COMPANY EMAIL
            </label>
            <input
              type="email"
              placeholder="name@company.com"
              className="w-full px-[0.875rem] py-[0.875rem] rounded-[0.5rem] border border-[rgba(255,255,255,0.1)] bg-[rgba(36,36,36,0.75)] text-white text-sm outline-none"
            />
          </div>

          {/* SELECT */}
          <div className="w-full flex flex-col gap-2">
            <label className="text-[#E0E0E0] text-[0.75rem] leading-[1rem] tracking-[0.075rem] uppercase">
              CURRENT MONTHLY SPEND
            </label>
            <select className="w-full px-[0.875rem] py-[0.875rem] rounded-[0.5rem] border border-[rgba(255,255,255,0.1)] bg-[rgba(36,36,36,0.75)] text-white text-sm outline-none">
              <option>₹5L – ₹20L</option>
              <option>₹20L – ₹50L</option>
              <option>₹50L+</option>
            </select>
          </div>

          {/* TEXTAREA */}
          <div className="w-full flex flex-col gap-2">
            <label className="text-[#E0E0E0] text-[0.75rem] leading-[1rem] tracking-[0.075rem] uppercase">
              GROWTH GOAL
            </label>
            <textarea
              rows={3}
              placeholder="What is your biggest bottleneck right now?"
              className="w-full px-[0.875rem] py-[0.875rem] rounded-[0.5rem] border border-[rgba(255,255,255,0.1)] bg-[rgba(36,36,36,0.75)] text-white text-sm outline-none resize-none"
            />
          </div>

          {/* SUBMIT BUTTON */}
          <button
            className="
            w-full
            flex justify-center items-center
            gap-[0.25rem]

            px-[2.5rem] py-[0.875rem]

            rounded-[0.75rem]
            bg-white

            text-black font-semibold text-sm

            hover:bg-gray-200
            transition
          "
          >
            Find My Growth Gaps
          </button>

          {/* FOOTNOTE */}
          <p className="text-[#A79D9A] text-xs text-center">
            We’ll Get Back Within 24 Hours
          </p>

        </div>

      </div>
    </section>
  );
}