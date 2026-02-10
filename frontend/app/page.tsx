import type { Metadata } from "next";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import IndustryCards from "./components/IndustryCards";
import TestimonialSection from "./components/TestimonialSection";

export const metadata: Metadata = {
  title: "Warehouse, CDL, IT & Healthcare Staffing",
  description:
    "Hireverse Global connects employers with warehouse staff, CDL drivers, IT experts, and healthcare professionals across the USA, Canada, and Australia.",
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <IndustryCards />
      <TestimonialSection />
    </main>
  );
}
