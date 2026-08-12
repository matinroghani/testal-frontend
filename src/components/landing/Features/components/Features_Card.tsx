import { Feature } from "@/types/feature";

type FeaturesCardProps = {
  feature: Feature;
};

export default function Features_Card({
  feature,
}: FeaturesCardProps) {
  const Icon = feature.icon;

  return (
    <div
      className="
        flex
        h-full
        items-center
        justify-between
        gap-5
        rounded-xl
        border
        border-[var(--color-border)]
        bg-[var(--color-surface)]
        p-5
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:shadow-[var(--shadow-md)]
      "
    >
      <div className="flex-1 w-1/2 ">
        <h3 className="text-base font-semibold text-[var(--color-foreground)]">
          {feature.title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-[var(--color-primary-light)]">
          {feature.detail}
        </p>
      </div>

      <div
        className={`
          flex
          h-20
          w-20
          shrink-0
          items-center
          justify-center
          rounded-full
          ${feature.iconBackground}
        `}
      >
        <Icon
          className={`h-8 w-8 ${feature.iconColor}`}
          strokeWidth={1.8}
        />
      </div>
    </div>
  );
}