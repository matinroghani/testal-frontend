"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/naviation";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="lg:hidden text-white" onClick={() => setOpen(!open)}>
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      <div
        className={`
          fixed
          top-0
          right-0
          h-screen
          w-72
          bg-[var(--color-primary)]
          transition-transform
          duration-300
          z-50
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <button className="p-6  text-white mt-5" onClick={() => setOpen(false)}>
          <X />
        </button>

        <ul className="flex flex-col gap-8 px-6 mt-10  text-[var(--color-primary-foreground)]">
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
          <li>
            <Link href="/login">ورود</Link>
          </li>

          <li>
            <Link
              href="/register"
              className="block rounded-lg bg-[var(--color-accent)] py-3 text-center text-[var(--color-primary)]"
            >
              شروع رایگان
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
