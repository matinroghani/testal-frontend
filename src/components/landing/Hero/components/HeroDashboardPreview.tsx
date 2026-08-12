import Image from "next/image";

export default function HeroDashboardPreview() {
  return (
    <div
      className="
        relative
        w-full
        max-w-[600px]
        aspect-video

        sm:max-w-[650px]

        lg:w-1/2
        lg:max-w-none

        xl:w-[52%]
      "
    >
      <Image
        src="/images/landing/dashboard.png"
        alt="Testal Dashboard Preview"
        fill
        priority
        sizes="
          (max-width: 640px) 100vw,
          (max-width: 1024px) 90vw,
          50vw
        "
        className="
          rounded-lg
          object-contain
          shadow-[var(--shadow-md)]
        "
      />
    </div>
  );
}