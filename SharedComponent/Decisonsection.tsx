"use client";

/* 📱 Mobile Layout */
function MobileFlowSection() {
  return (
    <section className="w-full flex justify-center py-10">

      <div className="flex flex-col items-center gap-[1rem] w-full">
      
        {/* TAGS */}<h3
  className="
    block sm:hidden
    text-white text-center
    font-[600]
    tracking-[-0.025rem]
    text-[1.3rem] leading-[1.9rem]
    max-w-[90%]
    mx-auto mb-6
  "
>
  Growth does not break at the <br />
  campaign level. It breaks at the <br />
  decision level.
</h3>
        <div className="flex gap-3">
          {["Media", "Creative", "Funnel", "Offer", "Economics"].map((tag, i) => (
            <div
              key={i}
              className="
                flex w-[3.85rem]
                px-[0.625rem] py-[0.25rem]
                justify-center items-center
                rounded-[2.5625rem]
                border border-[#082B59]
                text-white text-xs
              "
            >
              {tag}
            </div>
          ))}
        </div>

        {/* SVG LINES */}
<div className="relative  flex w-full h-[120px]">

  {/* Left Line */}
  <svg xmlns="http://www.w3.org/2000/svg" width="169" height="116" viewBox="0 0 169 116" fill="none"  className="ml-[2rem]">
  <path d="M0.400391 0C0.400391 30.5089 0.400391 45.7633 7.34991 56.9259C11.0704 62.9019 16.1127 67.9442 22.0887 71.6647C33.2513 78.6142 48.5057 78.6142 79.0146 78.6142H130.419C151.066 78.6142 167.805 95.3524 167.805 116" stroke="url(#paint0_linear_6880_22634)" strokeWidth="0.8"/>
  <defs>
    <linearGradient id="paint0_linear_6880_22634" x1="84.1025" y1="-6" x2="84.1025" y2="228.299" gradientUnits="userSpaceOnUse">
      <stop stopColor="#4D9EFF" stopOpacity="0"/>
      <stop offset="0.25" stopColor="#458EE6"/>
      <stop offset="0.5" stopColor="#3E7ECC"/>
      <stop offset="0.75" stopColor="#366FB3"/>
      <stop offset="1" stopColor="#2E5F99" stopOpacity="0"/>
    </linearGradient>
  </defs>
</svg>

  {/* Left-Center Line */}
  <svg  className="absolute left-[26%] bottom-1 w-[5.4rem] h-auto" xmlns="http://www.w3.org/2000/svg" width="85" height="116" viewBox="0 0 85 116" fill="none">
  <path d="M0.400391 0V36.6754C0.400391 59.8376 19.177 78.6142 42.3392 78.6142H46.8922C67.5398 78.6142 84.278 95.3524 84.278 116" stroke="url(#paint0_linear_6880_22635)" strokeWidth="0.8"/>
  <defs>
    <linearGradient id="paint0_linear_6880_22635" x1="42.3392" y1="-6" x2="42.3392" y2="228.299" gradientUnits="userSpaceOnUse">
      <stop stopColor="#4D9EFF" stopOpacity="0"/>
      <stop offset="0.25" stopColor="#458EE6"/>
      <stop offset="0.5" stopColor="#3E7ECC"/>
      <stop offset="0.75" stopColor="#366FB3"/>
      <stop offset="1" stopColor="#2E5F99" stopOpacity="0"/>
    </linearGradient>
  </defs>
</svg>
  {/* Center Vertical */}
  <svg xmlns="http://www.w3.org/2000/svg" width="1" height="116" viewBox="0 0 1 116" fill="none">
  <path d="M0.400391 0V78.6142L0.400491 116" stroke="url(#paint0_linear_6880_22638)" strokeWidth="0.8"/>
  <defs>
    <linearGradient id="paint0_linear_6880_22638" x1="0.400441" y1="-6" x2="0.400441" y2="228.299" gradientUnits="userSpaceOnUse">
      <stop stopColor="#4D9EFF" stopOpacity="0"/>
      <stop offset="0.25" stopColor="#458EE6"/>
      <stop offset="0.5" stopColor="#3E7ECC"/>
      <stop offset="0.75" stopColor="#366FB3"/>
      <stop offset="1" stopColor="#2E5F99" stopOpacity="0"/>
    </linearGradient>
  </defs>
</svg>

  {/* Right-Center Line */}
 <svg className="absolute right-[27.8%] bottom-1 w-[5.4rem] h-auto" xmlns="http://www.w3.org/2000/svg" width="81" height="116" viewBox="0 0 81 116" fill="none">
  <path d="M79.7148 0V38.9566C79.7148 60.8589 61.9595 78.6142 40.0572 78.6142H37.7854C17.1378 78.6142 0.399609 95.3524 0.399605 116" stroke="url(#paint0_linear_6880_22636)" strokeWidth="0.8"/>
  <defs>
    <linearGradient id="paint0_linear_6880_22636" x1="40.0572" y1="-6" x2="40.0572" y2="228.299" gradientUnits="userSpaceOnUse">
      <stop stopColor="#4D9EFF" stopOpacity="0"/>
      <stop offset="0.25" stopColor="#458EE6"/>
      <stop offset="0.5" stopColor="#3E7ECC"/>
      <stop offset="0.75" stopColor="#366FB3"/>
      <stop offset="1" stopColor="#2E5F99" stopOpacity="0"/>
    </linearGradient>
  </defs>
</svg>

  {/* Right Line */}
  <svg xmlns="http://www.w3.org/2000/svg" width="166" height="116" viewBox="0 0 166 116" fill="none" className="mr-[2rem]">
  <path d="M164.996 0C164.996 30.5089 164.996 45.7633 158.047 56.9259C154.326 62.9019 149.284 67.9442 143.308 71.6647C132.145 78.6142 116.891 78.6142 86.3819 78.6142H37.7852C17.1376 78.6142 0.399429 95.3524 0.399429 116" stroke="url(#paint0_linear_6880_22637)" strokeWidth ="0.8"/>
  <defs>
    <linearGradient id="paint0_linear_6880_22637" x1="82.6978" y1="-6" x2="82.6978" y2="228.299" gradientUnits="userSpaceOnUse">
      <stop stopColor="#4D9EFF" stopOpacity="0"/>
      <stop offset="0.25" stopColor="#458EE6"/>
      <stop offset="0.5" stopColor="#3E7ECC"/>
      <stop offset="0.75" stopColor="#366FB3"/>
      <stop offset="1" stopColor="#2E5F99" stopOpacity="0"/>
    </linearGradient>
  </defs>
</svg>

</div>
        {/* BUTTON */}
       <div className="mt-[-1.5rem] sm:mt-20 lg:mt-[8rem] relative z-[2]">
  <button className="shimmer-btn">
    Decisions
  </button>
</div>
<div className="block sm:hidden mt-8 px-4">
  <div className="w-full flex flex-col gap-5">
    {[
      "When you optimise ads without understanding margins, you scale losses.",
      "When you test creatives without fixing the funnel, you waste learnings.",
      "When you change agencies without changing decisions, the pattern repeats.",
    ].map((text, i) => (
      <div key={i} className="flex items-start gap-3">

        <div className="w-5 h-5 flex items-center justify-center rounded-full border border-red-500 flex-shrink-0">
          <span className="text-red-500 text-xs">×</span>
        </div>

        <p className="text-white text-sm leading-relaxed">
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

/* 🖥️ Desktop Layout (KEEP YOUR ORIGINAL CODE HERE) */
function DesktopFlowSection() {
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
                                font-normal
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

                            <p className="text-white text-sm sm:text-[0.95rem] font-normal leading-relaxed">
                                {text}
                            </p>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    //  <section className="w-full flex justify-center py-16">

    //   <div className="w-full max-w-[1200px] px-4">

    //     {/* 🔴 PASTE YOUR ORIGINAL DESKTOP DESIGN HERE */}
        
    //     {/* Example structure (replace with your actual code) */}
    //     <div className="flex flex-col items-center gap-10">

    //       {/* TAGS */}
    //       <div className="flex gap-4">
    //         <div className="px-4 py-1 border border-[#082B59] rounded-full text-white">
    //           Tag 1
    //         </div>
    //         <div className="px-4 py-1 border border-[#082B59] rounded-full text-white">
    //           Tag 2
    //         </div>
    //       </div>

    //       {/* SVG LINES (DESKTOP ORIGINAL) */}
    //       <div className="flex items-start justify-center gap-4">

    //         {/* LEFT BIG */}
    //         <svg width="169" height="116" viewBox="0 0 169 116" fill="none">
    //           <path d="M0.400391 0C0.400391 30.5089 0.400391 45.7633 7.34991 56.9259C11.0704 62.9019 16.1127 67.9442 22.0887 71.6647C33.2513 78.6142 48.5057 78.6142 79.0146 78.6142H130.419C151.066 78.6142 167.805 95.3524 167.805 116"
    //             stroke="url(#d1)" strokeWidth="0.8"/>
    //           <defs>
    //             <linearGradient id="d1" x1="84" y1="-6" x2="84" y2="228">
    //               <stop stopColor="#4D9EFF" stopOpacity="0"/>
    //               <stop offset="0.5" stopColor="#3E7ECC"/>
    //               <stop offset="1" stopColor="#2E5F99" stopOpacity="0"/>
    //             </linearGradient>
    //           </defs>
    //         </svg>

    //         {/* LEFT SMALL */}
    //         <svg width="85" height="116" viewBox="0 0 85 116" fill="none">
    //           <path d="M0.4 0V36.6C0.4 59.8 19.1 78.6 42.3 78.6H46.8C67.5 78.6 84.2 95.3 84.2 116"
    //             stroke="url(#d2)" strokeWidth="0.8"/>
    //           <defs>
    //             <linearGradient id="d2" x1="42" y1="-6" x2="42" y2="228">
    //               <stop stopColor="#4D9EFF" stopOpacity="0"/>
    //               <stop offset="0.5" stopColor="#3E7ECC"/>
    //               <stop offset="1" stopColor="#2E5F99" stopOpacity="0"/>
    //             </linearGradient>
    //           </defs>
    //         </svg>

    //         {/* CENTER */}
    //         <svg width="1" height="45" viewBox="0 0 1 45" fill="none">
    //           <path d="M0.4 0V44" stroke="url(#d3)" strokeWidth="0.8"/>
    //           <defs>
    //             <linearGradient id="d3" x1="0.9" y1="0" x2="0.9" y2="134">
    //               <stop stopColor="#4D9EFF" stopOpacity="0"/>
    //               <stop offset="0.5" stopColor="#3E7ECC"/>
    //               <stop offset="1" stopColor="#2E5F99" stopOpacity="0"/>
    //             </linearGradient>
    //           </defs>
    //         </svg>

    //         {/* RIGHT SMALL */}
    //         <svg width="81" height="116" viewBox="0 0 81 116" fill="none">
    //           <path d="M79.7 0V38.9C79.7 60.8 61.9 78.6 40 78.6H37.7C17.1 78.6 0.4 95.3 0.4 116"
    //             stroke="url(#d4)" strokeWidth="0.8"/>
    //           <defs>
    //             <linearGradient id="d4" x1="40" y1="-6" x2="40" y2="228">
    //               <stop stopColor="#4D9EFF" stopOpacity="0"/>
    //               <stop offset="0.5" stopColor="#3E7ECC"/>
    //               <stop offset="1" stopColor="#2E5F99" stopOpacity="0"/>
    //             </linearGradient>
    //           </defs>
    //         </svg>

    //         {/* RIGHT BIG */}
    //         <svg width="166" height="116" viewBox="0 0 166 116" fill="none">
    //           <path d="M164.9 0C164.9 30.5 164.9 45.7 158 56.9C154.3 62.9 149.2 67.9 143.3 71.6C132.1 78.6 116.8 78.6 86.3 78.6H37.7C17.1 78.6 0.4 95.3 0.4 116"
    //             stroke="url(#d5)" strokeWidth="0.8"/>
    //           <defs>
    //             <linearGradient id="d5" x1="82" y1="-6" x2="82" y2="228">
    //               <stop stopColor="#4D9EFF" stopOpacity="0"/>
    //               <stop offset="0.5" stopColor="#3E7ECC"/>
    //               <stop offset="1" stopColor="#2E5F99" stopOpacity="0"/>
    //             </linearGradient>
    //           </defs>
    //         </svg>

    //       </div>

    //       {/* BUTTON */}
    //       <button className="px-6 py-2 rounded-full bg-[#1C6DCC] text-white">
    //         Make Decision
    //       </button>

    //     </div>
    //   </div>
    // </section>
  );
}

/* 🎯 Main Export */
export default function FlowSection() {
  return (
    <>
      {/* Mobile */}
      <div className="block md:hidden">
        <MobileFlowSection />
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <DesktopFlowSection />
      </div>
    </>
  );
}






// "use client";

// export default function DecisionSection() {
//     return (
//         <section className="w-full flex justify-center  bg-Primary/900 overflow-hidden">
//             <div
//                 className="
//         w-full max-w-[90rem]
//         px-4 sm:px-6 lg:px-8
//         py-12 sm:py-16 lg:py-24
//         flex flex-col items-center
//         gap-10 sm:gap-16 lg:gap-24
//         relative
//       ">
//                 <h3
//                     className="
//           text-white text-center
//           font-[600]
//           tracking-[-0.025rem]
//           text-[1.3rem] leading-[1.9rem]
//           sm:text-[2rem] sm:leading-[2.6rem]
//           lg:text-[2.5rem] lg:leading-[3.25rem]
//           max-w-[90%] sm:max-w-[48rem]
//         "
//                 >
//                     Growth does not break at the <br />
//                     campaign level. It breaks at the <br />
//                     decision level.
//                 </h3>

//                 <div className="relative w-full flex flex-col items-center mt-6 sm:mt-8">

//                     {/* TOP TAGS */}
//                     <div className="relative z-[2] flex flex-wrap justify-center  gap-3 sm:gap-6 lg:gap-[7rem] w-full max-w-[22rem] sm:max-w-[40rem] lg:max-w-[58rem] mb-6">
//                         {["Media", "Creative", "Funnel", "Offer", "Economics"].map((tag) => (
//                             <div
//                                 key={tag}
//                                 className="
//                                 inline-flex items-center justify-center
//                                 px-[1.1rem] py-[0.55rem]
//                                 rounded-[2.5625rem]
//                                 border border-[#4d9eff]
//                                 text-white text-xs sm:text-sm
//                                 min-w-[90px]
//                                 font-normal
//                                 "
//                             >
//                                 {tag}
//                             </div>
//                         ))}
//                     </div>

//                     {/* SVG CONNECTORS (DESKTOP ONLY) */}
//                     <div className="hidden lg:block absolute top-[2.5rem] left-1/2 -translate-x-1/2 w-[60rem] h-[10.875rem] z-[1]">

//                         {/* LEFT LONG */}
//                         <div className="absolute left-[4rem] top-0 w-[25.9925rem] h-[10.875rem]">
//                             <svg viewBox="0 0 478 174" className="w-full h-full">
//                                 <path
//                                     d="M0.400391 0C0.400391 19.4346 0.400391 29.1519 2.63073 37.1019C8.28548 57.2582 24.0371 73.0098 44.1934 78.6646C52.1434 80.8949 61.8607 80.8949 81.2953 80.8949H384.295C415.17 80.8949 430.608 80.8949 442.595 86.4409C455.509 92.416 465.879 102.786 471.854 115.7C477.4 127.687 477.4 143.125 477.4 174"
//                                     stroke="url(#leftLong)"
//                                     strokeWidth="1"
//                                       fill="none"
                                    
//                                 />
//                                 <defs>
//                                     <linearGradient id="leftLong" x1="238.9" y1="0" x2="238.9" y2="224">
//                                         <stop stopColor="#4d9eff"  />
//                                         <stop offset="0.5" stopColor="#3E7ECC" />
//                                         <stop offset="1" stopColor="#2E5F99"/>
//                                     </linearGradient>
//                                 </defs>
//                             </svg>
//                         </div>
//                         <div className="absolute left-[16.1rem] top-0 w-[13.9375rem] h-[10.875rem]">
//                             <svg viewBox="0 0 240 174" className="w-full h-full">
//                                 <path
//                                     d="M0.400391 0C0.400391 19.4346 0.400391 29.1519 2.63073 37.1019C8.28548 57.2582 24.0371 73.0098 44.1934 78.6646C52.1434 80.8949 61.8607 80.8949 81.2953 80.8949H146.295C177.17 80.8949 192.608 80.8949 204.595 86.4409C217.509 92.416 227.879 102.786 233.854 115.7C239.4 127.687 239.4 143.125 239.4 174"
//                                     stroke="url(#leftShort)"
//                                     strokeWidth="1"
//                                       fill="none"
//                                 />
//                                 <defs>
//                                     <linearGradient id="leftShort" x1="119.9" y1="0" x2="119.9" y2="224">
//                                         <stop stopColor="#4D9EFF" stopOpacity="1" />
//                                         <stop offset="0.5" stopColor="#3E7ECC" />
//                                         <stop offset="1" stopColor="#2E5F99" stopOpacity="0.2" />
//                                     </linearGradient>
//                                 </defs>
//                             </svg>
//                         </div>

//                         {/* MIDDLE LINE */}
//                         <div className="absolute left-1/2 -translate-x-1/2 top-0 h-[10.875rem]">
//                             <svg width="1" height="150" viewBox="0 0 1 174">
//                                 <path
//                                     d="M0.400391 0V80.8949L0.400491 174"
//                                     stroke="url(#middle)"
//                                     strokeWidth="1"
//                                       fill="none"
//                                 />
//                                 <defs>
//                                     <linearGradient id="middle" x1="0.4" y1="0" x2="0.4" y2="224">
//                                         <stop stopColor="#4D9EFF" stopOpacity="1" />
//                                         <stop offset="0.5" stopColor="#3E7ECC" />
//                                         <stop offset="1" stopColor="#2E5F99" stopOpacity="0.2" />
//                                     </linearGradient>
//                                 </defs>
//                             </svg>
//                         </div>

//                         {/* RIGHT SHORT */}
//                         <div className="absolute right-[17.1rem] top-0 w-[12.9375rem] h-[10.875rem]">
//                             <svg viewBox="0 0 227 174" className="w-full h-full">
//                                 <path
//                                     d="M226.4 0C226.4 19.4346 226.4 29.1519 224.17 37.1019C218.515 57.2582 202.764 73.0098 182.607 78.6646C174.657 80.8949 164.94 80.8949 145.505 80.8949H93.5055C62.6303 80.8949 47.1927 80.8949 35.2059 86.4409C22.2917 92.416 11.9215 102.786 5.94641 115.7C0.400398 127.687 0.400396 143.125 0.400391 174"
//                                     stroke="url(#rightShort)"
//                                      strokeWidth="1"
//                                       fill="none"
//                                 />
//                                 <defs>
//                                     <linearGradient id="rightShort" x1="113.4" y1="0" x2="113.4" y2="224">
//                                         <stop stopColor="#4D9EFF" stopOpacity="1" />
//                                         <stop offset="0.5" stopColor="#3E7ECC" />
//                                         <stop offset="1" stopColor="#2E5F99" stopOpacity="0.2" />
//                                     </linearGradient>
//                                 </defs>
//                             </svg>
//                         </div>

//                         {/* RIGHT LONG */}
//                         <div className="absolute right-[4.2rem] top-0 w-[25.8125rem] h-[10.875rem]">
//                             <svg viewBox="0 0 470 174" className="w-full h-full">
//                                 <path
//                                     d="M469.4 0C469.4 19.4346 469.4 29.1519 467.17 37.1019C461.515 57.2582 445.764 73.0098 425.607 78.6646C417.657 80.8949 407.94 80.8949 388.505 80.8949H93.5055C62.6303 80.8949 47.1927 80.8949 35.2059 86.4409C22.2918 92.416 11.9215 102.786 5.94642 115.7C0.400406 127.687 0.400401 143.125 0.400391 174"
//                                     stroke="url(#rightLong)"
//                                    strokeWidth="1"
//                                       fill="none"
//                                 />
//                                 <defs>
//                                     <linearGradient id="rightLong" x1="234.9" y1="0" x2="234.9" y2="224">
//                                         <stop stopColor="#4D9EFF" stopOpacity="1" />
//                                         <stop offset="0.5" stopColor="#3E7ECC" />
//                                         <stop offset="1" stopColor="#2E5F99" stopOpacity="0.2" />
//                                     </linearGradient>
//                                 </defs>
//                             </svg>
//                         </div>

//                     </div>

//                     {/* CENTER NODE */}
//            <div className="mt-12 sm:mt-20 lg:mt-[8rem] relative z-[2]">
//   <div className="shimmer-btn">
//     Decisions
//   </div>
// </div>
//                 </div>

//                 {/* BOTTOM POINTS */}
//                 <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {[
//                         "When you optimise ads without understanding margins, you scale losses.",
//                         "When you test creatives without fixing the funnel, you waste learnings.",
//                         "When you change agencies without changing decisions, the pattern repeats.",
//                     ].map((text, i) => (
//                         <div key={i} className="flex items-start gap-3">

//                             <div className="w-5 h-5 flex items-center justify-center rounded-full border border-red-500 flex-shrink-0">
//                                 <span className="text-red-500 text-xs">×</span>
//                             </div>

//                             <p className="text-white text-sm sm:text-[0.95rem] font-normal leading-relaxed">
//                                 {text}
//                             </p>

//                         </div>
//                     ))}
//                 </div>

//             </div>
//         </section>
//     );

    
// }






// "use client";

// /* 📱 Mobile Layout */
// function MobileFlowSection() {
//   return (
//     <section className="w-full flex justify-center py-10">

//       <div className="flex flex-col items-center gap-[2.5rem] w-full">

//         {/* TAGS */}
//         <div className="flex gap-3">
//           {["Tag 1", "Tag 2", "Tag 3"].map((tag, i) => (
//             <div
//               key={i}
//               className="
//                 flex w-[4.6rem]
//                 px-[0.625rem] py-[0.25rem]
//                 justify-center items-center
//                 rounded-[2.5625rem]
//                 border border-[#082B59]
//                 text-white text-xs
//               "
//             >
//               {tag}
//             </div>
//           ))}
//         </div>

//         {/* SVG LINES */}
//         <div className="flex items-start justify-center gap-1">

//           {/* LEFT BIG */}
//           <svg width="169" height="116" viewBox="0 0 169 116"
//             className="w-[10.46275rem] h-[7.25rem] shrink-0">
//             <path d="M0.400391 0C0.400391 30.5089 0.400391 45.7633 7.34991 56.9259C11.0704 62.9019 16.1127 67.9442 22.0887 71.6647C33.2513 78.6142 48.5057 78.6142 79.0146 78.6142H130.419C151.066 78.6142 167.805 95.3524 167.805 116"
//               stroke="url(#m1)" strokeWidth="0.8"/>
//             <defs>
//               <linearGradient id="m1" x1="84" y1="-6" x2="84" y2="228">
//                 <stop stopColor="#4D9EFF" stopOpacity="0"/>
//                 <stop offset="0.5" stopColor="#3E7ECC"/>
//                 <stop offset="1" stopColor="#2E5F99" stopOpacity="0"/>
//               </linearGradient>
//             </defs>
//           </svg>

//           {/* LEFT SMALL */}
//           <svg width="85" height="116" viewBox="0 0 85 116"
//             className="w-[5.24238rem] h-[7.25rem] shrink-0">
//             <path d="M0.4 0V36.6C0.4 59.8 19.1 78.6 42.3 78.6H46.8C67.5 78.6 84.2 95.3 84.2 116"
//               stroke="url(#m2)" strokeWidth="0.8"/>
//             <defs>
//               <linearGradient id="m2" x1="42" y1="-6" x2="42" y2="228">
//                 <stop stopColor="#4D9EFF" stopOpacity="0"/>
//                 <stop offset="0.5" stopColor="#3E7ECC"/>
//                 <stop offset="1" stopColor="#2E5F99" stopOpacity="0"/>
//               </linearGradient>
//             </defs>
//           </svg>

//           {/* CENTER */}
//           <svg width="1" height="45" viewBox="0 0 1 45"
//             className="h-[2.75469rem] shrink-0">
//             <path d="M0.4 0V44"
//               stroke="url(#m3)" strokeWidth="0.8"/>
//             <defs>
//               <linearGradient id="m3" x1="0.9" y1="0" x2="0.9" y2="134">
//                 <stop stopColor="#4D9EFF" stopOpacity="0"/>
//                 <stop offset="0.5" stopColor="#3E7ECC"/>
//                 <stop offset="1" stopColor="#2E5F99" stopOpacity="0"/>
//               </linearGradient>
//             </defs>
//           </svg>

//           {/* RIGHT SMALL */}
//           <svg width="81" height="116" viewBox="0 0 81 116"
//             className="w-[4.95719rem] h-[7.25rem] shrink-0">
//             <path d="M79.7 0V38.9C79.7 60.8 61.9 78.6 40 78.6H37.7C17.1 78.6 0.4 95.3 0.4 116"
//               stroke="url(#m4)" strokeWidth="0.8"/>
//             <defs>
//               <linearGradient id="m4" x1="40" y1="-6" x2="40" y2="228">
//                 <stop stopColor="#4D9EFF" stopOpacity="0"/>
//                 <stop offset="0.5" stopColor="#3E7ECC"/>
//                 <stop offset="1" stopColor="#2E5F99" stopOpacity="0"/>
//               </linearGradient>
//             </defs>
//           </svg>

//           {/* RIGHT BIG */}
//           <svg width="166" height="116" viewBox="0 0 166 116"
//             className="w-[10.28731rem] h-[7.25rem] shrink-0">
//             <path d="M164.9 0C164.9 30.5 164.9 45.7 158 56.9C154.3 62.9 149.2 67.9 143.3 71.6C132.1 78.6 116.8 78.6 86.3 78.6H37.7C17.1 78.6 0.4 95.3 0.4 116"
//               stroke="url(#m5)" strokeWidth="0.8"/>
//             <defs>
//               <linearGradient id="m5" x1="82" y1="-6" x2="82" y2="228">
//                 <stop stopColor="#4D9EFF" stopOpacity="0"/>
//                 <stop offset="0.5" stopColor="#3E7ECC"/>
//                 <stop offset="1" stopColor="#2E5F99" stopOpacity="0"/>
//               </linearGradient>
//             </defs>
//           </svg>

//         </div>

//         {/* BUTTON */}
//         <button
//           className="
//             flex px-[1.25rem] py-[0.625rem]
//             justify-center items-center gap-[0.625rem]
//             rounded-[62.4375rem]
//             bg-[#1C6DCC] text-white text-sm
//           "
//         >
//           Make Decision
//         </button>

//       </div>
//     </section>
//   );
// }

// /* 🖥️ Desktop Layout (KEEP YOUR ORIGINAL CODE HERE) */
// function DesktopFlowSection() {
//   return (
//      <section className="w-full flex justify-center py-16">

//       <div className="w-full max-w-[1200px] px-4">

//         {/* 🔴 PASTE YOUR ORIGINAL DESKTOP DESIGN HERE */}
        
//         {/* Example structure (replace with your actual code) */}
//         <div className="flex flex-col items-center gap-10">

//           {/* TAGS */}
//           <div className="flex gap-4">
//             <div className="px-4 py-1 border border-[#082B59] rounded-full text-white">
//               Tag 1
//             </div>
//             <div className="px-4 py-1 border border-[#082B59] rounded-full text-white">
//               Tag 2
//             </div>
//           </div>

//           {/* SVG LINES (DESKTOP ORIGINAL) */}
//           <div className="flex items-start justify-center gap-4">

//             {/* LEFT BIG */}
//             <svg width="169" height="116" viewBox="0 0 169 116" fill="none">
//               <path d="M0.400391 0C0.400391 30.5089 0.400391 45.7633 7.34991 56.9259C11.0704 62.9019 16.1127 67.9442 22.0887 71.6647C33.2513 78.6142 48.5057 78.6142 79.0146 78.6142H130.419C151.066 78.6142 167.805 95.3524 167.805 116"
//                 stroke="url(#d1)" strokeWidth="0.8"/>
//               <defs>
//                 <linearGradient id="d1" x1="84" y1="-6" x2="84" y2="228">
//                   <stop stopColor="#4D9EFF" stopOpacity="0"/>
//                   <stop offset="0.5" stopColor="#3E7ECC"/>
//                   <stop offset="1" stopColor="#2E5F99" stopOpacity="0"/>
//                 </linearGradient>
//               </defs>
//             </svg>

//             {/* LEFT SMALL */}
//             <svg width="85" height="116" viewBox="0 0 85 116" fill="none">
//               <path d="M0.4 0V36.6C0.4 59.8 19.1 78.6 42.3 78.6H46.8C67.5 78.6 84.2 95.3 84.2 116"
//                 stroke="url(#d2)" strokeWidth="0.8"/>
//               <defs>
//                 <linearGradient id="d2" x1="42" y1="-6" x2="42" y2="228">
//                   <stop stopColor="#4D9EFF" stopOpacity="0"/>
//                   <stop offset="0.5" stopColor="#3E7ECC"/>
//                   <stop offset="1" stopColor="#2E5F99" stopOpacity="0"/>
//                 </linearGradient>
//               </defs>
//             </svg>

//             {/* CENTER */}
//             <svg width="1" height="45" viewBox="0 0 1 45" fill="none">
//               <path d="M0.4 0V44" stroke="url(#d3)" strokeWidth="0.8"/>
//               <defs>
//                 <linearGradient id="d3" x1="0.9" y1="0" x2="0.9" y2="134">
//                   <stop stopColor="#4D9EFF" stopOpacity="0"/>
//                   <stop offset="0.5" stopColor="#3E7ECC"/>
//                   <stop offset="1" stopColor="#2E5F99" stopOpacity="0"/>
//                 </linearGradient>
//               </defs>
//             </svg>

//             {/* RIGHT SMALL */}
//             <svg width="81" height="116" viewBox="0 0 81 116" fill="none">
//               <path d="M79.7 0V38.9C79.7 60.8 61.9 78.6 40 78.6H37.7C17.1 78.6 0.4 95.3 0.4 116"
//                 stroke="url(#d4)" strokeWidth="0.8"/>
//               <defs>
//                 <linearGradient id="d4" x1="40" y1="-6" x2="40" y2="228">
//                   <stop stopColor="#4D9EFF" stopOpacity="0"/>
//                   <stop offset="0.5" stopColor="#3E7ECC"/>
//                   <stop offset="1" stopColor="#2E5F99" stopOpacity="0"/>
//                 </linearGradient>
//               </defs>
//             </svg>

//             {/* RIGHT BIG */}
//             <svg width="166" height="116" viewBox="0 0 166 116" fill="none">
//               <path d="M164.9 0C164.9 30.5 164.9 45.7 158 56.9C154.3 62.9 149.2 67.9 143.3 71.6C132.1 78.6 116.8 78.6 86.3 78.6H37.7C17.1 78.6 0.4 95.3 0.4 116"
//                 stroke="url(#d5)" strokeWidth="0.8"/>
//               <defs>
//                 <linearGradient id="d5" x1="82" y1="-6" x2="82" y2="228">
//                   <stop stopColor="#4D9EFF" stopOpacity="0"/>
//                   <stop offset="0.5" stopColor="#3E7ECC"/>
//                   <stop offset="1" stopColor="#2E5F99" stopOpacity="0"/>
//                 </linearGradient>
//               </defs>
//             </svg>

//           </div>

//           {/* BUTTON */}
//           <button className="px-6 py-2 rounded-full bg-[#1C6DCC] text-white">
//             Make Decision
//           </button>

//         </div>
//       </div>
//     </section>
//   );
// }

// /* 🎯 Main Export */
// export default function FlowSection() {
//   return (
//     <>
//       {/* Mobile */}
//       <div className="block md:hidden">
//         <MobileFlowSection />
//       </div>

//       {/* Desktop */}
//       <div className="hidden md:block">
//         <DesktopFlowSection />
//       </div>
//     </>
//   );
// }


