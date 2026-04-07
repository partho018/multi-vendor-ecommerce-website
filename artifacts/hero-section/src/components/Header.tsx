import { Search } from "lucide-react";

export default function Header() {
  return (
    <div className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-[1200px] mx-auto px-2">
        {/* Desktop layout */}
        <div className="hidden md:flex items-center h-[64px] relative">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <div className="flex items-center gap-1">
              <div className="w-8 h-8 flex items-center justify-center">
                <svg viewBox="0 0 40 40" width="36" height="36" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 20 L10 5 L20 20 L10 35 Z" fill="#f57224" />
                  <path d="M10 20 L20 5 L30 20 L20 35 Z" fill="#ff8c37" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-[#f57224] tracking-tight">GlobalMart</span>
            </div>
          </a>

          {/* Search bar - absolutely centered */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[680px] flex items-center">
            <div className="flex w-full rounded-sm overflow-hidden" style={{ backgroundColor: "#EFF0F5" }}>
              <input
                type="text"
                placeholder="Search Products..."
                className="flex-1 px-4 py-[10px] text-sm outline-none text-gray-700"
                style={{ backgroundColor: "#EFF0F5" }}
              />
              <button className="bg-[#f57224] hover:bg-[#e06510] px-4 flex items-center justify-center transition-colors">
                <Search size={18} className="text-white" />
              </button>
            </div>
          </div>

          {/* Right side */}
          <div className="ml-auto flex items-center gap-4">
            <a href="#" className="flex-shrink-0">
              <img src="/icon-cart.png" alt="Cart" className="h-[28px] w-auto" />
            </a>
            <a href="#" className="flex-shrink-0">
              <img src="/btn-lazada-wallet.png" alt="Lazada Wallet" className="h-[38px] w-auto" />
            </a>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="flex md:hidden flex-col py-2 gap-2">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex-shrink-0">
              <div className="flex items-center gap-1">
                <div className="w-7 h-7 flex items-center justify-center">
                  <svg viewBox="0 0 40 40" width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 20 L10 5 L20 20 L10 35 Z" fill="#f57224" />
                    <path d="M10 20 L20 5 L30 20 L20 35 Z" fill="#ff8c37" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-[#f57224] tracking-tight">GlobalMart</span>
              </div>
            </a>
            {/* Cart + Wallet on mobile */}
            <div className="flex items-center gap-3">
              <a href="#" className="flex-shrink-0">
                <img src="/icon-cart.png" alt="Cart" className="h-[24px] w-auto" />
              </a>
              <a href="#" className="flex-shrink-0 hidden sm:block">
                <img src="/btn-lazada-wallet.png" alt="Lazada Wallet" className="h-[30px] w-auto" />
              </a>
            </div>
          </div>
          {/* Search bar - full width on mobile */}
          <div className="flex w-full rounded-sm overflow-hidden" style={{ backgroundColor: "#EFF0F5" }}>
            <input
              type="text"
              placeholder="Search Products..."
              className="flex-1 px-3 py-2 text-sm outline-none text-gray-700"
              style={{ backgroundColor: "#EFF0F5" }}
            />
            <button className="bg-[#f57224] hover:bg-[#e06510] px-3 flex items-center justify-center transition-colors">
              <Search size={16} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
