"use client";
import { MessageCircle } from "lucide-react";
export function WhatsAppFloating() {
  return (
    <a href="https://wa.me/message/IDVBVS43PU6BH1" target="_blank" rel="noreferrer"
      className="fixed bottom-5 right-5 btn-primary rounded-full h-12 w-12 p-0 shadow-soft grid place-items-center"
      aria-label="WhatsApp" title="واتساب">
      <MessageCircle className="h-5 w-5" />
    </a>
  );
}
