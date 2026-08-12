import MainAction from "@/components/ui/MainAction";
import { ArrowLeft, Sparkles, SquarePlay } from "lucide-react";
import HeroSectionTrust from "./HeroSectionTrust/HeroSectionTrust";

export default function HeroContent() {
  return (
    <div
      className="
        flex
        w-full
        max-w-[700px]
        flex-col
        items-center
        gap-5

        lg:w-1/2
        lg:max-w-none
        lg:items-start

        xl:w-[48%]
      "
    >
      <span
        className="
          flex
          max-w-full
          items-center
          justify-center
          gap-2
          rounded-full
          border
          border-gray-200
          bg-[var(--color-danger)]
          px-4
          py-2
          text-center
          text-xs
          font-medium
          text-[var(--color-brand-purple)]

          sm:text-sm
          sm:px-5
          sm:py-3
        "
      >
        <Sparkles className="h-4 w-4 shrink-0" />
        <span>پلتفرم هوشمند تست میدانی محصول</span>
      </span>

      <h1
        className="
          w-full
          text-center
          text-[32px]
          font-extrabold
          leading-[1.35]
          tracking-normal

          sm:text-[40px]
          sm:leading-[1.3]

          md:text-[48px]

          lg:text-right
          lg:text-[50px]
          lg:leading-[1.25]

          xl:text-[56px]
        "
      >
        صدای واقعی مشتری،
        <br />
        <span className="text-[var(--color-brand-purple)]">
          تصمیم هوشمندانه شما
        </span>
      </h1>

      <p
        className="
          w-full
          text-center
          text-sm
          font-medium
          leading-[2]
          tracking-normal
          text-[var(--color-primary-light)]

          sm:text-base

          md:max-w-[600px]

          lg:w-[85%]
          lg:text-right

          xl:w-[80%]
        "
      >
        تستال برند ها را به شبکه ای از تسترهای واقعی متصل می کند تا قبل از
        سرمایه گذاری سنگین، محصولات خود را بسنجند، تحلیل کنند و بهتر از رقبا
        تصمیم بگیرند.
      </p>

      <div
        className="
          flex
          w-full
          flex-col
          items-stretch
          gap-3

          sm:flex-row
          sm:items-center
          sm:justify-center

          lg:w-auto
          lg:justify-start
        "
      >
        <MainAction
          href="/video"
          text="مشاهده ویدیوی معرفی"
          icon={SquarePlay}
          variant="ghost"
        />

        <MainAction
          href="/free-demo"
          text="درخواست دموی رایگان"
          icon={ArrowLeft}
          variant="primary"
        />
      </div>

      <HeroSectionTrust />
    </div>
  );
}