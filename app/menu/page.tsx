import { CATEGORIES, PRODUCTS } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { MenuGridMotion } from "@/components/MenuGridMotion";

export const metadata = { title: "المنيو | قهوة إيمان" };

export default function MenuPage() {
  return (
    <div className="container-max pt-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold">المنيو</h1>
        <p className="text-zinc-700">اختر مزاجك، وإحنا نضبطه لك ✨</p>
      </div>

      <div className="mt-8 space-y-10">
        {CATEGORIES.map((cat) => {
          const items = PRODUCTS.filter((p) => p.category === cat);
          return (
            <section key={cat} className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">{cat}</h2>
                <div className="text-sm text-zinc-500">{items.length} أصناف</div>
              </div>

              <MenuGridMotion>
                {items.map((p) => (
                  <ProductCard key={p.id} p={p} />
                ))}
              </MenuGridMotion>
            </section>
          );
        })}
      </div>
    </div>
  );
}
