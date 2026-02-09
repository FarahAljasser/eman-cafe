import Image from "next/image";
import Link from "next/link";
import { Star, ArrowLeft } from "lucide-react";
import { getProductBySlug, PRODUCTS } from "@/lib/products";
import { formatSAR } from "@/lib/utils";
import { AddToCart } from "./ui";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const p = getProductBySlug(params.slug);
  if (!p) {
    return (
      <div className="container-max pt-10">
        <div className="card p-6">
          <div className="font-semibold">المنتج غير موجود</div>
          <Link href="/menu" className="text-brand-800 hover:text-brand-900 text-sm mt-2 inline-flex items-center gap-2">
            العودة للمنيو <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }
  const suggestions = PRODUCTS.filter(x => x.category === p.category && x.id !== p.id).slice(0, 3);

  return (
    <div className="container-max pt-10">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="card overflow-hidden">
          <div className="relative aspect-square bg-brand-100">
            <Image src={p.image} alt={p.name} fill className="object-cover" />
          </div>
        </div>

        <div className="space-y-4">
          <div className="badge">{p.category}</div>
          <h1 className="text-3xl font-semibold">{p.name}</h1>
          <div className="flex items-center gap-3 text-sm text-zinc-600">
            <span className="inline-flex items-center gap-1"><Star className="h-4 w-4" /> {p.rating.toFixed(1)} <span className="text-zinc-400">({p.ratingCount})</span></span>
            <span className="text-zinc-300">•</span>
            <span className="font-semibold text-zinc-900">{formatSAR(p.price)}</span>
          </div>
          <p className="text-zinc-700 leading-relaxed">{p.description}</p>

          <div className="card p-4 space-y-3">
            <div className="text-sm text-zinc-600">الكمية</div>
            <AddToCart product={p} />
            <div className="text-xs text-zinc-500">* الدفع أونلاين متاح أو اطلب عبر واتساب من صفحة الدفع.</div>
          </div>

          <div className="flex gap-3">
            <Link href="/menu" className="btn-ghost">رجوع للمنيو</Link>
            <Link href="/checkout" className="btn-primary">اذهب للدفع</Link>
          </div>
        </div>
      </div>

      {suggestions.length > 0 && (
        <section className="mt-12 space-y-4">
          <h2 className="text-xl font-semibold">اقتراحات من نفس القسم</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {suggestions.map(s => (
              <Link key={s.id} href={`/product/${s.slug}`} className="card p-4 hover:bg-brand-50 transition">
                <div className="font-semibold">{s.name}</div>
                <div className="text-sm text-zinc-600 mt-1">{s.short}</div>
                <div className="text-sm font-semibold mt-2">{formatSAR(s.price)}</div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
