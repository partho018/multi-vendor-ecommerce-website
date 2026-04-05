import { useState, useEffect } from "react";

const products = [
  {
    id: 1,
    brand: "Alcon",
    brandColor: "#003087",
    name: "Alcon Dailies Aqua Comfort Plus / Precision ...",
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=200&h=200&fit=crop",
    price: "RM86.81",
    originalPrice: "RM89.50",
    discount: "-3%",
    badge: "FREE UPGRADE",
  },
  {
    id: 2,
    brand: "UGREEN",
    brandColor: "#1a7a3c",
    name: "UGREEN Nylon 18W USB Type C Fast charging...",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop",
    price: "RM6.10",
    originalPrice: "RM39.90",
    discount: "-85%",
    badge: null,
  },
  {
    id: 3,
    brand: "Gillette OFFICIAL",
    brandColor: "#0057a8",
    name: "Gillette Men Blue II Plus Disposable Razors (Fixe...",
    image: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=200&h=200&fit=crop",
    price: "RM16.09",
    originalPrice: "RM20.90",
    discount: "-23%",
    badge: null,
  },
  {
    id: 4,
    brand: "P&G OFFICIAL STORE",
    brandColor: "#00539f",
    name: "Ambi Pur Room Fresh Gel Fresh Air Refreshing Gel...",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=200&h=200&fit=crop",
    price: "RM15.72",
    originalPrice: "RM19.90",
    discount: "-21%",
    badge: null,
  },
  {
    id: 5,
    brand: "Oral-B",
    brandColor: "#004b8d",
    name: "Oral-B Complete Easy Clean Soft Toothbrush 5...",
    image: "https://images.unsplash.com/photo-1559591937-abc3e07e4e3d?w=200&h=200&fit=crop",
    price: "RM11.94",
    originalPrice: "RM15.50",
    discount: "-23%",
    badge: null,
  },
  {
    id: 6,
    brand: "正和",
    brandColor: "#c8102e",
    name: "奇亚籽 500g Chia Seed",
    image: "https://images.unsplash.com/photo-1514533450685-4493e01d1fdc?w=200&h=200&fit=crop",
    price: "RM19.40",
    originalPrice: "RM20.00",
    discount: "-3%",
    badge: null,
  },
];

function useCountdown(initialSeconds: number) {
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, []);
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return [h, m, s];
}

function TimerBlock({ value }: { value: number }) {
  return (
    <span className="bg-[#D3232A] text-white font-bold text-sm px-3 py-1.5 rounded min-w-[28px] text-center inline-block">
      {String(value).padStart(2, "0")}
    </span>
  );
}

export default function FlashSale() {
  const [h, m, s] = useCountdown(27 * 3600 + 58 * 60 + 1);

  return (
    <div className="bg-white rounded-sm mt-3 px-5 py-4">
      {/* Header row */}
      <div className="mb-3">
        <h2 className="text-xl font-bold text-gray-900">Flash Sale</h2>
      </div>

      {/* Timer row */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-[#f57224] font-semibold text-sm">On Sale Now</span>
          <div className="flex items-center gap-1 text-gray-500 text-sm">
            <span>Ending in</span>
            <TimerBlock value={h as number} />
            <span className="font-bold text-gray-700">:</span>
            <TimerBlock value={m as number} />
            <span className="font-bold text-gray-700">:</span>
            <TimerBlock value={s as number} />
          </div>
        </div>
        <button className="border border-[#f57224] text-[#f57224] text-sm font-semibold px-4 py-1.5 rounded hover:bg-orange-50 transition-colors">
          SHOP ALL PRODUCTS
        </button>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-6 gap-3">
        {products.map((p) => (
          <div key={p.id} className="cursor-pointer group">
            <div className="relative rounded overflow-hidden bg-gray-50 aspect-square mb-2">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {p.badge && (
                <div className="absolute bottom-1 left-1 bg-[#f57224] text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                  {p.badge}
                </div>
              )}
            </div>
            <p className="text-xs text-gray-700 leading-snug line-clamp-2 mb-1">{p.name}</p>
            <p className="text-[#f57224] font-bold text-sm">{p.price}</p>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-gray-400 text-[11px] line-through">{p.originalPrice}</span>
              <span className="text-[11px] text-gray-500">{p.discount}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
