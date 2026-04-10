export default function Showcase() {
  return (
    <section className="w-full flex justify-center py-12 sm:py-16">
      <div className="w-full max-w-[1200px] px-4 flex flex-col lg:flex-row gap-6">

        {/* LEFT BIG CARD */}
        <div className="w-full lg:flex-1 bg-[#1a1a1a] rounded-2xl overflow-hidden relative">
          <img
            src="/showcase/img1.png"
            alt="Tea Packaging"
            className="w-full h-[250px] sm:h-[350px] lg:h-full object-cover"
          />

          {/* Badge */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-orange-400 text-black text-xs sm:text-sm font-medium px-3 sm:px-4 py-1 rounded-full">
            3x Sales
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-[380px] flex flex-col gap-4">

          {/* TOP IMAGE CARD */}
          <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden">
            <img
              src="/showcase/img2.png"
              alt="BienLeaf"
              className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover"
            />
          </div>

          {/* TEXT CARD */}
          <div className="text-white">
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold leading-snug">
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