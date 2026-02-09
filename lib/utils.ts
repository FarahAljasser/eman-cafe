import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
export function formatSAR(value: number) {
  return new Intl.NumberFormat("ar-SA", { style: "currency", currency: "SAR" }).format(value);
}
export function buildWhatsAppMessage(lines: string[]) {
  return encodeURIComponent(lines.filter(Boolean).join("\n"));
}
