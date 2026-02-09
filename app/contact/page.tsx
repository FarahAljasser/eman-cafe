"use client";
import React from "react";
import { MessageCircle, Mail, Instagram } from "lucide-react";
export const metadata = { title: "تواصل | قهوة إيمان" };

export default function ContactPage() {
  const [state, setState] = React.useState({ name: "", phone: "", message: "" });
  function submit(e: React.FormEvent) {
    e.preventDefault();
    alert("تم إرسال الرسالة (واجهة فقط). اربطها لاحقًا ببريد/قاعدة بيانات.");
    setState({ name: "", phone: "", message: "" });
  }
  return (
    <div className="container-max pt-10">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="card p-6 md:p-10 space-y-4">
          <h1 className="text-3xl font-semibold">تواصل معنا</h1>
          <p className="text-zinc-700">جاهزين لأي استفسار أو طلبات ضيافة.</p>
          <div className="flex flex-wrap gap-3">
            <a className="btn-primary gap-2" href="https://wa.me/message/IDVBVS43PU6BH1" target="_blank" rel="noreferrer">
              <MessageCircle className="h-4 w-4" /> واتساب
            </a>
            <a className="btn-ghost gap-2" href="#" onClick={(e)=>{e.preventDefault(); alert("ضع رابط الإنستغرام الحقيقي هنا");}}>
              <Instagram className="h-4 w-4" /> إنستغرام
            </a>
            <a className="btn-ghost gap-2" href="mailto:hello@emancafe.com">
              <Mail className="h-4 w-4" /> إيميل
            </a>
          </div>
        </div>

        <form onSubmit={submit} className="card p-6 md:p-10 space-y-3">
          <div className="font-semibold">أرسل رسالة</div>
          <input className="rounded-xl ring-1 ring-black/10 px-4 py-3 bg-white" placeholder="الاسم"
            value={state.name} onChange={e => setState(s => ({ ...s, name: e.target.value }))} />
          <input className="rounded-xl ring-1 ring-black/10 px-4 py-3 bg-white" placeholder="رقم الجوال"
            value={state.phone} onChange={e => setState(s => ({ ...s, phone: e.target.value }))} />
          <textarea className="rounded-xl ring-1 ring-black/10 px-4 py-3 bg-white min-h-[140px]" placeholder="رسالتك"
            value={state.message} onChange={e => setState(s => ({ ...s, message: e.target.value }))} />
          <button className="btn-primary w-fit" type="submit">إرسال</button>
          <div className="text-xs text-zinc-500">* النموذج حالياً واجهة فقط. نقدر نربطه ببريد أو قاعدة بيانات.</div>
        </form>
      </div>
    </div>
  );
}
