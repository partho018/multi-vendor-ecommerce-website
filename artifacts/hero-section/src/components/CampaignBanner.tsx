import { ChevronRight } from "lucide-react";

export default function CampaignBanner() {
  return (
    <div
      className="relative rounded-sm overflow-hidden flex items-center"
      style={{
        background: "linear-gradient(90deg, #9b27af 0%, #c71585 40%, #e040fb 70%, #ab47bc 100%)",
        minHeight: 90,
      }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-white/5 -translate-x-10 -translate-y-10" />
      <div className="absolute bottom-0 right-48 w-24 h-24 rounded-full bg-white/5 translate-y-8" />

      {/* Left: Date + Sale label */}
      <div className="flex-shrink-0 px-6 flex flex-col items-center justify-center">
        <div className="text-white text-center">
          <div className="flex items-baseline gap-0.5 leading-none">
            <span className="text-[42px] font-black leading-none">4.</span>
            <span className="text-[42px] font-black leading-none">4</span>
          </div>
          <div className="text-xs font-bold tracking-widest uppercase mt-0.5">WONDER</div>
          <div className="text-xs font-bold tracking-widest uppercase">SALE</div>
        </div>
      </div>

      {/* Date badge */}
      <div className="flex-shrink-0 mr-4">
        <div className="bg-[#f57224] text-white text-[10px] font-bold px-2 py-1.5 rounded text-center leading-tight">
          <div>3 (8PM)</div>
          <div>- 6 APR</div>
        </div>
      </div>

      {/* Decorative heart */}
      <div className="flex-shrink-0 mr-2 text-2xl text-pink-200 opacity-70">💗</div>

      {/* Center: Main text */}
      <div className="flex-1 px-4">
        <p className="text-white text-2xl font-black leading-tight drop-shadow-sm">
          CAMPAIGN VOUCHER
        </p>
        <p className="text-white text-3xl font-black leading-tight">
          DISCOUNT UP TO{" "}
          <span className="text-yellow-300">RM800* OFF</span>
        </p>
        <p className="text-pink-200 font-semibold text-sm mt-0.5">Last Day To Redeem!</p>
        <p className="text-pink-300 text-[10px] mt-0.5">*T&Cs apply</p>
      </div>

      {/* Right decorative elements */}
      <div className="flex-shrink-0 flex items-center gap-3 pr-4">
        {/* Lightning bolts */}
        <div className="text-yellow-300 text-3xl opacity-80">⚡</div>
        <div className="text-yellow-300 text-2xl opacity-60">⚡</div>
        {/* Percentage badge */}
        <div className="relative w-12 h-12 flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-[#f57224] flex items-center justify-center">
            <span className="text-white text-[10px] font-black leading-tight text-center">%</span>
          </div>
        </div>
        {/* Arrow */}
        <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center hover:bg-yellow-300 cursor-pointer transition-colors">
          <ChevronRight size={20} className="text-gray-800" />
        </div>
      </div>
    </div>
  );
}
