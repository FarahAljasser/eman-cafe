"use client";
import Image from "next/image";
import Link from "next/link";
import { Star, Plus } from "lucide-react";
import type { Product } from "@/lib/products";
import { formatSAR } from "@/lib/utils";
import { useCart } from "@/lib/cart";
import { motion } from "framer-motion";
import { useToast } from "@/components/ToastProvider";



export function ProductCard({ p }: { p: Product }) {
  const { toast } = useToast();
  const { add } = useCart();
  return (
    <motion.div className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
    initial={{ opacity: 0, y: 14 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ y: -4 }}>
      <Link href={`/product/${p.slug}`} className="block group">
        <div className="relative aspect-[4/3] bg-brand-100">
          <Image src={p.image} alt={p.name} fill className="object-cover" />
        </div>
      </Link>
      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Link href={`/product/${p.slug}`} className="font-semibold hover:text-brand-800">{p.name}</Link>
            <div className="text-sm text-zinc-600 mt-1">{p.short}</div>
          </div>
          <div className="text-right">
            <div className="font-semibold">{formatSAR(p.price)}</div>
            <div className="mt-1 inline-flex items-center gap-1 text-xs text-zinc-600">
              <Star className="h-3.5 w-3.5" /> {p.rating.toFixed(1)} <span className="text-zinc-400">({p.ratingCount})</span>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            add(p, 1);
            toast(`${p.name} تمت إضافته للسلة`, { title: "تمت الإضافة ✅", type: "success" });
          }}
          className="btn-primary w-full gap-2"
        >

          <Plus className="h-4 w-4" /> أضف للسلة
        </button>
      </div>
    </motion.div>
  );
}
