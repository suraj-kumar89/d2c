export default function Showcase() {
  return (
    <section className="w-full flex justify-center py-12 sm:py-16">
      <div className="w-full max-w-[1200px] px-4 flex flex-col lg:flex-row gap-6">

        {/* LEFT BIG CARD */}
        <div className="w-full lg:flex-1 bg-[#1a1a1a] lg:rounded-2xl overflow-hidden relative flex justify-center">
          <img
            src="/showcase/img1.png"
            alt="Tea Packaging"
            className="
              w-[24.5rem] h-[21.5625rem] rounded-2xl
               sm:w-full sm:h-[350px] sm:rounded-2xl
              lg:h-full
               sm:w-full sm:h-[250px] sm:rounded-2xl
              lg:h-[300px]
              sm:w-full sm:h-[350px] sm:rounded-2xl
              lg:h-full
              object-cover
            "
          />

          {/* Badge */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-orange-400 text-black text-xs sm:text-sm font-medium px-3 sm:px-4 py-1 rounded-full">
            3x Sales
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-[380px] flex flex-col gap-4 items-center sm:items-stretch">

          {/* TOP IMAGE CARD */}
          <div className="bg-[#1a1a1a] lg:rounded-2xl overflow-hidden flex justify-center w-full">
            <img
              src="/showcase/img2.png"
              alt="BienLeaf"
              className="
                w-[24.5rem] h-[21.5625rem] rounded-2xl
                 sm:w-full sm:h-[350px] sm:rounded-2xl
                lg:h-full
                sm:w-full sm:h-[250px] sm:rounded-2xl
                lg:h-[300px]
                object-cover
              "
            />
          </div>

          {/* TEXT CARD */}
          <div className="text-white text-left sm:text-left">
            <h3 className="
  text-white
  font-[600]

  text-[1.5rem] leading-[2rem]
  tracking-[-0.015rem]
">
  Built and optimised a landing page focused on increasing conversion rates and sales.
</h3>

            <p className="text-xs sm:text-sm text-gray-400 mt-2 sm:mt-3">
              Full case study coming soon
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}