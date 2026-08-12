import HeroContent from "./components/HeroContent";
import HeroDashboardPreview from "./components/HeroDashboardPreview";


export default function HeroSection() {
  return (
    <section
      className="
        flex
        flex-col-reverse
        items-center
        justify-between
        gap-8
        px-4

        sm:gap-10
        sm:px-6

        md:gap-8
        md:px-8

        lg:flex-row
        lg:items-center
        lg:gap-10
        lg:mt-12
        lg:px-0

        xl:gap-14
      "
    >
      <HeroContent />
      <HeroDashboardPreview />
    </section>
  );
}