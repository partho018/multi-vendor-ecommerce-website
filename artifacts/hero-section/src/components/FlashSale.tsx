import { useState, useEffect } from "react";

const products = [
  { id: 1, brand: "PRAN OFFICIAL", brandColor: "#e8000d", name: "PRAN Mango Juice Drink 250ml Pack of 6 ...", image: "/flash-p1.avif", price: "৳ 180", originalPrice: "৳ 240", discount: "-25%", badge: "BESTSELLER" },
  { id: 2, brand: "ACI LIMITED", brandColor: "#005baa", name: "ACI Pure Mustard Oil 1 Litre Premium Quality ...", image: "/flash-p2.webp", price: "৳ 195", originalPrice: "৳ 250", discount: "-22%", badge: null },
  { id: 3, brand: "BASHUNDHARA", brandColor: "#1b5e20", name: "Bashundhara Soft Facial Tissue 150 Pulls 2 Ply ...", image: "/flash-p3.avif", price: "৳ 85", originalPrice: "৳ 110", discount: "-23%", badge: null },
  { id: 4, brand: "MERIL", brandColor: "#d32f2f", name: "Meril Splash Moisturizing Toilet Soap 100g Pack...", image: "/flash-p4-meril.avif", price: "৳ 55", originalPrice: "৳ 70", discount: "-21%", badge: null },
  { id: 5, brand: "FRESH", brandColor: "#2e7d32", name: "Fresh Soyabean Cooking Oil 2 Litre Bottle ...", image: "/flash-p5.avif", price: "৳ 320", originalPrice: "৳ 390", discount: "-18%", badge: null },
  { id: 6, brand: "OLYMPIC", brandColor: "#c62828", name: "Olympic Milk Bikis Biscuit 400g Family Pack ...", image: "/flash-p6.avif", price: "৳ 95", originalPrice: "৳ 120", discount: "-21%", badge: null },
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
    <span className="bg-[#D3232A] text-white font-bold text-sm px-2 sm:px-3 py-1.5 rounded min-w-[28px] text-center inline-block">
      {String(value).padStart(2, "0")}
    </span>
  );
}

export default function FlashSale() {
  const [h, m, s] = useCountdown(27 * 3600 + 58 * 60 + 1);

  return (
    <div className="bg-white rounded-sm mt-3 px-3 sm:px-5 py-4">
      <div className="mb-3">
        <h2 className="text-xl font-bold text-gray-900">Flash Sale</h2>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <span className="text-[#f57224] font-semibold text-sm">On Sale Now</span>
          <div className="flex items-center gap-1 text-gray-500 text-sm">
            <span className="hidden sm:inline">Ending in</span>
            <TimerBlock value={h as number} />
            <span className="font-bold text-gray-700">:</span>
            <TimerBlock value={m as number} />
            <span className="font-bold text-gray-700">:</span>
            <TimerBlock value={s as number} />
          </div>
        </div>
        <button className="border border-[#f57224] text-[#f57224] text-xs sm:text-sm font-semibold px-3 sm:px-4 py-2 sm:py-3 rounded hover:bg-orange-50 transition-colors">
          SHOP ALL PRODUCTS
        </button>
      </div>

      <hr className="border-t border-gray-200 mb-4" />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {products.map((p) => (
          <div key={p.id} className="cursor-pointer group border border-transparent hover:border-gray-200 hover:shadow-md rounded transition-all duration-200 p-1">
            <div className="relative rounded overflow-hidden bg-gray-50 aspect-square mb-2">
              <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
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
