import {
  ShieldCheck,
  Zap,
  BadgeCheck,
  Sparkles,
} from "lucide-react";

import type { Feature } from "@/types/feature";

export const features: Feature[] = [
  {
    id: 1,
    icon: ShieldCheck,
    title: "امنیت و محرمانگی",
    detail: "حفظ اطلاعات پروژه و برند شما با بالاترین استانداردها",
    iconColor: "text-red-500",
    iconBackground: "bg-red-100",
  },
  {
    id: 2,
    icon: Zap,
    title: "سریع و چابک",
    detail: "عملکرد سریع و روان برای تجربه‌ای ساده و بدون پیچیدگی",
    iconColor: "text-yellow-500",
    iconBackground: "bg-yellow-100",
  },
  {
    id: 3,
    icon: BadgeCheck,
    title: "داده‌های دقیق و قابل اعتماد",
    detail: "اطلاعات دقیق و قابل اتکا برای تصمیم‌گیری بهتر",
    iconColor: "text-green-500",
    iconBackground: "bg-green-100",
  },
  {
    id: 4,
    icon: Sparkles,
    title: "ساده و یکپارچه",
    detail: "تمام قابلیت‌ها در یک تجربه ساده و یکپارچه",
    iconColor: "text-purple-500",
    iconBackground: "bg-purple-100",
  },
];