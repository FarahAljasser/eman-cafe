import Link from "next/link";
export function Footer() {
  return (
    <footer className="mt-16 border-t border-black/5 bg-white">
      <div className="container-max py-10 grid gap-8 md:grid-cols-3">
        <div className="space-y-3">
          <div className="font-semibold">قهوة إيمان</div>
          <p className="text-sm text-zinc-600">قهوة سعودية مُحضّرة بعناية. اطلب عبر الموقع أو واتساب، أو من منصات التوصيل.</p>
        </div>
        <div className="space-y-2 text-sm">
          <div className="font-semibold">روابط</div>
          <div className="flex flex-col gap-2 text-zinc-700">
            <Link href="/menu" className="hover:text-brand-800">المنيو</Link>
            <Link href="/location" className="hover:text-brand-800">اللوكيشن</Link>
            <Link href="/about" className="hover:text-brand-800">من نحن</Link>
            <Link href="/contact" className="hover:text-brand-800">تواصل</Link>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <div className="font-semibold">الطلبات</div>
          <div className="text-zinc-700">دفع أونلاين + طلب عبر واتساب</div>
          <div className="text-zinc-500">© {new Date().getFullYear()} Eman cafe</div>
        </div>
      </div>
    </footer>
  );
}
