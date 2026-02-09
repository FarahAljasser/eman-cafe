"use client";
import Link from "next/link";
import { ShoppingBag, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { Nav } from "./Nav";
import { useCart } from "@/lib/cart";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";


export function Header() {
  const { items } = useCart();
  const count = items.reduce((s, i) => s + i.qty, 0);
  return (
    <header className="sticky top-0 z-40 bg-brand-50/80 backdrop-blur border-b border-black/5">
      <div className="container-max h-16 flex items-center justify-between gap-4">
        <Logo />
        <Nav />
        <div className="flex items-center gap-2">
          <Link href="/checkout" className={cn("btn-ghost gap-2")}>
            <ShoppingBag className="h-4 w-4" />
            <span className="hidden sm:inline">السلة</span>
            <motion.span
             key={count}
             initial={{ scale: 0.9, y: -2, opacity: 0.7 }}
             animate={{ scale: 1, y: 0, opacity: 1 }}
             transition={{ type: "spring", stiffness: 600, damping: 25 }}
             className="ml-1 rounded-full bg-brand-700 text-white text-xs px-2 py-0.5"
            >
             {count}
            </motion.span>

          </Link>
          <a href="https://wa.me/message/IDVBVS43PU6BH1" target="_blank" rel="noreferrer" className="btn-primary gap-2" title="واتساب">
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">واتساب</span>
          </a>
        </div>
      </div>
    </header>
  );
}
