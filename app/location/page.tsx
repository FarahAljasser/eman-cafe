import { MapPin } from "lucide-react";
export const metadata = { title: "اللوكيشن | قهوة إيمان" };

export default function LocationPage() {
  const googleMapsUrl = "https://maps.google.com/?q=Riyadh";
  return (
    <div className="container-max pt-10">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="card p-6 md:p-10 space-y-4">
          <h1 className="text-3xl font-semibold">اللوكيشن</h1>
          <p className="text-zinc-700">اضغط على الزر لفتح الموقع في خرائط Google. (بدّل الرابط بالرابط الحقيقي)</p>
          <a className="btn-primary inline-flex gap-2 w-fit" href={googleMapsUrl} target="_blank" rel="noreferrer">
            <MapPin className="h-4 w-4" /> افتح في الخرائط
          </a>
          <div className="card p-4 bg-brand-50">
            <div className="text-sm text-zinc-600">ساعات العمل</div>
            <div className="font-semibold mt-1">مفتوح حتى 11:00 PM</div>
          </div>
        </div>
        <div className="card overflow-hidden">
          <iframe title="map" src="https://www.google.com/maps?q=Riyadh&output=embed" className="w-full h-[420px]" loading="lazy" />
        </div>
      </div>
    </div>
  );
}
