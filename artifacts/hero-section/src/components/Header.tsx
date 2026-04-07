import { Search, ShoppingCart, User } from "lucide-react";
import { Link } from "wouter";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { totalItems } = useCart();

  return (
    <div className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-2">
        {/* Desktop layout */}
        <div className="hidden md:flex items-center h-[64px] gap-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center gap-1">
              <div className="w-8 h-8 flex items-center justify-center">
                <svg viewBox="0 0 40 40" width="36" height="36" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 20 L10 5 L20 20 L10 35 Z" fill="#f57224" />
                  <path d="M10 20 L20 5 L30 20 L20 35 Z" fill="#ff8c37" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-[#f57224] tracking-tight">Lazada</span>
            </div>
          </Link>

          {/* Search bar - flex-grow */}
          <div className="flex-1 flex items-center">
            <div className="flex w-full rounded-sm overflow-hidden" style={{ backgroundColor: "#EFF0F5" }}>
              <input
                type="text"
                placeholder="Search in Lazada"
                className="flex-1 px-4 py-[10px] text-sm outline-none text-gray-700"
                style={{ backgroundColor: "#EFF0F5" }}
              />
              <Link href="/shop">
                <button className="bg-[#f57224] hover:bg-[#e06510] px-4 h-full flex items-center justify-center transition-colors">
                  <Search size={18} className="text-white" />
                </button>
              </Link>
            </div>
          </div>

          {/* Right side */}
          <div className="flex-shrink-0 flex items-center gap-4">
            <Link href="/cart" className="flex-shrink-0 relative">
              <div className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
                <div className="relative">
                  <ShoppingCart size={26} className="text-gray-700" />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-[#f57224] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                      {totalItems > 99 ? "99+" : totalItems}
                    </span>
                  )}
                </div>
                <span className="text-xs text-gray-600 hidden lg:block">Cart</span>
              </div>
            </Link>

            <Link href="/account" className="flex-shrink-0">
              <div className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
                <div className="w-7 h-7 rounded-full bg-[#f57224] flex items-center justify-center">
                  <User size={14} className="text-white" />
                </div>
                <span className="text-xs text-gray-600 hidden lg:block">Account</span>
              </div>
            </Link>

            <Link href="#" className="flex-shrink-0 hidden xl:block">
              <img src="/btn-lazada-wallet.png" alt="Lazada Wallet" className="h-[38px] w-auto" />
            </Link>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="flex md:hidden flex-col py-2 gap-2">
          <div className="flex items-center justify-between gap-2">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <div className="flex items-center gap-1">
                <div className="w-7 h-7 flex items-center justify-center">
                  <svg viewBox="0 0 40 40" width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 20 L10 5 L20 20 L10 35 Z" fill="#f57224" />
                    <path d="M10 20 L20 5 L30 20 L20 35 Z" fill="#ff8c37" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-[#f57224] tracking-tight">Lazada</span>
              </div>
            </Link>

            <div className="flex items-center gap-3 ml-auto">
              <Link href="/account" className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-[#f57224] flex items-center justify-center">
                  <User size={15} className="text-white" />
                </div>
              </Link>
              <Link href="/cart" className="flex-shrink-0 relative">
                <ShoppingCart size={24} className="text-gray-700" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#f57224] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {totalItems > 99 ? "99+" : totalItems}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Search bar - full width on mobile */}
          <div className="flex w-full rounded-sm overflow-hidden" style={{ backgroundColor: "#EFF0F5" }}>
            <input
              type="text"
              placeholder="Search in Lazada"
              className="flex-1 px-3 py-2 text-sm outline-none text-gray-700"
              style={{ backgroundColor: "#EFF0F5" }}
            />
            <Link href="/shop">
              <button className="bg-[#f57224] hover:bg-[#e06510] px-3 h-full flex items-center justify-center transition-colors">
                <Search size={16} className="text-white" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop nav links */}
      <div className="hidden md:block border-t border-gray-100 bg-white">
        <div className="max-w-[1200px] mx-auto px-2">
          <div className="flex items-center gap-6 text-xs text-gray-600 h-8">
            <Link href="/" className="hover:text-[#f57224] transition-colors font-medium">Home</Link>
            <Link href="/shop" className="hover:text-[#f57224] transition-colors">All Products</Link>
            <Link href="/shop" className="hover:text-[#f57224] transition-colors">Flash Sale</Link>
            <Link href="/shop" className="hover:text-[#f57224] transition-colors">LazMall</Link>
            <Link href="/shop" className="hover:text-[#f57224] transition-colors">Electronics</Link>
            <Link href="/shop" className="hover:text-[#f57224] transition-colors">Fashion</Link>
            <Link href="/shop" className="hover:text-[#f57224] transition-colors">Home & Kitchen</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
