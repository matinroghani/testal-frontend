import TrustedBy_Title from "./components/TrustedBy_Title";
import TrustedBy_Carousel from "./components/TrustedBy_Carousel";


export default function TrustedBy() {
  return (
    <section
      className="
        mt-5
        rounded-xl
        bg-[var(--color-surface)]
        px-6
        py-5
        shadow-[var(--shadow-md)]

        sm:px-8
        lg:px-10
      "
    >
      <TrustedBy_Title />

      <TrustedBy_Carousel />
    </section>
  );
}