import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/cart";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloating } from "@/components/WhatsAppFloating";
import { PageTransition } from "@/components/PageTransition";
import { ToastProvider } from "@/components/ToastProvider";


export const metadata: Metadata = {
  title: "قهوة إيمان | Eman cafe",
  description: "قهوة سعودية مُحضّرة بعناية. اطلب عبر الموقع أو واتساب."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <ToastProvider>
          <CartProvider>
            <Header />
            <main className="min-h-[70vh]">{children}</main>
            <Footer />
            <WhatsAppFloating />
          </CartProvider>
        </ToastProvider>

      </body>
    </html>
  );
}
