"use client";

export default function LimitedSection() {
  return (
    <section className="w-full flex justify-center ">
      <div
        className="
        w-full max-w-[90rem]
        px-4 sm:px-8 lg:px-[6rem]
        py-12 sm:py-16 lg:py-[5rem]

        flex flex-col lg:flex-row
        items-start lg:items-center
        gap-6 sm:gap-8 lg:gap-[3rem]
      "
      >

        {/* LEFT TEXT */}
        <h3
          className="
          text-white font-semibold
          tracking-[-0.02rem]

          text-[1.5rem] leading-[2.1rem]
          sm:text-[2rem] sm:leading-[2.75rem]

          max-w-[32rem]
        "
        >
          We work with a limited number of <br />
          brands at any time.
        </h3>

        {/* RIGHT TEXT */}
        <p
          className="
          text-[#B3B3B3]

          text-[1rem] sm:text-[1.125rem]
          leading-[1.5rem] sm:leading-[1.75rem]

          max-w-[30rem]
          lg:ml-auto
        "
        >
          Every account gets senior involvement. That does not scale infinitely. And we are not trying to make it.
        </p>

      </div>
    </section>
  );
}