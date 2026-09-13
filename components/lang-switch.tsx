"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export function LangSwitch({ className }: { className?: string }) {
  const pathname = usePathname();
  const current = pathname?.startsWith("/fa") ? "fa" : "en";
  const nextLang = current === "fa" ? "en" : "fa";
  const href =
    pathname?.replace(/^\/(en|fa)(?=\/|$)/, `/${nextLang}`) || `/${nextLang}`;

  return (
    <Link
      href={href}
      className={clsx(
        "text-sm font-semibold text-default-500 hover:text-foreground transition-colors",
        className,
      )}
      aria-label={`Switch to ${nextLang === "fa" ? "Persian" : "English"}`}
    >
      {nextLang === "fa" ? "فا" : "EN"}
    </Link>
  );
}
