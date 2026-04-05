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
      <div className="w-[190px] flex-shrink-0 flex flex-col gap-0 rounded-sm overflow-hidden border border-gray-200">
        {/* Try App header */}
        <div className="bg-white px-3 py-2 flex items-center gap-2 border-b border-gray-100">
          <div className="w-7 h-7 bg-[#f57224] rounded flex items-center justify-center text-white font-black text-xs">
            LAZ
          </div>
          <div>
            <p className="text-[11px] font-bold text-gray-800 leading-tight">TRY LAZADA APP</p>
          </div>
        </div>

        {/* Rating */}
        <div className="bg-[#f57224] px-3 py-1 flex items-center gap-1">
          <span className="text-yellow-300 text-xs">★</span>
          <span className="text-white text-[11px] font-bold">4.8 Rated</span>
        </div>

        {/* Features */}
        <div className="bg-white flex-1 px-3 py-2">
          <p className="text-[10px] text-gray-600 mb-2">Get the Lazada App to Enjoy</p>

          <div className="space-y-2">
            <div className="flex items-center gap-2 bg-gray-50 rounded p-1.5">
              <div className="w-7 h-7 bg-[#f57224] rounded flex items-center justify-center text-white text-xs flex-shrink-0">
                🚚
              </div>
              <div>
                <p className="text-[11px] font-bold text-gray-800">Free</p>
                <p className="text-[10px] text-gray-500">Shipping</p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-gray-50 rounded p-1.5">
              <div className="w-7 h-7 bg-[#f57224] rounded flex items-center justify-center text-white text-xs flex-shrink-0">
                🎫
              </div>
              <div>
                <p className="text-[11px] font-bold text-gray-800">Exclusive</p>
                <p className="text-[10px] text-gray-500">Vouchers</p>
              </div>
            </div>
          </div>

          {/* QR code placeholder */}
          <div className="mt-3 flex flex-col items-center">
            <div className="w-[80px] h-[80px] bg-gray-100 border border-gray-200 flex items-center justify-center rounded overflow-hidden">
              <QRPattern />
            </div>
            <div className="mt-2 flex flex-col gap-1 w-full">
              <button className="flex items-center gap-1 bg-gray-800 hover:bg-gray-700 text-white text-[10px] rounded px-2 py-1 justify-center transition-colors w-full">
                <span>🍎</span>
                <span className="font-semibold">App Store</span>
              </button>
              <button className="flex items-center gap-1 bg-gray-800 hover:bg-gray-700 text-white text-[10px] rounded px-2 py-1 justify-center transition-colors w-full">
                <span>▶</span>
                <span className="font-semibold">Google Play</span>
              </button>
            </div>
            <p className="text-[9px] text-gray-400 text-center mt-1.5">Download the app now by scanning the QR code</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function QRPattern() {
  return (
    <svg viewBox="0 0 80 80" width="80" height="80" xmlns="http://www.w3.org/2000/svg">
      {/* TL block */}
      <rect x="5" y="5" width="22" height="22" rx="2" fill="none" stroke="#222" strokeWidth="3" />
      <rect x="11" y="11" width="10" height="10" fill="#222" rx="1" />
      {/* TR block */}
      <rect x="53" y="5" width="22" height="22" rx="2" fill="none" stroke="#222" strokeWidth="3" />
      <rect x="59" y="11" width="10" height="10" fill="#222" rx="1" />
      {/* BL block */}
      <rect x="5" y="53" width="22" height="22" rx="2" fill="none" stroke="#222" strokeWidth="3" />
      <rect x="11" y="59" width="10" height="10" fill="#222" rx="1" />
      {/* Data dots pattern */}
      {[
        [31,5],[35,5],[39,5],[43,5],[47,5],
        [31,9],[39,9],[43,9],
        [35,13],[43,13],[47,13],
        [31,17],[39,17],
        [35,21],[43,21],[47,21],
        [31,25],[35,25],[43,25],
        [39,29],[47,29],
        [53,31],[57,31],[61,31],[65,31],[69,31],[73,31],
        [31,35],[35,35],[43,35],[47,35],[51,35],[59,35],[73,35],
        [31,39],[39,39],[51,39],[65,39],[69,39],
        [31,43],[35,43],[43,43],[55,43],[63,43],[73,43],
        [31,47],[47,47],[53,47],[61,47],[65,47],
        [31,51],[35,51],[39,51],[51,51],[55,51],[59,51],[63,51],
        [53,57],[59,57],[65,57],[73,57],
        [53,61],[57,61],[63,61],[67,61],[71,61],
        [53,65],[61,65],[65,65],[73,65],
        [53,69],[57,69],[69,69],[73,69],
        [53,73],[61,73],[65,73],[69,73],
      ].map(([x,y],i) => (
        <rect key={i} x={x} y={y} width="3" height="3" fill="#222" />
      ))}
    </svg>
  );
}
