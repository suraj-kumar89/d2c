"use client";

import { BarChart3, AlertTriangle, RefreshCcw, Sparkles } from "lucide-react";

export default function ProblemSection() {
  return (
    <section className="w-full flex justify-center">
      <div
        className="
        w-full max-w-[90rem]
        px-4 sm:px-6 lg:px-8
        py-[3rem] sm:py-[4rem] lg:py-[5rem]
        flex flex-col gap-[3rem]
      "
      >

        {/* Heading */}
        <h2
          className="
          text-white
          font-[600]
          tracking-[-0.07rem]

          text-[2rem] leading-[3rem]
          sm:text-[2rem] sm:leading-[3rem]
          lg:text-[3rem] lg:leading-[4rem]
        "
        >
          You are spending. <br />
          But you are not sure it is working.
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1.5rem]">

          {/* Card 1 */}
          <div
            className="
            flex flex-col items-start justify-start
            gap-[2.5rem]
            w-full

            px-[2rem] py-[2rem]
            sm:px-[2.5rem] sm:py-[2.5rem]
            lg:px-[3rem] lg:py-[2.5rem]

            rounded-[1rem]
            border-l-[1.5px] border-[#F59E0B]
            bg-[rgba(28,27,27,0.54)]
          "
          >
            <BarChart3 className="w-12 h-12 text-[#F59E0B]" />

            <p
              className="
              text-[#E5E2E1]
              font-[500]
              tracking-[-0.02rem]

              text-[1rem] leading-[1.5rem]
              sm:text-[1rem] sm:leading-[2rem]
              lg:text-[1.5rem] lg:leading-[2rem]
            "
            >
              Spend is going up. Confidence is not.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="
            flex flex-col items-start gap-[2.5rem]
            px-[2rem] py-[2rem]
            sm:px-[2.5rem] sm:py-[2.5rem]
            lg:px-[3rem] lg:py-[2.5rem]
            rounded-[1rem]
            border-l-[1.5px] border-red-500
            bg-[rgba(28,27,27,0.54)]
          "
          >
            <AlertTriangle className="w-12 h-12 text-red-500" />

            <p className="
              text-[#E5E2E1]
              font-[500]
              tracking-[-0.02rem]

              text-[1rem] leading-[1.5rem]
              sm:text-[1rem] sm:leading-[2rem]
              lg:text-[1.5rem] lg:leading-[2rem]
            ">
              Reports look fine. Your bank account does not.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="
            flex flex-col items-start gap-[2.5rem]
            px-[2rem] py-[2rem]
            sm:px-[2.5rem] sm:py-[2.5rem]
            lg:px-[3rem]

            rounded-[1rem]
            border-l-[1.5px] border-indigo-500
            bg-[rgba(28,27,27,0.54)]
          "
          >
            <RefreshCcw className="w-12 h-12 text-indigo-500" />

            <p className="
              text-[#E5E2E1]
              font-[500]
              tracking-[-0.02rem]

              text-[1rem] leading-[1.5rem]
              sm:text-[1rem] sm:leading-[2rem]
              lg:text-[1.5rem] lg:leading-[2rem]
            ">
              Every month feels like starting over.
            </p>
          </div>

          {/* Card 4 */}
          <div
            className="
            flex flex-col items-start gap-[2.5rem]
            px-[2rem] py-[2rem]
            sm:px-[2.5rem] sm:py-[2.5rem]
            lg:px-[3rem]

            rounded-[1rem]
            border-l-[1.5px] border-green-400
            bg-[rgba(28,27,27,0.54)]
          "
          >
            <Sparkles className="w-12 h-12 text-green-400" />

            <p className="
              text-[#E5E2E1]
              font-[500]
              tracking-[-0.02rem]

              text-[1rem] leading-[1.5rem]
              sm:text-[1rem] sm:leading-[2rem]
              lg:text-[1.5rem] lg:leading-[2rem]
            ">
              You do not know what is actually driving growth.
            </p>
          </div>

        </div>

        {/* Bottom Statement */}
        <div
          className="
          flex justify-center items-center
          px-[2rem] py-[0.875rem]

          sm:px-[3rem]
          lg:px-[4rem]

          rounded-md
          bg-[linear-gradient(90deg,rgba(255,113,108,0)_0%,rgba(255,113,108,0.1)_25%,rgba(255,113,108,0.1)_50%,rgba(255,113,108,0.1)_75%,rgba(255,113,108,0)_100%)]
        "
        >
          <p
            className="
            text-[#FF7F7A]
            text-center
            font-[500]
            tracking-[-0.015rem]
            text-[1.1rem] leading-[1.6rem]
            sm:text-[1.3rem] sm:leading-[1.8rem]
            lg:text-[1.5rem] lg:leading-[2rem]
          "
          >
            This is not a visibility problem. <br />
            It is a clarity problem.
          </p>
        </div>

      </div>
    </section>
  );
}