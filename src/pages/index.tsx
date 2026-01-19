import { Navbar } from "@/components/navbar";
import ExperienceSection from "@/components/experience-section";
import HeroSection from "@/components/hero-section";
import SkillSection from "@/components/skills-section";

export default function Index() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Experience Page */}
        <ExperienceSection />

        {/* Skills */}
        <SkillSection />
      </main>
    </>
  );
}
