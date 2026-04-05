import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    bg: "linear-gradient(135deg, #e8f8e8 0%, #c8f0c8 100%)",
    badge1: "LazMall",
    badge1Sub: "NEW ARRIVAL",
    badge2Logo: "HUAWEI",
    title: "HUAWEI MatePad 11.5 S 2026",
    subtitle: "All-in-one Pc-Level Tablet",
    subtitle2: "Free Gift worth RM1,276*",
    tags: [
      { label: "100% AUTHENTIC", bg: "#e0000d", icon: "✓" },
      { label: "SEMUA FREE SHIPPING*", bg: "#00a63e", icon: "🚚" },
    ],
    cta: "BUY NOW",
    productColor: "#6ecf6e",
    note: "*T&Cs apply.",
  },
  {
    id: 2,
    bg: "linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)",
    badge1: "Flash Sale",
    badge1Sub: "TODAY ONLY",
    badge2Logo: "SAMSUNG",
    title: "Samsung Galaxy Tab S9 FE",
    subtitle: "Vivid 10.9-inch Display",
    subtitle2: "Free Gift worth RM800*",
    tags: [
      { label: "100% AUTHENTIC", bg: "#e0000d", icon: "✓" },
      { label: "FREE DELIVERY", bg: "#0057b8", icon: "🚚" },
    ],
    cta: "SHOP NOW",
    productColor: "#ffb74d",
    note: "*T&Cs apply.",
  },
  {
    id: 3,
    bg: "linear-gradient(135deg, #e8eaf6 0%, #c5cae9 100%)",
    badge1: "LazMall",
    badge1Sub: "HOT DEAL",
    badge2Logo: "APPLE",
    title: "iPad Air M2 (2024)",
    subtitle: "Supercharged by Apple M2 chip",
    subtitle2: "Free AirPods worth RM599*",
    tags: [
      { label: "100% AUTHENTIC", bg: "#e0000d", icon: "✓" },
      { label: "EXPRESS SHIPPING", bg: "#7b1fa2", icon: "🚀" },
    ],
    cta: "GET NOW",
    productColor: "#9fa8da",
    note: "*T&Cs apply.",
  },
];

