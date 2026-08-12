import type { Metadata } from "next";
import "./globals.css";
import { yekanBakh } from "@/lib/font";
import Header from "@/components/common/Header/Header";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "تستال | تست و اعتبارسنجی محصول با کاربران واقعی",
  description:
    "تستال پلتفرم هوشمند تست محصول و اعتبارسنجی ایده است. بازخورد کاربران واقعی را جمع‌آوری کنید، با هوش مصنوعی تحلیل کنید و پیش از عرضه با اطمینان تصمیم بگیرید.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={cn("h-full", "antialiased", yekanBakh.variable, "font-sans", geist.variable)}
    >
      <body
        className="min-h-full
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          xl:px-12
          2xl:px-16"
      >
        <div className="container mx-auto flex-1 w-full">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
