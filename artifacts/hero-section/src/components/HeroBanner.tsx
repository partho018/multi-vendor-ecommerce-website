import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { src: "/banner2.webp", alt: "HUAWEI MatePad 11.5 S 2026" },
  { src: "/banner3.avif", alt: "Banner 3" },
  { src: "/banner4.avif", alt: "Banner 4" },
  { src: "/banner5.avif", alt: "Banner 5" },
  { src: "/banner1.jpg",  alt: "LazTravel - Your Next Trip Starts Here" },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 3000);
  };

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const prev = () => { setCurrent((c) => (c - 1 + slides.length) % slides.length); resetTimer(); };
  const next = () => { setCurrent((c) => (c + 1) % slides.length); resetTimer(); };
  const goTo = (i: number) => { setCurrent(i); resetTimer(); };

  return (
    <div className="flex gap-2 mb-2">
      {/* Main banner slider */}
      <div className="flex-1 relative rounded-sm overflow-hidden bg-gray-100" style={{ minHeight: 260 }}>
        <img
          key={current}
          src={slides[current].src}
          alt={slides[current].alt}
          className="w-full h-full object-cover object-center"
          style={{ minHeight: 260, maxHeight: 320 }}
        />

        {/* Prev arrow */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow transition-colors"
        >
          <ChevronLeft size={18} className="text-gray-600" />
        </button>

        {/* Next arrow */}
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow transition-colors"
        >
          <ChevronRight size={18} className="text-gray-600" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 items-center">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-4 h-2 bg-white shadow"
                  : "w-2 h-2 bg-white/50 hover:bg-white/75"
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
          className="px-3 py-1.5 flex items-center gap-1 overflow-hidden"
          style={{
            backgroundImage: "url('/rated-bg.png')",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <span className="text-yellow-300 text-sm">★</span>
          <span style={{ color: "rgb(255,255,255)", fontSize: "10px", fontWeight: 500, lineHeight: "14px" }}>4.8 Rated</span>
        </div>

        {/* Gradient features section */}
        <div
          className="px-3 pt-2.5 pb-3"
          style={{ background: "linear-gradient(160deg, #f97316 0%, #fb923c 30%, #f43f7a 70%, #ec4899 100%)" }}
        >
          <p style={{ color: "rgb(255,255,255)", fontSize: "12px", fontWeight: 500, lineHeight: "14px" }} className="mb-2.5">Get the Lazada App to Enjoy</p>

          <div className="space-y-2">
            {/* Free Shipping */}
            <div className="flex items-center gap-2.5 bg-white/15 rounded-lg px-2 py-2">
              <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm overflow-hidden">
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