function ProductIllustration({ color }: { color: string }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div
        className="absolute inset-0 rounded-full opacity-20"
        style={{ backgroundColor: color, transform: "scale(0.85)" }}
      />
      <svg
        viewBox="0 0 220 180"
        width="220"
        height="180"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.15))" }}
      >
        {/* Tablet body */}
        <rect x="30" y="10" width="160" height="120" rx="10" ry="10" fill="#f0f0f0" stroke="#d0d0d0" strokeWidth="2" />
        <rect x="36" y="18" width="148" height="100" rx="4" fill="#e8f5e9" />
        {/* Screen content lines */}
        <rect x="42" y="24" width="60" height="6" rx="2" fill={color} opacity="0.7" />
        <rect x="42" y="34" width="90" height="4" rx="2" fill="#bbb" opacity="0.5" />
        <rect x="42" y="42" width="75" height="4" rx="2" fill="#bbb" opacity="0.5" />
        <rect x="42" y="52" width="80" height="4" rx="2" fill="#bbb" opacity="0.5" />
        {/* Screen chart */}
        <rect x="42" y="62" width="136" height="48" rx="3" fill="white" opacity="0.7" />
        <rect x="48" y="88" width="12" height="18" rx="1" fill={color} opacity="0.8" />
        <rect x="64" y="78" width="12" height="28" rx="1" fill={color} opacity="0.65" />
        <rect x="80" y="84" width="12" height="22" rx="1" fill={color} opacity="0.8" />
        <rect x="96" y="70" width="12" height="36" rx="1" fill={color} opacity="0.65" />
        <rect x="112" y="80" width="12" height="26" rx="1" fill={color} opacity="0.8" />
        <rect x="128" y="75" width="12" height="31" rx="1" fill={color} opacity="0.65" />
        <rect x="144" y="82" width="12" height="24" rx="1" fill={color} opacity="0.8" />
        {/* Home button area */}
        <circle cx="110" cy="145" r="7" fill="#d0d0d0" />
        {/* Keyboard */}
        <rect x="20" y="140" width="180" height="30" rx="5" fill="#e0e0e0" />
        {[0,1,2,3,4,5,6,7,8,9].map((i) => (
          <rect key={i} x={25 + i * 17} y="145" width="14" height="8" rx="2" fill="#fff" opacity="0.8" />
        ))}
        {[0,1,2,3,4,5,6,7,8].map((i) => (
          <rect key={i} x={28 + i * 17} y="157" width="14" height="8" rx="2" fill="#fff" opacity="0.8" />
        ))}
        {/* Mouse */}
        <ellipse cx="195" cy="155" rx="14" ry="18" fill="#e8e8e8" stroke="#ccc" strokeWidth="1.5" />
        <line x1="195" y1="140" x2="195" y2="163" stroke="#ccc" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <div className="flex gap-2 mb-2">
      {/* Main banner */}
      <div
        className="flex-1 relative rounded-sm overflow-hidden"
        style={{ background: slide.bg, minHeight: 260 }}
      >
        {/* Content */}
        <div className="flex h-full">
          {/* Left text side */}
          <div className="flex-1 p-6 flex flex-col justify-center">
            {/* Badges row */}
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center gap-1 border-r border-gray-400 pr-3">
                <div className="bg-[#f57224] text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                  {slide.badge1}
                </div>
                <span className="text-[10px] font-semibold text-gray-600 uppercase tracking-wider">
                  {slide.badge1Sub}
                </span>
              </div>
              <span className="text-xl font-black text-gray-800 tracking-wider">{slide.badge2Logo}</span>
            </div>

            {/* Title */}
            <h1 className="text-2xl font-black text-gray-900 leading-tight mb-1">{slide.title}</h1>
            <p className="text-sm text-gray-700 font-medium mb-0.5">{slide.subtitle}</p>
            <p className="text-sm text-gray-700 mb-4">{slide.subtitle2}</p>

            {/* Trust badges */}
            <div className="flex gap-2 mb-5">
              {slide.tags.map((tag) => (
                <div
                  key={tag.label}
                  className="flex items-center gap-1 px-2 py-1 rounded text-white text-[10px] font-bold"
                  style={{ backgroundColor: tag.bg }}
                >
                  <span>{tag.icon}</span>
                  <span>{tag.label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="w-fit bg-gray-900 hover:bg-gray-700 text-white font-black text-sm px-6 py-2.5 rounded-sm transition-colors uppercase tracking-wide">
              {slide.cta}
            </button>
            <p className="text-[10px] text-gray-500 mt-2">{slide.note}</p>
          </div>

          {/* Right product image side */}
          <div className="w-[280px] flex items-center justify-center py-4 pr-4">
            <ProductIllustration color={slide.productColor} />
          </div>
        </div>

        {/* Prev/Next arrows */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-white/70 hover:bg-white rounded-full flex items-center justify-center shadow transition-colors"
        >
          <ChevronLeft size={16} className="text-gray-600" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-white/70 hover:bg-white rounded-full flex items-center justify-center shadow transition-colors"
        >
          <ChevronRight size={16} className="text-gray-600" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === current ? "bg-gray-700" : "bg-gray-400/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right sidebar - App download */}
      <div className="w-[200px] flex-shrink-0 flex flex-col rounded-sm overflow-hidden border border-gray-200 bg-white">
        {/* Try App header */}
        <div className="bg-white px-3 py-2.5 flex items-center gap-2">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #f57224 0%, #ff3c6b 100%)" }}
          >
            <span className="text-white font-black text-[10px] leading-none">LAZ</span>
          </div>
          <p className="text-[12px] font-bold text-gray-800 leading-tight tracking-wide">TRY LAZADA APP</p>
        </div>

        {/* Rating bar */}
        <div
          className="px-3 py-1.5 flex items-center gap-1"
          style={{
            backgroundImage: "url('/rated-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <span className="text-yellow-300 text-sm">★</span>
          <span className="text-white text-[11px] font-bold">4.8 Rated</span>
        </div>

        {/* Gradient features section */}
        <div
          className="px-3 pt-2.5 pb-3"
          style={{ background: "linear-gradient(160deg, #f97316 0%, #fb923c 30%, #f43f7a 70%, #ec4899 100%)" }}
        >
          <p className="text-white text-[11px] font-semibold mb-2.5">Get the Lazada App to Enjoy</p>

          <div className="space-y-2">
            {/* Free Shipping */}
            <div className="flex items-center gap-2.5 bg-white/15 rounded-lg px-2 py-2">
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm overflow-hidden">
                <div
                  className="w-full h-full flex items-center justify-center rounded-full"
                  style={{ background: "linear-gradient(135deg, #00c9b1 0%, #00a89d 100%)" }}
                >
                  <svg viewBox="0 0 28 28" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="8" width="16" height="11" rx="2" fill="white" opacity="0.9" />
                    <path d="M18 12 L24 12 L26 16 L26 19 L18 19 Z" fill="white" opacity="0.9" />
                    <circle cx="7" cy="21" r="2.5" fill="#00c9b1" stroke="white" strokeWidth="1.5" />
                    <circle cx="21" cy="21" r="2.5" fill="#00c9b1" stroke="white" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-white text-[12px] font-bold leading-tight">Free</p>
                <p className="text-white/80 text-[10px] leading-tight">Shipping</p>
              </div>
            </div>

            {/* Exclusive Vouchers */}
            <div className="flex items-center gap-2.5 bg-white/15 rounded-lg px-2 py-2">
              <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm overflow-hidden">
                <div
                  className="w-full h-full flex items-center justify-center rounded-full"
                  style={{ background: "linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)" }}
                >
                  <svg viewBox="0 0 28 28" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 9 Q4 7 6 7 L13 7 Q14 7 14.7 7.7 L21 14 Q22 15 21 16 L16 21 Q15 22 14 21 L7.7 14.7 Q7 14 7 13 L7 6 Q7 4 9 4" fill="none" stroke="white" strokeWidth="1.5" />
                    <path d="M3 8 L14.5 8 Q15.5 8 16.2 8.7 L22.5 15 Q23.5 16 22.5 17 L17 22.5 Q16 23.5 15 22.5 L8.7 16.2 Q8 15.5 8 14.5 L8 3" fill="white" opacity="0.85" />
                    <circle cx="10.5" cy="10.5" r="1.8" fill="#f43f5e" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-white text-[12px] font-bold leading-tight">Exclusive</p>
                <p className="text-white/80 text-[10px] leading-tight">Vouchers</p>
              </div>
            </div>
          </div>
        </div>

        {/* QR + Buttons section */}
        <div className="px-3 pt-3 pb-3 bg-white">
          <div className="flex gap-2 items-center">
            {/* QR code left */}
            <div className="w-[72px] h-[72px] flex-shrink-0 border border-gray-200 rounded overflow-hidden">
              <img src="/qrcode.avif" alt="QR Code" className="w-full h-full object-cover" />
            </div>
            {/* Buttons right */}
            <div className="flex flex-col gap-1.5 flex-1">
              <a href="#" className="block hover:opacity-80 transition-opacity">
                <img src="/app-store-btn.png" alt="App Store" className="w-full h-auto object-contain" />
              </a>
              <a href="#" className="block hover:opacity-80 transition-opacity">
                <img src="/google-play-btn.png" alt="Google Play" className="w-full h-auto object-contain" />
              </a>
            </div>
          </div>
          <p className="text-[9px] text-gray-400 mt-2 leading-tight">
            Download the app now by scanning the QR code
          </p>
        </div>
      </div>
    </div>
  );
}

