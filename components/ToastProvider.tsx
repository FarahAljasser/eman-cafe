"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Info } from "lucide-react";

type ToastType = "success" | "error" | "info";

type ToastItem = {
  id: string;
  title?: string;
  message: string;
  type: ToastType;
  createdAt: number;
};

type ToastContextValue = {
  toast: (message: string, opts?: { title?: string; type?: ToastType; durationMs?: number }) => void;
};

const ToastContext = React.createContext<ToastContextValue | null>(null);

function iconFor(type: ToastType) {
  if (type === "success") return <CheckCircle2 className="h-5 w-5" />;
  if (type === "error") return <AlertCircle className="h-5 w-5" />;
  return <Info className="h-5 w-5" />;
}

function ringFor(type: ToastType) {
  if (type === "success") return "ring-emerald-500/20";
  if (type === "error") return "ring-red-500/20";
  return "ring-brand-700/15";
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = React.useState<ToastItem[]>([]);

  const toast: ToastContextValue["toast"] = (message, opts) => {
    const id = crypto?.randomUUID?.() ?? String(Date.now() + Math.random());
    const type: ToastType = opts?.type ?? "success";
    const durationMs = opts?.durationMs ?? 2200;

    const item: ToastItem = {
      id,
      title: opts?.title,
      message,
      type,
      createdAt: Date.now()
    };

    setItems(prev => [item, ...prev].slice(0, 4));

    window.setTimeout(() => {
      setItems(prev => prev.filter(t => t.id !== id));
    }, durationMs);
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}

      {/* Toast stack */}
      <div className="fixed top-4 right-4 z-[60] flex w-[min(360px,calc(100vw-2rem))] flex-col gap-2">
        <AnimatePresence initial={false}>
          {items.map(t => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: -10, scale: 0.98, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, scale: 0.98, filter: "blur(6px)" }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className={`card px-4 py-3 ring-1 ${ringFor(t.type)} bg-white/90 backdrop-blur`}
            >
              <div className="flex gap-3">
                <div className="mt-0.5 text-brand-800">{iconFor(t.type)}</div>
                <div className="min-w-0">
                  {t.title && <div className="text-sm font-semibold">{t.title}</div>}
                  <div className="text-sm text-zinc-700 break-words">{t.message}</div>
                </div>
                <button
                  className="ml-auto text-zinc-400 hover:text-zinc-700 transition"
                  onClick={() => setItems(prev => prev.filter(x => x.id !== t.id))}
                  aria-label="close"
                >
                  ✕
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = React.useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used inside ToastProvider");
  return ctx;
}
