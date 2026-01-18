import { Navbar } from "@/components/navbar";
import ExperiencePage from "@/components/experience-section";
import HeroSection from "@/components/hero-section";

export default function Index() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Experience Page */}
        <ExperiencePage />
      </main>
    </>
  );
}
