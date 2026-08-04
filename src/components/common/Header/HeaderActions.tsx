import Link from "next/link";
import React from "react";

export default function HeaderActions() {
  return (
    <ul className="flex gap-8 items-center  text-[var(--color-primary-foreground)]">
      <li className="mr-4">
        <Link
          href="/login"
          className="
          px-4 
          py-2
        text-white/80 
        transition-colors 
        duration-200 
        hover:text-[var(--color-accent)] 
        relative after:content-[''] 
        after:absolute after:bottom-0 
        after:right-0 after:w-0 
        after:h-[2px] 
        after:bg-[var(--color-accent)] 
        after:transition-all 
        after:duration-300 
        hover:after:w-full"
        >
          ورود
        </Link>
      </li>
      <li>
        <Link
          href="/register"
          className=" 
          px-5 
          py-2 
          bg-[var(--color-accent)] 
          text-[var(--color-primary)] 
          font-medium rounded-lg 
          hover:bg-[var(--color-accent-hover)] 
          transition-all 
          duration-200 
          shadow-sm 
          hover:shadow-md "
        >
          شروع رایگان
        </Link>
      </li>
    </ul>
  );
}
