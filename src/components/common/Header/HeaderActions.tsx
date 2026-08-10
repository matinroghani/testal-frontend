import Link from "next/link";
import { CalendarDays } from "lucide-react";

export default function HeaderActions() {
  return (
    <div className="flex items-center gap-4">
      <Link
        href="/login"
        className="
          inline-flex
          h-12
          items-center
          justify-center
          rounded-lg
          border
          border-gray-200
          px-6
          text-[15px]
          font-medium
          text-[var(--color-text-primary)]
          transition-colors
          duration-200
          hover:border-[var(--color-brand-purple)]
          hover:text-[var(--color-brand-purple)]
        "
      >
        ورود
      </Link>

      <Link
        href="/register"
        className="
          inline-flex
          h-12
          items-center
          justify-center
          gap-2
          whitespace-nowrap
          rounded-lg
          bg-[var(--color-brand-purple)]
          px-6
          !text-[15px]
          font-medium
          !text-white
          shadow-sm
          transition-all
          duration-200
          hover:bg-[var(--color-brand-purple-hover)]
          hover:shadow-md
        "
      >
        <CalendarDays size={18} strokeWidth={1.8} />
        <span>درخواست دمو</span>

      </Link>
    </div>
  );
}