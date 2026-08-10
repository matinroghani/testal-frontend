import Image from "next/image";
import Link from "next/link";

export default function HeaderLogo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
    >
      <Image
        src="/logos/main_logo.jpg"
        alt="Testal"
        width={48}
        height={48}
        className="rounded-md object-cover"
      />

      <span className="text-[22px] font-bold leading-none text-[var(--color-brand-purple)]">
        TESTAL
      </span>
    </Link>
  );
}