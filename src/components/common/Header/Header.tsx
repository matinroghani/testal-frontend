import HeaderNavigation from "./HeaderNavigation";
import HeaderLogo from "./HeaderLogo";
import HeaderActions from "./HeaderActions";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="w-full bg-white">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <nav className="flex h-[92px] items-center justify-between">

          {/* Logo */}
          <HeaderLogo />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex">
            <HeaderNavigation />
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex">
            <HeaderActions />
          </div>

          {/* Mobile */}
          <div className="lg:hidden">
            <MobileMenu />
          </div>

        </nav>
      </div>
    </header>
  );
}