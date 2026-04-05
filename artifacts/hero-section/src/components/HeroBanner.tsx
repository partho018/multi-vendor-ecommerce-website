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

        {/* Combined rated + features section with single bg image */}
        <div
          className="px-3 pt-2 pb-3 overflow-hidden"
          style={{
            backgroundImage: "url('/rated-bg.png')",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Rating row */}
          <div className="flex items-center gap-1 mb-2">
            <span className="text-yellow-300 text-sm">★</span>
            <span style={{ color: "rgb(255,255,255)", fontSize: "10px", fontWeight: 500, lineHeight: "14px" }}>4.8 Rated</span>
          </div>

          {/* Subtitle */}
          <p style={{ color: "rgb(255,255,255)", fontSize: "12px", fontWeight: 500, lineHeight: "14px" }} className="mb-2.5">Get the Lazada App to Enjoy</p>

          {/* Feature rows */}
          <div className="space-y-2">
            {/* Free Shipping */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full flex-shrink-0 overflow-hidden">
                <img src="/icon-shipping.avif" alt="Free Shipping" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-white text-[12px] font-bold leading-tight">Free</p>
                <p className="text-white/80 text-[10px] leading-tight">Shipping</p>
              </div>
            </div>

            {/* Exclusive Vouchers */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full flex-shrink-0 overflow-hidden">
                <img src="/icon-voucher.avif" alt="Exclusive Vouchers" className="w-full h-full object-cover" />
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
