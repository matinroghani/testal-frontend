import Features from "@/components/landing/Features/Features";
import HeroSection from "@/components/landing/Hero/HeroSection";
import TrustedBy from "@/components/landing/TrustedBy/TrustedBy";
import Reveal from "@/components/common/Reveal";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 !text-[var(--color-primary)]">
      <Reveal>
        <HeroSection />
      </Reveal>

      <Reveal delay={0.1}>
        <TrustedBy />
      </Reveal>

      <Reveal delay={0.1}>
        <Features />
      </Reveal>
    </div>
  );
}