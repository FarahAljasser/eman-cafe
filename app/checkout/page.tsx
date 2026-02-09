"use client";
import React from "react";
import Link from "next/link";
import { Trash2, MessageCircle, CreditCard, ArrowLeft } from "lucide-react";
import { useCart } from "@/lib/cart";
import { buildWhatsAppMessage, formatSAR } from "@/lib/utils";

export default function CheckoutPage() {
  const { items, subtotal, remove, setQty, clear } = useCart();
  const [customer, setCustomer] = React.useState({ name: "", phone: "", address: "", notes: "" });
  const deliveryFee = 0;
  const total = subtotal + deliveryFee;

  const waText = buildWhatsAppMessage([
    "طلب جديد من موقع قهوة إيمان ✅","",
    `الاسم: ${customer.name || "-"}`,
    `الجوال: ${customer.phone || "-"}`,
    `العنوان: ${customer.address || "-"}`,
    customer.notes ? `ملاحظات: ${customer.notes}` : "",
    "",
    "الطلب:",
    ...items.map(i => `- ${i.name} x${i.qty} = ${formatSAR(i.price * i.qty)}`),
    "",
    `الإجمالي: ${formatSAR(total)}`
  ]);
  const waLink = `https://wa.me/message/IDVBVS43PU6BH1?text=${waText}`;

  async function handleOnlinePayment() {
    alert("تم تجهيز الدفع (placeholder). اربط بوابة الدفع لاحقًا من /app/api/pay/route.ts");
    clear();
  }

  return (
    <div className="container-max pt-10">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-3xl font-semibold">الدفع</h1>
          <p className="text-zinc-700 mt-2">اختر: دفع أونلاين أو طلب عبر واتساب.</p>
        </div>
        <Link href="/menu" className="text-sm text-brand-800 hover:text-brand-900 inline-flex items-center gap-2">
          رجوع للمنيو <ArrowLeft className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <div className="card p-5">
            <div className="font-semibold">بيانات العميل</div>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <input className="rounded-xl ring-1 ring-black/10 px-4 py-3 bg-white" placeholder="الاسم"
                value={customer.name} onChange={e => setCustomer(s => ({ ...s, name: e.target.value }))} />
              <input className="rounded-xl ring-1 ring-black/10 px-4 py-3 bg-white" placeholder="رقم الجوال"
                value={customer.phone} onChange={e => setCustomer(s => ({ ...s, phone: e.target.value }))} />
              <input className="rounded-xl ring-1 ring-black/10 px-4 py-3 bg-white md:col-span-2" placeholder="العنوان (اختياري)"
                value={customer.address} onChange={e => setCustomer(s => ({ ...s, address: e.target.value }))} />
              <textarea className="rounded-xl ring-1 ring-black/10 px-4 py-3 bg-white md:col-span-2 min-h-[90px]" placeholder="ملاحظات للطلب (اختياري)"
                value={customer.notes} onChange={e => setCustomer(s => ({ ...s, notes: e.target.value }))} />
            </div>
          </div>

          <div className="card p-5">
            <div className="flex items-center justify-between">
              <div className="font-semibold">سلة المشتريات</div>
              <button className="text-sm text-zinc-600 hover:text-zinc-900" onClick={clear}>مسح السلة</button>
            </div>

            {items.length === 0 ? (
              <div className="mt-4 text-zinc-600">السلة فاضية. <Link href="/menu" className="text-brand-800 hover:text-brand-900">اذهب للمنيو</Link></div>
            ) : (
              <div className="mt-4 space-y-3">
                {items.map(i => (
                  <div key={i.productId} className="flex items-center justify-between gap-3 rounded-xl bg-brand-50 p-3">
                    <div>
                      <div className="font-semibold">{i.name}</div>
                      <div className="text-sm text-zinc-600">{formatSAR(i.price)}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="number" min={1} max={99} value={i.qty}
                        onChange={e => setQty(i.productId, Number(e.target.value))}
                        className="w-20 rounded-xl ring-1 ring-black/10 px-3 py-2 bg-white text-center" />
                      <button onClick={() => remove(i.productId)} className="btn-ghost px-3" aria-label="remove" title="حذف">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <aside className="space-y-4">
          <div className="card p-5 space-y-3">
            <div className="font-semibold">ملخص</div>
            <div className="flex items-center justify-between text-sm"><span className="text-zinc-600">المجموع</span><span className="font-semibold">{formatSAR(subtotal)}</span></div>
            <div className="flex items-center justify-between text-sm"><span className="text-zinc-600">التوصيل</span><span className="font-semibold">{formatSAR(deliveryFee)}</span></div>
            <div className="h-px bg-black/5" />
            <div className="flex items-center justify-between"><span className="text-zinc-600">الإجمالي</span><span className="text-xl font-semibold">{formatSAR(total)}</span></div>
          </div>

          <div className="card p-5 space-y-3">
            <div className="font-semibold">اختر طريقة الدفع</div>
            <button onClick={handleOnlinePayment} disabled={items.length===0} className="btn-primary w-full gap-2 disabled:opacity-50">
              <CreditCard className="h-4 w-4" /> دفع أونلاين (Placeholder)
            </button>
            <a href={waLink} target="_blank" rel="noreferrer"
              className={`btn-ghost w-full gap-2 ${items.length===0 ? "pointer-events-none opacity-50" : ""}`}>
              <MessageCircle className="h-4 w-4" /> اطلب عبر واتساب
            </a>
            <div className="text-xs text-zinc-500">زر الدفع الأونلاين الآن تجريبي. اربط بوابة الدفع لاحقًا داخل API.</div>
          </div>
        </aside>
      </div>
    </div>
  );
}
