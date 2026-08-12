import Features from "@/components/landing/Features/Features";
import HeroSection from "@/components/landing/Hero/HeroSection";
import TrustedBy from "@/components/landing/TrustedBy/TrustedBy";

export default function Home() {
  return (
    <div className="!text-[var(--color-primary)] flex flex-col gap-5">
      <HeroSection />
      <TrustedBy/>
      <Features/>
    </div>
  );
}
