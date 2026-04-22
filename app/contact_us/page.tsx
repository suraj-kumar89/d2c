"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Footer from "@/SharedComponent/Footer";


export default function BookDemo() {
  const router = useRouter();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    const onMessage = (e: MessageEvent) => {
      if (e.origin !== "https://calendly.com") return;
      if (typeof e.data !== "object" || !("event" in e.data)) return;

      if ((e.data as any).event === "calendly.event_scheduled") {
        router.push("/meeting-booked");
      }
    };

    window.addEventListener("message", onMessage);

    return () => {
      window.removeEventListener("message", onMessage);
    };
  }, [router]);

  return (
    <>
   
      <div className="min-h-screen w-full flex justify-center items-center">
        <div
          className="calendly-inline-widget w-full h-screen"
          data-url="https://calendly.com/shitanshu-digital/bluvo-discovery-call"
        />
      </div>

      <Footer />
    </>
  );
}