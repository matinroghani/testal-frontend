import TrustPersons from "./TrustPersons";

export default function HeroSectionTrust() {
  return (
    <div
      className="
        mt-3
        flex
        w-full
        flex-col
        items-center
        justify-center
        gap-3

        sm:flex-row
        sm:flex-wrap

        lg:mt-5
        lg:justify-start
      "
    >
      <p
        className="
          flex
          items-center
          gap-1
          text-center
          text-sm
          tracking-normal
          text-[var(--color-primary-light)]
        "
      >
        <span className="text-sm text-[var(--color-brand-purple)]">
          100 +
        </span>
        برند معتبر به تستال اعتماد کرده اند
      </p>

      <TrustPersons />
    </div>
  );
}