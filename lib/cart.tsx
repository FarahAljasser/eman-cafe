"use client";
import React from "react";
import type { Product } from "./products";
export type CartItem = { productId: string; name: string; price: number; qty: number; slug: string; };
type CartState = { items: CartItem[]; };
type CartContextValue = CartState & {
  add: (p: Product, qty?: number) => void;
  remove: (productId: string) => void;
  setQty: (productId: string, qty: number) => void;
  clear: () => void;
  subtotal: number;
};
const CartContext = React.createContext<CartContextValue | null>(null);
const STORAGE_KEY = "eman_cafe_cart_v1";
function safeParse(jsonStr: string | null): CartState {
  try {
    if (!jsonStr) return { items: [] };
    const p = JSON.parse(jsonStr);
    if (!p?.items || !Array.isArray(p.items)) return { items: [] };
    return { items: p.items };
  } catch { return { items: [] }; }
}
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = React.useState<CartState>({ items: [] });
  React.useEffect(() => { setState(safeParse(localStorage.getItem(STORAGE_KEY))); }, []);
  React.useEffect(() => { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }, [state]);

  const add: CartContextValue["add"] = (p, qty = 1) => {
    setState(prev => {
      const f = prev.items.find(i => i.productId === p.id);
      if (f) return { items: prev.items.map(i => i.productId===p.id ? { ...i, qty: i.qty + qty } : i) };
      return { items: [...prev.items, { productId:p.id, name:p.name, price:p.price, qty, slug:p.slug }] };
    });
  };
  const remove = (productId: string) => setState(prev => ({ items: prev.items.filter(i => i.productId !== productId) }));
  const setQty = (productId: string, qty: number) => {
    const q = Number.isFinite(qty) ? Math.max(1, Math.min(99, Math.floor(qty))) : 1;
    setState(prev => ({ items: prev.items.map(i => i.productId===productId ? { ...i, qty:q } : i) }));
  };
  const clear = () => setState({ items: [] });
  const subtotal = state.items.reduce((s, i) => s + i.price * i.qty, 0);
  const value: CartContextValue = { ...state, add, remove, setQty, clear, subtotal };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
export function useCart() {
  const ctx = React.useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
