export const metadata = { title: "من نحن | قهوة إيمان" };
export default function AboutPage() {
  return (
    <div className="container-max pt-10">
      <div className="card p-6 md:p-10 space-y-4">
        <h1 className="text-3xl font-semibold">من نحن</h1>
        <p className="text-zinc-700 leading-relaxed">
          قهوة إيمان مشروع منزلي بطابع سعودي أصيل. نركز على جودة البن، وتوازن الهيل والزعفران، وحرارة التقديم.
          هدفنا: كل طلب يوصل وكأنه للتو انصب في الدلة.
        </p>
        <p className="text-zinc-700 leading-relaxed">
          نبيع عبر هنقرستيشن وذاشيفز وجاهز، والآن عبر الموقع مباشرة. إذا تحبون طلبات الضيافة الكبيرة، تواصلوا معنا عبر واتساب.
        </p>
      </div>
    </div>
  );
}
