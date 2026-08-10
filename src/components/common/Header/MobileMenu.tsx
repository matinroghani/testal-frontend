"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { navItems } from "@/data/naviation";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="باز کردن منو"
        aria-expanded={open}
        className="flex h-10 w-10 items-center justify-center rounded-lg text-[var(--color-text-primary)] transition-colors duration-200 hover:bg-gray-100 lg:hidden"
      >
        <Menu size={23} strokeWidth={1.8} />
      </button>

      {/* Overlay */}
      <div
        aria-hidden={!open}
        onClick={closeMenu}
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}
      <aside
        aria-hidden={!open}
        className={`fixed right-0 top-0 z-50 flex h-dvh w-[85%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex h-20 items-center justify-between border-b border-gray-100 px-5">
          <span className="text-lg font-bold text-[var(--color-brand-purple)]">
            TESTAL
          </span>

          <button
            type="button"
            onClick={closeMenu}
            aria-label="بستن منو"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition-colors duration-200 hover:bg-gray-100"
          >
            <X size={23} strokeWidth={1.8} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-5 py-6">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="flex min-h-12 items-center justify-between rounded-lg px-4 text-[15px] font-medium text-[var(--color-text-primary)] transition-colors duration-200 hover:bg-[var(--color-brand-purple)]/5 hover:text-[var(--color-brand-purple)]"
                >
                  <span>{item.label}</span>

                  {item.hasDropdown && (
                    <ChevronDown size={17} strokeWidth={1.8} />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="border-t border-gray-100 p-5">
          <div className="flex flex-col gap-3">
            <Link
              href="/login"
              onClick={closeMenu}
              className="flex h-12 items-center justify-center rounded-lg border border-gray-200 text-sm font-medium text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-brand-purple)] hover:text-[var(--color-brand-purple)]"
            >
              ورود
            </Link>

            <Link
              href="/register"
              onClick={closeMenu}
              className="flex h-12 items-center justify-center rounded-lg bg-[var(--color-brand-purple)] text-sm font-medium !text-white transition-all hover:bg-[var(--color-brand-purple-hover)]"
            >
              درخواست دمو
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}