# Eman cafe (قهوة إيمان) - Next.js

## تشغيل
```bash
npm install
npm run dev
```
افتح http://localhost:3000

## أماكن التعديل
- المنتجات: lib/products.ts
- الصور: public/images (وعدّل مسارات الصور في المنتجات)
- واتساب: components/Header.tsx + components/WhatsAppFloating.tsx + app/checkout/page.tsx
- اللوكيشن: app/location/page.tsx

## الدفع الأونلاين
زر الدفع حالياً Placeholder.
ابدأ من: app/api/pay/route.ts
