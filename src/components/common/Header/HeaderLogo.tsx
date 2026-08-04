import Image from "next/image";
import Link from "next/link";

export default function HeaderLogo() {
  return (
    <div className="relative w-32 h-16">
      <Link href="/">
        <Image
          src="/logos/logo-vector.png"
          alt="The Testal Logo"
          fill
          className="rounded-sm object-contain"  
          priority
        />
      </Link>
    </div>
  );
}
