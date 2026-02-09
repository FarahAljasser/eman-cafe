"use client";
import React from "react";
import type { Product } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { Minus, Plus } from "lucide-react";
import { useToast } from "@/components/ToastProvider";

export function AddToCart({ product }: { product: Product }) {
  const { toast } = useToast();
  const { add } = useCart();
  const [qty, setQty] = React.useState(1);
  return (
    <div className="flex items-center gap-3">
      <div className="inline-flex items-center rounded-xl ring-1 ring-black/10 bg-white overflow-hidden">
        <button className="px-3 py-2 hover:bg-brand-50" onClick={() => setQty(q => Math.max(1, q - 1))} aria-label="decrease">
          <Minus className="h-4 w-4" />
        </button>
        <div className="px-4 py-2 text-sm font-semibold w-12 text-center">{qty}</div>
        <button className="px-3 py-2 hover:bg-brand-50" onClick={() => setQty(q => Math.min(99, q + 1))} aria-label="increase">
          <Plus className="h-4 w-4" />
        </button>
      </div>
      <button
        className="btn-primary"
        onClick={() => {
          add(product, qty);
          toast(`${product.name} تمت إضافته للسلة`, { title: "تمت الإضافة ✅", type: "success" });
        }}
      >
        أضف للسلة
      </button>

    </div>
  );
}
