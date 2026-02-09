"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
const links = [
  { href: "/menu", label: "المنيو" },
  { href: "/location", label: "اللوكيشن" },
  { href: "/about", label: "من نحن" },
  { href: "/contact", label: "تواصل" }
];
export function Nav() {
  const p = usePathname();
  return (
    <nav className="hidden md:flex items-center gap-2">
      {links.map(l => {
        const active = p === l.href || (l.href !== "/" && p?.startsWith(l.href));
        return (
          <Link key={l.href} href={l.href}
            className={cn("rounded-xl px-3 py-2 text-sm transition", active ? "bg-brand-100 text-brand-900" : "hover:bg-brand-50 text-zinc-700")}>
            {l.label}
          </Link>
        );
      })}
    </nav>
  );
}
