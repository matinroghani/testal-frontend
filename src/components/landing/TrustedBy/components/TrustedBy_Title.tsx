import { BadgeCheck } from "lucide-react";

export default function TrustedBy_Title() {
  return (
  <div className="flex flex-col items-center justify-center text-center">
      <div className="flex gap-2 items-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-danger)]">
          <BadgeCheck className="h-5 w-5 text-[var(--color-brand-purple)]" />
        </div>

        <h3 className="text-2xl font-bold">
          برندهای پیشرو که به تستال اعتماد کرده‌اند
        </h3>
      </div>

      <p className="mt-3 text-sm text-[var(--color-primary-light)]">
        کسب‌وکارهایی که برای تصمیم‌گیری بهتر، تستال را انتخاب کرده‌اند
      </p>
    </div>
  )
}
