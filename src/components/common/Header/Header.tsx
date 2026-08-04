import HeaderNavigation from "./HeaderNavigation";
import HeaderLogo from "./HeaderLogo";
import HeaderActions from "./HeaderActions";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="w-full bg-[var(--color-primary)] border-b border-[var(--color-border)]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Right Side */}
        <div className="flex items-center gap-10">

          <HeaderLogo />

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <HeaderNavigation />
          </div>

        </div>

        {/* Left Side */}
        <div className="flex items-center">

          {/* Desktop Actions */}
          <div className="hidden lg:block">
            <HeaderActions />
          </div>

          {/* Mobile */}
          <MobileMenu />

        </div>

      </nav>
    </header>
  );
}