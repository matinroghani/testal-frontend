
import Link from "next/link";
import { type LucideIcon } from "lucide-react";

interface MainActionProps {
  href: string;
  text: string;
  icon?: LucideIcon;
  variant: "ghost" | "primary";
}

export default function MainAction({
  href,
  text,
  icon: Icon,
  variant,
}: MainActionProps) {
  const variants = {
    ghost: `
      inline-flex
          h-12
          items-center
          justify-center
          rounded-md
          border
          border-gray-200
          px-6
          text-[15px]
          font-medium
          !text-[var(--color-text-primary)]
          bg-[var(--color-surface)]
          transition-colors
          duration-200
          hover:border-[var(--color-brand-purple)]
          hover:text-[var(--color-brand-purple)]
    `,

    primary: `
      inline-flex
          h-12
          items-center
          justify-center
          gap-2
          whitespace-nowrap
          rounded-lg
          bg-[var(--color-brand-purple)]
          px-6
          text-[15px]
          font-medium
          !text-white
          shadow-sm
          transition-all
          duration-200
          hover:bg-[var(--color-brand-purple-hover)]
          hover:shadow-md
    `,
  };

  return (
    <Link
      href={href}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        whitespace-nowrap
        transition-all
        duration-200
        w-full
        ${variants[variant]}
      `}
    >
      <span>{text}</span>
      {Icon && <Icon size={22} strokeWidth={1.8} />}
    </Link>
  );
}