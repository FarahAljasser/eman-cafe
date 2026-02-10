export type Category = "القهوة" | "الشاي" | "المعمول";
export type Product = {
  id: string; slug: string; name: string; category: Category;
  price: number; rating: number; ratingCount: number;
  short: string; description: string; image: string; tags?: string[];
};
export const CATEGORIES: Category[] = ["القهوة","الشاي","المعمول"];
export const PRODUCTS: Product[] = [
  { id:"p-saudi-thermos", slug:"trms-qahwa-saudia", name:"ترمس قهوة سعودية", category:"القهوة", price:42, rating:4.8, ratingCount:48,
    short:"قهوة سعودية فاخرة بالهيل والزعفران.",
    description:"ترمس قهوة سعودية بطابع أصيل. تُحضّر بحبوب مختارة مع الهيل والزعفران. مناسبة للضيافة والاجتماعات، وتوصلك ساخنة وجاهزة.",
    image:"/images/saudi-coffee.jpg", tags:["الأكثر طلبًا","هيل","زعفران"] },
  { id:"p-beans", slug:"bn-qahwa-saudia", name:"بن قهوة سعودية", category:"القهوة", price:40, rating:4.9, ratingCount:7,
    short:"بن مختار بعناية لطحن منزلي أو للمقاهي.",
    description:"بن قهوة سعودي بجودة عالية، نكهة متوازنة ورائحة فواحة. مناسب للطحن حسب رغبتك.",
    image:"/images/bun.jpg", tags:["بن"] },
  { id:"p-tea-mint", slug:"trms-shai-bilna3na3", name:"ترمس شاي بالنعناع", category:"الشاي", price:35, rating:5.0, ratingCount:1,
    short:"شاي منعش بنعناع واضح ونكهة ناعمة.",
    description:"ترمس شاي بالنعناع، مذاق خفيف ومنعش مناسب بعد الأكل أو أثناء العمل.",
    image:"/images/n3na3.jpg", tags:["منعش"] },
  { id:"p-tea-lemon-black", slug:"trms-shai-limon-aswad", name:"ترمس شاي ليمون أسود", category:"الشاي", price:35, rating:5.0, ratingCount:2,
    short:"ليمون أسود بنكهة عميقة ولمسة حموضة متوازنة.",
    description:"ترمس شاي بالليمون الأسود. نكهة قوية، مناسبة لمن يحب طابع الشاي اليمني/الخليجي.",
    image:"/images/laimon.jpg", tags:["ليمون أسود"] },
  { id:"p-tea-talqeema", slug:"trms-shai-talqeema", name:"ترمس شاي تلقيمة", category:"الشاي", price:35, rating:3.0, ratingCount:2,
    short:"شاي تلقيمة بطابع شعبي.",
    description:"ترمس شاي تلقيمة لمن يحب النكهة التقليدية.",
    image:"/images/tea1.jpg", tags:["شعبي"] },
  { id:"p-tea-karak", slug:"trms-shai-karak", name:"ترمس شاي كرك", category:"الشاي", price:42, rating:5.0, ratingCount:2,
    short:"كرك غني وتوابل دافئة.",
    description:"ترمس شاي كرك بطابع كريمي وتوازن جميل بين الشاي والبهارات.",
    image:"/images/krk.jpg", tags:["كرك"] },
  { id:"p-maamoul-dates", slug:"maamoul-tamr", name:"معمول بالتمر", category:"المعمول", price:30, rating:5.0, ratingCount:13,
    short:"معمول طري بحشوة تمر لذيذة.",
    description:"معمول بالتمر مناسب مع القهوة والشاي. طازج ومناسب للضيافة.",
    image:"/images/mamol.jpg", tags:["تمر"] }
];
export function getProductBySlug(slug: string) { return PRODUCTS.find(p => p.slug === slug); }
