"use client";

export default function DecisionSection() {
    return (
        <section className="w-full flex justify-center  bg-Primary/900 overflow-hidden">
            <div
                className="
        w-full max-w-[90rem]
        px-4 sm:px-6 lg:px-8
        py-12 sm:py-16 lg:py-24
        flex flex-col items-center
        gap-10 sm:gap-16 lg:gap-24
        relative
      ">
                <h3
                    className="
          text-white text-center
          font-[600]
          tracking-[-0.025rem]
          text-[1.3rem] leading-[1.9rem]
          sm:text-[2rem] sm:leading-[2.6rem]
          lg:text-[2.5rem] lg:leading-[3.25rem]
          max-w-[90%] sm:max-w-[48rem]
        "
                >
                    Growth does not break at the <br />
                    campaign level. It breaks at the <br />
                    decision level.
                </h3>

                <div className="relative w-full flex flex-col items-center mt-6 sm:mt-8">

                    {/* TOP TAGS */}
                    <div className="relative z-[2] flex flex-wrap justify-center  gap-3 sm:gap-6 lg:gap-[7rem] w-full max-w-[22rem] sm:max-w-[40rem] lg:max-w-[58rem] mb-6">
                        {["Media", "Creative", "Funnel", "Offer", "Economics"].map((tag) => (
                            <div
                                key={tag}
                                className="
                                inline-flex items-center justify-center
                                px-[1.1rem] py-[0.55rem]
                                rounded-[2.5625rem]
                                border border-[#4d9eff]
                                text-white text-xs sm:text-sm
                                min-w-[90px]
                                
                                "
                            >
                                {tag}
                            </div>
                        ))}
                    </div>

                    {/* SVG CONNECTORS (DESKTOP ONLY) */}
                    <div className="hidden lg:block absolute top-[2.5rem] left-1/2 -translate-x-1/2 w-[60rem] h-[10.875rem] z-[1]">

                        {/* LEFT LONG */}
                        <div className="absolute left-[4rem] top-0 w-[25.9925rem] h-[10.875rem]">
                            <svg viewBox="0 0 478 174" className="w-full h-full">
                                <path
                                    d="M0.400391 0C0.400391 19.4346 0.400391 29.1519 2.63073 37.1019C8.28548 57.2582 24.0371 73.0098 44.1934 78.6646C52.1434 80.8949 61.8607 80.8949 81.2953 80.8949H384.295C415.17 80.8949 430.608 80.8949 442.595 86.4409C455.509 92.416 465.879 102.786 471.854 115.7C477.4 127.687 477.4 143.125 477.4 174"
                                    stroke="url(#leftLong)"
                                    strokeWidth="1"
                                      fill="none"
                                    
                                />
                                <defs>
                                    <linearGradient id="leftLong" x1="238.9" y1="0" x2="238.9" y2="224">
                                        <stop stopColor="#4d9eff"  />
                                        <stop offset="0.5" stopColor="#3E7ECC" />
                                        <stop offset="1" stopColor="#2E5F99"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="absolute left-[16.1rem] top-0 w-[13.9375rem] h-[10.875rem]">
                            <svg viewBox="0 0 240 174" className="w-full h-full">
                                <path
                                    d="M0.400391 0C0.400391 19.4346 0.400391 29.1519 2.63073 37.1019C8.28548 57.2582 24.0371 73.0098 44.1934 78.6646C52.1434 80.8949 61.8607 80.8949 81.2953 80.8949H146.295C177.17 80.8949 192.608 80.8949 204.595 86.4409C217.509 92.416 227.879 102.786 233.854 115.7C239.4 127.687 239.4 143.125 239.4 174"
                                    stroke="url(#leftShort)"
                                    strokeWidth="1"
                                      fill="none"
                                />
                                <defs>
                                    <linearGradient id="leftShort" x1="119.9" y1="0" x2="119.9" y2="224">
                                        <stop stopColor="#4D9EFF" stopOpacity="1" />
                                        <stop offset="0.5" stopColor="#3E7ECC" />
                                        <stop offset="1" stopColor="#2E5F99" stopOpacity="0.2" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        {/* MIDDLE LINE */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-0 h-[10.875rem]">
                            <svg width="1" height="150" viewBox="0 0 1 174">
                                <path
                                    d="M0.400391 0V80.8949L0.400491 174"
                                    stroke="url(#middle)"
                                    strokeWidth="1"
                                      fill="none"
                                />
                                <defs>
                                    <linearGradient id="middle" x1="0.4" y1="0" x2="0.4" y2="224">
                                        <stop stopColor="#4D9EFF" stopOpacity="1" />
                                        <stop offset="0.5" stopColor="#3E7ECC" />
                                        <stop offset="1" stopColor="#2E5F99" stopOpacity="0.2" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        {/* RIGHT SHORT */}
                        <div className="absolute right-[17.1rem] top-0 w-[12.9375rem] h-[10.875rem]">
                            <svg viewBox="0 0 227 174" className="w-full h-full">
                                <path
                                    d="M226.4 0C226.4 19.4346 226.4 29.1519 224.17 37.1019C218.515 57.2582 202.764 73.0098 182.607 78.6646C174.657 80.8949 164.94 80.8949 145.505 80.8949H93.5055C62.6303 80.8949 47.1927 80.8949 35.2059 86.4409C22.2917 92.416 11.9215 102.786 5.94641 115.7C0.400398 127.687 0.400396 143.125 0.400391 174"
                                    stroke="url(#rightShort)"
                                     strokeWidth="1"
                                      fill="none"
                                />
                                <defs>
                                    <linearGradient id="rightShort" x1="113.4" y1="0" x2="113.4" y2="224">
                                        <stop stopColor="#4D9EFF" stopOpacity="1" />
                                        <stop offset="0.5" stopColor="#3E7ECC" />
                                        <stop offset="1" stopColor="#2E5F99" stopOpacity="0.2" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        {/* RIGHT LONG */}
                        <div className="absolute right-[4.2rem] top-0 w-[25.8125rem] h-[10.875rem]">
                            <svg viewBox="0 0 470 174" className="w-full h-full">
                                <path
                                    d="M469.4 0C469.4 19.4346 469.4 29.1519 467.17 37.1019C461.515 57.2582 445.764 73.0098 425.607 78.6646C417.657 80.8949 407.94 80.8949 388.505 80.8949H93.5055C62.6303 80.8949 47.1927 80.8949 35.2059 86.4409C22.2918 92.416 11.9215 102.786 5.94642 115.7C0.400406 127.687 0.400401 143.125 0.400391 174"
                                    stroke="url(#rightLong)"
                                   strokeWidth="1"
                                      fill="none"
                                />
                                <defs>
                                    <linearGradient id="rightLong" x1="234.9" y1="0" x2="234.9" y2="224">
                                        <stop stopColor="#4D9EFF" stopOpacity="1" />
                                        <stop offset="0.5" stopColor="#3E7ECC" />
                                        <stop offset="1" stopColor="#2E5F99" stopOpacity="0.2" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                    </div>

                    {/* CENTER NODE */}
           <div className="mt-12 sm:mt-20 lg:mt-[8rem] relative z-[2]">
  <div className="shimmer-btn">
    Decisions
  </div>
</div>
                </div>

                {/* BOTTOM POINTS */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        "When you optimise ads without understanding margins, you scale losses.",
                        "When you test creatives without fixing the funnel, you waste learnings.",
                        "When you change agencies without changing decisions, the pattern repeats.",
                    ].map((text, i) => (
                        <div key={i} className="flex items-start gap-3">

                            <div className="w-5 h-5 flex items-center justify-center rounded-full border border-red-500 flex-shrink-0">
                                <span className="text-red-500 text-xs">×</span>
                            </div>

                            <p className="text-white text-sm sm:text-[0.95rem] leading-relaxed">
                                {text}
                            </p>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
