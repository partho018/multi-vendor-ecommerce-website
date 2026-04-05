import { Search } from "lucide-react";

export default function Header() {
  return (
    <div className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-[1200px] mx-auto px-2 flex items-center gap-4 h-[64px]">
        {/* Logo */}
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

        {/* Search bar */}
        <div className="flex-1 flex items-center max-w-[600px]">
          <div className="flex w-full border-2 border-[#f57224] rounded-sm overflow-hidden">
            <input
              type="text"
              placeholder="Search in Lazada"
              className="flex-1 px-4 py-2 text-sm outline-none text-gray-700 bg-white"
            />
            <button className="bg-[#f57224] hover:bg-[#e06510] px-4 flex items-center justify-center transition-colors">
              <Search size={18} className="text-white" />
            </button>
          </div>
        </div>

        {/* Cart */}
        <a href="#" className="flex-shrink-0">
          <img src="/icon-cart.png" alt="Cart" className="h-[28px] w-auto" />
        </a>

        {/* Lazada Wallet */}
        <a href="#" className="flex-shrink-0">
          <img src="/btn-lazada-wallet.png" alt="Lazada Wallet" className="h-[38px] w-auto" />
        </a>
      </div>
    </div>
  );
}
