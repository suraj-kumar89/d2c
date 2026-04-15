"use client";

import { useState } from "react";

export default function FAQSection() {
  const faqs = [
    "How is Shopify SEO different from regular SEO?",
    "Do you guarantee #1 rankings?",
    "Will I need to create content?",
    "What if my store is small or just starting?",
    "How long will it take to see results?",
    "Can SEO really reduce my ad spend?",
    "How do I know what's happening behind the scenes?",
    "Do you work with brands outside India?",
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full flex justify-center">
      <div
        className="
        w-full max-w-[90rem]
        px-4 sm:px-8 lg:px-[6rem]
        py-10 sm:py-14 lg:py-0

        flex flex-col items-start
        gap-10 sm:gap-[3.5625rem]
      "
      >

        {/* TOP ROW */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-start gap-6">

          {/* Heading */}
          <h2
            className="
            text-[#EDF5FF] font-semibold
            tracking-[-0.07rem]

            text-[2rem] leading-[2.6rem]
            sm:text-[3rem] sm:leading-[3.8rem]
            lg:text-[3.5rem] lg:leading-[4.5rem]
          "
          >
            Have questions? <br />
            <span className="text-[#4D9EFF]">
              Find answers.
            </span>
          </h2>

        </div>

        {/* FAQ GRID */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-6 sm:gap-x-[4rem] gap-y-[1.25rem] sm:gap-y-[1.5rem]">

          {faqs.map((question, i) => (
            <div
              key={i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="
              flex flex-col
              p-5 sm:p-[1.5rem]
              gap-[0.75rem]

              rounded-[1rem]
              cursor-pointer

              transition-all duration-200
              hover:bg-[#111]
            "
            >

              {/* Row */}
              <div className="flex justify-between items-center w-full">

                {/* Question */}
                <p
                  className="
                  text-white font-semibold

                  text-[0.95rem] sm:text-[1rem]
                  leading-[1.4rem] sm:leading-[1.5rem]
                "
                >
                  {question}
                </p>

                {/* Icon */}
                <span className="text-[#A79D9A] text-lg">
                  {openIndex === i ? "−" : "+"}
                </span>

              </div>

              {/* Optional Answer */}
              {openIndex === i && (
                <p className="text-[#A79D9A] text-sm leading-[1.5rem]">
                  This is where the answer will go. You can replace it with real content.
                </p>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}