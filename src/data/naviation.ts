export const navItems = [
  {
    id: 1,
    label: "خانه",
    href: "/",
    active: true,
    hasDropdown: false,
  },
  {
    id: 2,
    label: "راه‌کارها",
    href: "/solutions",
    active: false,
    hasDropdown: true,
    dropdownItems: [  // اگر نیاز به آیتم‌های دراپ‌دان دارید
      { label: "راه‌کار سازمانی", href: "/solutions/enterprise" },
      { label: "راه‌کار کسب‌وکار", href: "/solutions/business" },
    ]
  },
  {
    id: 3,
    label: "قابلیت‌ها",
    href: "/features",
    active: false,
    hasDropdown: false,
  },
  {
    id: 4,
    label: "مشتریان",
    href: "/customers",
    active: false,
    hasDropdown: false,
  },
  {
    id: 5,
    label: "قیمت‌گذاری",
    href: "/pricing",
    active: false,
    hasDropdown: false,
  },
  {
    id: 6,
    label: "منابع",
    href: "/resources",
    active: false,
    hasDropdown: true,
    dropdownItems: [
      { label: "وبلاگ", href: "/blog" },
      { label: "مستندات", href: "/docs" },
      { label: "راهنما", href: "/help" },
    ]
  },
  {
    id: 7,
    label: "دربارهٔ ما",
    href: "/about",
    active: false,
    hasDropdown: false,
  },
];