"use client";

import Image from "next/image";

const testimonials = [
  {
    text: `“Shitanshu is a highly skilled Performance Marketer. During our time together at Outplay, Shitanshu consistently delivered impressive results, thanks to his deep understanding of data analysis, ad creative, and audience targeting. I was particularly impressed with Shitanshu's ability to deliver on lead requirements from paid campaigns while keeping costs low.”`,
    name: "Sandeep John",
    role: "Marketing Director",
    image: "/testimonials/img1.png",
  },
];
const avatars = [
  "/testimonials/img1.png",
  "/testimonials/img2.png",
  "/testimonials/img3.png",
  "/testimonials/img4.png",
];
export default function TestimonialSection() {
  return (
    <section className="w-full flex justify-center">
      <div
        className="
        w-full max-w-[90rem]
        px-6 lg:px-[6rem]
        py-[6rem]
        flex flex-col items-center
        gap-[3.5rem]
      "
      >
        {/* Label */}
        <span className="text-[#7A7A7A] text-xs  tracking-wide mb-[-3rem] capitalize">
          Testimonial
        </span>

        {/* Heading */}
        <h2 className="text-white text-center text-[3rem] font-semibold leading-[3.8rem]">
          Customer <br /> Testimonial
        </h2>

        {/* Scroll Container */}
        <div className="w-full overflow-x-auto scrollbar-hide">
          <div className="flex gap-8 min-w-max">
            {testimonials.map((item, i) => (
              <div
                key={i}
                className="
                  relative
                  flex justify-between items-start
                  w-[70rem]
                  h-[21.5rem]
                  gap-10
                "
              >
                {/* LEFT CONTENT */}
                <div className="flex flex-col gap-8 max-w-[55rem]">
                  {/* Stars */}
                  <div className="flex gap-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        width="19"
                        height="18"
                        viewBox="0 0 19 18"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.33788 0.766285C8.76744 -0.255428 10.2326 -0.255428 10.6621 0.766285L12.6584 5.51531L17.8401 5.92703C18.9562 6.01525 19.4087 7.39272 18.5582 8.1137L14.6107 11.4596L15.8159 16.462C16.0758 17.5396 14.8916 18.3906 13.9366 17.8138L9.5 15.1329L5.06341 17.8138C4.10839 18.3906 2.92422 17.5387 3.18407 16.462L4.38934 11.4596L0.441758 8.1137C-0.40874 7.39272 0.043836 6.01525 1.15994 5.92703L6.34155 5.51531L8.33788 0.766285Z"
                          fill="#34D399"
                        />
                      </svg>
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-[#E0E0E0] text-[1.5rem] leading-[2rem] font-semibold tracking-[-0.015rem]">
                    {item.text}
                  </p>
                </div>

                <div className="flex justify-end">
                  <div className="w-[6.75rem] h-[5.5625rem]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 108 89"
                      className="w-full h-full opacity-25 fill-[#F2F2F2]"
                    >
                      <path d="M90.3766 82.1888C102.126 71.2908 108 52.2194 108 24.9745C108 16.1956 106.042 9.83844 102.126 5.90307C97.908 1.96769 91.2803 0 82.2427 0C73.205 0 67.1799 1.66496 64.1674 4.99489C61.1548 8.02211 59.6485 12.7143 59.6485 19.0714C59.6485 28.1531 60.5523 34.2075 62.3598 37.2347C63.8661 41.7755 68.9875 44.0459 77.7239 44.0459C83.1464 44.0459 85.8577 46.7704 85.8577 52.2194C85.8577 64.631 82.0921 75.3775 74.5607 84.4592C74.5607 87.4864 75.6151 89 77.7239 89C81.6402 88.3946 85.8577 86.1241 90.3766 82.1888ZM30.728 82.1888C42.477 71.2908 48.3515 52.2194 48.3515 24.9745C48.3515 16.1956 46.3933 9.83844 42.477 5.90307C38.2594 1.96769 31.6318 0 22.5941 0C13.5565 0 7.53139 1.66496 4.51884 4.99489C1.50628 8.02211 7.62939e-06 12.7143 7.62939e-06 19.0714C7.62939e-06 28.1531 0.903778 34.2075 2.71131 37.2347C4.21758 41.7755 9.33891 44.0459 18.0753 44.0459C23.4979 44.0459 26.2092 46.7704 26.2092 52.2194C26.2092 64.631 22.4435 75.3775 14.9121 84.4592C14.9121 87.4864 15.9665 89 18.0753 89C21.9916 88.3946 26.2092 86.1241 30.728 82.1888Z" />
                    </svg>
                  </div>
                </div>

                {/* AUTHOR (BOTTOM RIGHT ABSOLUTE) */}
                <div
                  className="
                    absolute
                    bottom-4 right-[11.75rem]
                    flex items-center gap-4
                    border-[0.5px] border-white
                    rounded-[0.9375rem]
                    py-[0.1875rem] pr-[1rem] pl-[0.1875rem] 
                  "
                >
                  <div className="relative w-[3.5rem] h-[3.5rem]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="rounded-[0.75rem] object-cover"
                    />
                  </div>

                  <div className="flex flex-col">
                    <span className="text-white text-[1.25rem] font-semibold">
                      {item.name}
                    </span>
                    <span className="text-[#7A7A7A] text-sm">
                      {item.role}
                    </span>
                  </div>
                </div>

                  <div className="absolute
                    bottom-5
                    right-0
                    flex gap-2">
                    {avatars.slice(1).map((src, i) => (
                    <div
                      key={i}
                      className="relative w-[3.5rem] h-[3.5rem]"
                    >
                      <Image
                        src={src}
                        alt="client"
                        fill
                        className="rounded-[0.75rem] object-cover"
                      />
            </div>
          ))}
           </div>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </section>
  );
}