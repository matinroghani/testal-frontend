import Image from "next/image";
import Link from "next/link";
import type { Brand } from "@/types/brand";

type TrustedByCardProps = {
  brand: Brand;
};

export default function TrustedBy_Card({
  brand,
}: TrustedByCardProps) {
  return (
    <Link
      href={brand.href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full items-center justify-center"
    >
      <Image
        src={brand.logo}
        alt={`${brand.name} logo`}
        width={120}
        height={60}
        className="h-auto w-auto object-contain grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
      />
    </Link>
  );
}