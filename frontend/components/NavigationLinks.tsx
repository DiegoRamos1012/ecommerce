import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavigationLinksProps {
  variant?: "desktop" | "mobile";
  onLinkClick?: () => void;
}

const navigationItems = [
  { href: "/products", label: "Produtos" },
  { href: "/about", label: "Sobre nós" },
  { href: "/contact", label: "Contato" },
];

export default function NavigationLinks({
  variant = "desktop",
  onLinkClick,
}: NavigationLinksProps) {
  const baseClasses = "font-medium transition-colors";

  const desktopClasses = "px-3 py-2 text-sm text-gray-500 hover:text-gray-700";
  const mobileClasses =
    "px-3 py-2 text-lg text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md";

  return (
    <>
      {navigationItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            baseClasses,
            variant === "desktop" ? desktopClasses : mobileClasses
          )}
          onClick={onLinkClick}
        >
          {item.label}
        </Link>
      ))}
    </>
  );
}
