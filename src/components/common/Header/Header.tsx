import HeaderNavigation from "./HeaderNavigation";
import HeaderLogo from "./HeaderLogo";
import MobileMenu from "./MobileMenu";
import { CalendarDays } from "lucide-react";
import MainAction from "../../ui/MainAction";

export default function Header() {
  return (
    <header>
      <nav className="flex items-center justify-between py-5">
        {/* Logo */}
        <HeaderLogo />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex">
          <HeaderNavigation />
        </div>

        {/* Desktop Actions */}
        <div className="items-center gap-4 hidden lg:flex">
          <MainAction href="/login" text="ورود" variant="ghost" />

          <MainAction
            href="/register"
            text="درخواست دمو"
            icon={CalendarDays}
            variant="primary"
          />
        </div>

        {/* Mobile */}
        <div className="lg:hidden">
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
