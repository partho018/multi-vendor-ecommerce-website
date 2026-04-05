import { Search } from "lucide-react";

export default function Header() {
  return (
    <div className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-[1200px] mx-auto px-2 h-[64px] relative flex items-center">
        {/* Logo - left */}
        <a href="#" className="flex-shrink-0">
          <div className="flex items-center gap-1">
            <div className="w-8 h-8 flex items-center justify-center">
              <svg viewBox="0 0 40 40" width="36" height="36" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 20 L10 5 L20 20 L10 35 Z" fill="#f57224" />
                <path d="M10 20 L20 5 L30 20 L20 35 Z" fill="#ff8c37" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-[#f57224] tracking-tight">Lazada</span>
          </div>
        </a>

        {/* Search bar - absolutely centered */}
        <div className="absolute left-1/2 -translate-x-1/2 w-[600px] flex items-center">
          <div className="flex w-full rounded-sm overflow-hidden" style={{ backgroundColor: "#EFF0F5" }}>
            <input
              type="text"
              placeholder="Search in Lazada"
              className="flex-1 px-4 py-[10px] text-sm outline-none text-gray-700"
              style={{ backgroundColor: "#EFF0F5" }}
            />
            <button className="bg-[#f57224] hover:bg-[#e06510] px-4 flex items-center justify-center transition-colors">
              <Search size={18} className="text-white" />
            </button>
          </div>
        </div>

        {/* Right side - cart + wallet */}
        <div className="ml-auto flex items-center gap-4">
          <a href="#" className="flex-shrink-0">
            <img src="/icon-cart.png" alt="Cart" className="h-[28px] w-auto" />
          </a>
          <a href="#" className="flex-shrink-0">
            <img src="/btn-lazada-wallet.png" alt="Lazada Wallet" className="h-[38px] w-auto" />
          </a>
        </div>
      </div>
    </div>
  );
}
