"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const testimonials = [
  {
    text: `“Shitanshu is a highly skilled Performance Marketer. During our time together at Outplay, Shitanshu consistently delivered impressive results, thanks to his deep understanding of data analysis, ad creative, and audience targeting. I was particularly impressed with Shitanshu's ability to deliver on lead requirements from paid campaigns while keeping costs low.”`,
    name: "Sandeep John",
    role: "Marketing Director",
    image: "/testimonials/img1.png",
  },
  {
    text: `“I had the pleasure of collaborating with Shitanshu on Hangookd’s digital marketing initiatives. His expertise significantly expanded our online presence and boosted customer engagement. His well-crafted campaigns and strategic approach improved our visibility and sales. I highly recommend him to anyone looking to achieve strong digital marketing results.”`,
    name: "Cheshta Mittal",
    role: "Founder, Hangookd",
    image: "/testimonials/img2.png",
  },
  {
    text: `“Shitanshu and his team has helped revive our yoga school, we went from zero visibility to getting student bookings within the first month. They transformed our website, ran effective ads, and got us ranking on Google for top keywords. Truly a game-changer for us.”`,
    name: "Pramod Sahoo",
    role: "Founder, Hariom Yoga Vidya School",
    image: "/testimonials/img3.png",
  },
  {
    text: `“Bluvo Digital helped launch my fashion brand, Brazen Born, and we started getting orders much sooner than expected. Their strategy, audience targeting, and messaging were spot on. I’d recommend them to anyone starting a new brand.”`,
    name: "Nisha Seth",
    role: "Co-Founder, Brazen Born",
    image: "/testimonials/img4.png",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const next = () =>
    setIndex((prev) => (prev + 1) % testimonials.length);

  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  const active = testimonials[index];

  return (
    <section className="w-full flex justify-center">
      <div className="w-full max-w-[90rem] px-4 sm:px-6 lg:px-[6rem] py-[4rem] sm:py-[5rem] lg:py-[6rem] flex flex-col items-center gap-[2.5rem] sm:gap-[3rem] lg:gap-[3.5rem]">

        <span className="text-[#7A7A7A] text-xs mb-[-2rem] sm:mb-[-3rem]">
          Testimonial
        </span>

        <h2 className="text-white text-center text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-semibold leading-tight">
          Customer <br /> Testimonial
        </h2>

        {/* CARD */}
        <div className="relative w-full max-w-[70rem] min-h-[22rem] sm:min-h-[20rem] lg:h-[21.5rem] flex flex-col justify-between">

          {/* TEXT */}
          <div className="max-w-full lg:max-w-[55rem]">

            {/* STARS */}
            <div className="flex gap-2 mb-4 sm:mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="19" height="18">
                  <path
                    d="M8.33788 0.766285L10.6621 0.766285L12.6584 5.51531L17.8401 5.92703L14.6107 11.4596L15.8159 16.462L9.5 15.1329L5.06341 17.8138L4.38934 11.4596L0.441758 8.1137L6.34155 5.51531Z"
                    fill="#34D399"
                  />
                </svg>
              ))}
            </div>

            {/* QUOTE ICON */}
            <div className="hidden sm:block absolute top-6 right-6 w-[5rem] sm:w-[6.75rem] h-auto opacity-25 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 108 89"
                className="w-full h-full fill-[#F2F2F2]"
              >
                <path d="M90.3766 82.1888C102.126 71.2908 108 52.2194 108 24.9745C108 16.1956 106.042 9.83844 102.126 5.90307C97.908 1.96769 91.2803 0 82.2427 0C73.205 0 67.1799 1.66496 64.1674 4.99489C61.1548 8.02211 59.6485 12.7143 59.6485 19.0714C59.6485 28.1531 60.5523 34.2075 62.3598 37.2347C63.8661 41.7755 68.9875 44.0459 77.7239 44.0459C83.1464 44.0459 85.8577 46.7704 85.8577 52.2194C85.8577 64.631 82.0921 75.3775 74.5607 84.4592C74.5607 87.4864 75.6151 89 77.7239 89C81.6402 88.3946 85.8577 86.1241 90.3766 82.1888ZM30.728 82.1888C42.477 71.2908 48.3515 52.2194 48.3515 24.9745C48.3515 16.1956 46.3933 9.83844 42.477 5.90307C38.2594 1.96769 31.6318 0 22.5941 0C13.5565 0 7.53139 1.66496 4.51884 4.99489C1.50628 8.02211 0 12.7143 0 19.0714C0 28.1531 0.903778 34.2075 2.71131 37.2347C4.21758 41.7755 9.33891 44.0459 18.0753 44.0459C23.4979 44.0459 26.2092 46.7704 26.2092 52.2194C26.2092 64.631 22.4435 75.3775 14.9121 84.4592C14.9121 87.4864 15.9665 89 18.0753 89C21.9916 88.3946 26.2092 86.1241 30.728 82.1888Z" />
              </svg>
            </div>

            {/* TEXT */}
            <p className="text-[#E0E0E0] text-[1rem] sm:text-[1.2rem] lg:text-[1.5rem] font-semibold leading-relaxed">
              {active.text}
            </p>
          </div>

          {/* ACTIVE USER */}
          <div className="relative lg:absolute lg:bottom-4 lg:left-[2rem] mt-6 lg:mt-0 flex items-center gap-3 sm:gap-4 border border-white rounded-[0.9375rem] py-1 pr-3 sm:pr-4 pl-1">

            <div className="relative w-[3rem] h-[3rem] sm:w-[3.4rem] sm:h-[3.4rem] lg:w-[3.8rem] lg:h-[3.8rem]">
              <Image src={active.image} alt={active.name} fill className="rounded-[0.75rem]" />
            </div>

            <div>
              <div className="text-white font-semibold">{active.name}</div>
              <div className="text-[#7A7A7A] text-sm">{active.role}</div>
            </div>
          </div>

          {/* AVATAR QUEUE */}
          <div className="relative lg:absolute lg:bottom-5 lg:right-0 mt-4 lg:mt-0 flex gap-2 sm:gap-3 items-center overflow-x-auto lg:overflow-visible px-1">

            {testimonials.map((t, i) => {
              const isActive = i === index;

              return (
                <div
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`
                    relative cursor-pointer transition-all duration-300
                    ${isActive
                      ? "w-[3rem] h-[3rem] sm:w-[3.4rem] sm:h-[3.4rem] lg:w-[3.8rem] lg:h-[3.8rem] scale-110"
                      : "w-[2.5rem] h-[2.5rem] sm:w-[2.8rem] sm:h-[2.8rem] lg:w-[3rem] lg:h-[3rem] opacity-60 hover:scale-110"
                    }
                  `}
                >
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="rounded-[0.75rem] object-cover"
                  />
                </div>
              );
            })}

          </div>

          {/* NAV BUTTONS (desktop only) */}
          <button
            onClick={prev}
            className="hidden lg:flex absolute left-[-4rem] top-1/2 -translate-y-1/2 
            w-12 h-12 items-center justify-center
            rounded-full border border-white/20 
            bg-white/5 backdrop-blur-md
            hover:bg-white/10 hover:scale-105
            transition-all duration-300"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            onClick={next}
            className="hidden lg:flex absolute right-[-4rem] top-1/2 -translate-y-1/2 
            w-12 h-12 items-center justify-center
            rounded-full border border-white/20 
            bg-white/5 backdrop-blur-md
            hover:bg-white/10 hover:scale-105
            transition-all duration-300"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>

        </div>
      </div>
    </section>
  );
}