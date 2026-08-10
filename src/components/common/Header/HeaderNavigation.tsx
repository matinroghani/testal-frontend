import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { navItems } from "@/data/naviation";

export default function HeaderNavigation() {
  return (
    <ul className="flex items-center gap-6">
      {navItems.map((item) => (
        <li key={item.id}>
          <Link
            href={item.href}
            className={`
              relative
              flex
              items-center
              gap-2
              py-3
              text-[15px]
              font-medium
              transition-colors
              duration-200
              ${
                item.active
                  ? "!text-[var(--color-brand-purple)]"
                  : "text-[var(--color-text-primary)] hover:text-[var(--color-brand-purple)]"
              }
            `}
          >
            <span>{item.label}</span>

            {item.hasDropdown && (
              <ChevronDown
                size={14}
                strokeWidth={1.8}
              />
            )}

            {item.active && (
              <span
                className="
                  absolute
                  bottom-[-1px]
                  right-1/2
                  h-1.5
                  w-1.5
                  translate-x-1/2
                  rounded-full
                  bg-[var(--color-brand-purple)]
                "
              />
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}