import { navItems } from "@/data/naviation";
import Link from "next/link";

export default function HeaderNavigation() {
  return (
    <ul className="flex gap-8 items-center text-[var(--color-primary-foreground)]">
      {navItems.map((item) => (
        <li key={item.id}>
          <Link
            href={item.href}
            className="relative after:content-[''] after:absolute after:bottom-[-4px] after:right-0 after:w-0 after:h-[2px] after:bg-[var(--color-accent)] after:transition-all after:duration-300 hover:after:w-full hover:text-[var(--color-accent)] transition-colors"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
