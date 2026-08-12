import Features_Card from "./components/Features_Card";
import { features } from "@/data/features";

export default function Features() {
  return (
    <div
      className="
        mt-4
        grid
        grid-cols-1
        gap-4
        sm:grid-cols-2
        lg:grid-cols-4
      "
    >
      {features.map((feature) => (
        <Features_Card
          key={feature.id}
          feature={feature}
        />
      ))}
    </div>
  );
}