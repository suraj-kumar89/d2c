import DecisionSection from "@/SharedComponent/Decisonsection";
import Hero from "@/SharedComponent/Hero";
import LogoMarquee from "@/SharedComponent/Logomarquee";
import ProblemSection from "@/SharedComponent/Problemsection";
import TimelineSection from "@/SharedComponent/Timeline";
import Showcase from "@/SharedComponent/Showcase";
import ComparisonSection from "@/SharedComponent/Solution";
import Image from "next/image";
import ProcessSection from "@/SharedComponent/Process";
import PrinciplesSection from "@/SharedComponent/Principle";
import FounderSection from "@/SharedComponent/Founder";
import CaseStudySection from "@/SharedComponent/CaseStudy";
import ClientsSection from "@/SharedComponent/OurClients";
import OutcomesSection from "@/SharedComponent/OutComes";
import FitSection from "@/SharedComponent/FitSection";
import LimitedSection from "@/SharedComponent/Limited";
import FAQSection from "@/SharedComponent/FAQs";
import CTASection from "@/SharedComponent/FinalCTA";
import Footer from "@/SharedComponent/Footer";
import TestimonialSection from "@/SharedComponent/Testimonials";

export default function Home() {
  return (
    <main>
   <Hero/>
   <LogoMarquee/>
   <Showcase/>
   <ProblemSection/>
   <ComparisonSection/>
   <DecisionSection/>
   <TimelineSection/>
   <ProcessSection/>
   <PrinciplesSection/>
   <FounderSection/>
   <CaseStudySection/>
   <ClientsSection/>
   <OutcomesSection/>
   <TestimonialSection/>
   <FitSection/>
   <LimitedSection/>

   <CTASection/>
      <FAQSection/>
   <Footer/>
    </main>
  );
}
