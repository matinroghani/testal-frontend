import Image from "next/image";
import Link from "next/link";

export default function HeaderLogo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
    >
      <Image
        src="/images/logos/final.png"
        alt="Testal"
        width={65}
        height={65}
        className="rounded-md object-cover"
      />

      {/* <span className="text-[22px] font-bold leading-none text-[var(--color-brand-purple)]">
        TESTAL
      </span> */}

      {/* <img src="/images/logos/typo_logo.jpg" alt="" /> */}
    </Link>
  );
}