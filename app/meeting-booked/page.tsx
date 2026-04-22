

import Footer from "@/SharedComponent/Footer";
export default function MeetingBookedPage() {
  return (
    <>
 

      <div className="min-h-screen flex flex-col justify-center items-center bg-black">
        <h1 className="text-white text-4xl lg:text-9xl font-semibold text-center pb-10">
          Thank You!
        </h1>

        <p className="text-white text-[16px] font-semibold text-center max-w-xl">
          Your meeting has been booked. I look forward to connecting with you soon.
        </p>
      </div>

      <Footer />
    </>
  );
}