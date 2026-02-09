import Link from "next/link";
export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-2xl bg-brand-700 text-white grid place-items-center shadow-soft">
        <span className="font-bold">إ</span>
      </div>
      <div className="leading-tight">
        <div className="font-semibold">قهوة إيمان</div>
        <div className="text-xs text-zinc-500">Eman cafe</div>
      </div>
    </Link>
  );
}
