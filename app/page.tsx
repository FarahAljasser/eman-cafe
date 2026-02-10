import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Sparkles, MapPin, ShoppingBag } from "lucide-react";
import { PRODUCTS } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export default function HomePage() {
  const featured = PRODUCTS.slice(0, 4);
  return (
    <div>
      <section className="container-max pt-10 md:pt-16">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <div className="badge"><Sparkles className="h-4 w-4" /> قهوة سعودية فاخرة بالهيل والزعفران</div>
            <h1 className="text-3xl md:text-5xl font-semibold leading-[1.15]">الضيافة تبدأ من أول فنجال ☕</h1>
            <p className="text-zinc-700 leading-relaxed">اطلب قهوتك وشايك المفضل من قهوة إيمان. دفع أونلاين أو اطلب عبر واتساب بسهولة.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/menu" className="btn-primary gap-2"><ShoppingBag className="h-4 w-4" /> اطلب الآن <ArrowLeft className="h-4 w-4" /></Link>
              <Link href="/location" className="btn-ghost gap-2"><MapPin className="h-4 w-4" /> اللوكيشن</Link>
            </div>
            <div className="grid grid-cols-3 gap-3 pt-4">
              <div className="card p-4"><div className="text-sm text-zinc-600">طرق الطلب</div><div className="font-semibold mt-1">موقع + واتساب</div></div>
              <div className="card p-4"><div className="text-sm text-zinc-600">منصات التوصيل</div><div className="font-semibold mt-1">HungerStation</div></div>
              <div className="card p-4"><div className="text-sm text-zinc-600">تقييم</div><div className="font-semibold mt-1">4.8+</div></div>
            </div>
          </div>
          <div className="card overflow-hidden">
            <div className="relative aspect-[4/3] bg-brand-100">
              <Image src="/images/hero.jpg" alt="Eman cafe" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      <section className="container-max mt-12">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-xl md:text-2xl font-semibold">الأكثر طلبًا</h2>
          <Link href="/menu" className="text-sm text-brand-800 hover:text-brand-900">عرض المنيو</Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map(p => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>

      <section className="container-max mt-14">
        <div className="card p-6 md:p-10">
          <div className="grid gap-6 md:grid-cols-3 items-center">
            <div className="md:col-span-2 space-y-2">
              <div className="text-sm text-zinc-600">سريع، واضح، ومرتب</div>
              <div className="text-2xl font-semibold">تبغون الطلبات تجيكم منظمة؟</div>
              <p className="text-zinc-700">عند الطلب عبر واتساب، الموقع يرسل رسالة تلقائية فيها كل التفاصيل: المنتجات، الكمية، الإجمالي، وبيانات العميل.</p>
            </div>
            <div className="flex md:justify-end">
              <Link href="/checkout" className="btn-primary">جهز طلبك</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
