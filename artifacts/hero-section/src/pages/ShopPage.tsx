import { useState, useMemo, useEffect } from "react";
import { Link, useSearch } from "wouter";
import { Search, SlidersHorizontal, Star, ShoppingCart, ChevronDown } from "lucide-react";
import { products, categories } from "@/data/products";
import { useCart } from "@/context/CartContext";
import TopNav from "@/components/TopNav";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sortOptions = ["Best Match", "Price: Low to High", "Price: High to Low", "Most Reviews", "Top Rated"];

function StarRating({ rating, small }: { rating: number; small?: boolean }) {
  const size = small ? "w-3 h-3" : "w-3.5 h-3.5";
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} className={size} viewBox="0 0 20 20"
          fill={s <= Math.floor(rating) ? "#f57224" : s - 0.5 <= rating ? "url(#half-shop)" : "#d1d5db"}>
          <defs>
            <linearGradient id="half-shop">
              <stop offset="50%" stopColor="#f57224" /><stop offset="50%" stopColor="#d1d5db" />
            </linearGradient>
          </defs>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ShopPage() {
  const { addToCart } = useCart();
  const searchString = useSearch();
  const urlCategory = new URLSearchParams(searchString).get("category") || "All";

  const [selectedCategory, setSelectedCategory] = useState(urlCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [sort, setSort] = useState("Best Match");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [minRating, setMinRating] = useState(0);
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    const cat = new URLSearchParams(searchString).get("category") || "All";
    setSelectedCategory(cat);
  }, [searchString]);

  const filtered = useMemo(() => {
    let list = [...products];
    if (selectedCategory !== "All") list = list.filter((p) => p.category === selectedCategory);
    if (searchQuery) list = list.filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.brand.toLowerCase().includes(searchQuery.toLowerCase()));
    list = list.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);
    if (minRating > 0) list = list.filter((p) => p.rating >= minRating);
    if (sort === "Price: Low to High") list.sort((a, b) => a.price - b.price);
    else if (sort === "Price: High to Low") list.sort((a, b) => b.price - a.price);
    else if (sort === "Most Reviews") list.sort((a, b) => b.reviews - a.reviews);
    else if (sort === "Top Rated") list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [selectedCategory, searchQuery, sort, priceRange, minRating]);

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <TopNav />
      <Header />

      <div className="max-w-[1200px] mx-auto px-2 py-3">
        {/* Breadcrumb */}
        <div className="text-xs text-gray-500 mb-3 flex items-center gap-1">
          <Link href="/" className="hover:text-[#f57224]">Home</Link>
          <span>/</span>
          <span className="text-gray-800">Shop</span>
          {selectedCategory !== "All" && <><span>/</span><span className="text-gray-800">{selectedCategory}</span></>}
        </div>

        <div className="flex gap-3">
          {/* Sidebar Filter - Desktop */}
          <div className="hidden md:block w-[220px] flex-shrink-0">
            <div className="bg-white rounded p-4 mb-3">
              <h3 className="font-bold text-sm text-gray-900 mb-3">Categories</h3>
              <ul className="space-y-1">
                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => setSelectedCategory(cat)}
                      className={`text-sm w-full text-left px-2 py-1.5 rounded transition-colors ${selectedCategory === cat ? "text-[#f57224] font-semibold bg-orange-50" : "text-gray-600 hover:text-[#f57224]"}`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded p-4 mb-3">
              <h3 className="font-bold text-sm text-gray-900 mb-3">Price Range</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>৳{priceRange[0]}</span><span>—</span><span>৳{priceRange[1]}</span>
                </div>
                <input type="range" min={0} max={2000} step={50} value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="w-full accent-[#f57224]" />
                <div className="flex gap-2">
                  <input type="number" placeholder="Min" value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    className="w-full border border-gray-200 rounded px-2 py-1 text-xs" />
                  <input type="number" placeholder="Max" value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="w-full border border-gray-200 rounded px-2 py-1 text-xs" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded p-4">
              <h3 className="font-bold text-sm text-gray-900 mb-3">Rating</h3>
              <div className="space-y-1.5">
                {[4, 3, 2, 0].map((r) => (
                  <button key={r} onClick={() => setMinRating(r)}
                    className={`flex items-center gap-1.5 text-xs w-full px-2 py-1 rounded transition-colors ${minRating === r ? "bg-orange-50 text-[#f57224] font-semibold" : "text-gray-600 hover:bg-gray-50"}`}>
                    {r > 0 ? (<><StarRating rating={r} small /><span>& above</span></>) : <span>All ratings</span>}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Search + Sort bar */}
            <div className="bg-white rounded p-3 mb-3 flex flex-col sm:flex-row gap-2 items-start sm:items-center justify-between">
              <div className="flex items-center gap-2 flex-1">
                <div className="flex items-center gap-2 flex-1 border border-gray-200 rounded px-3 py-2">
                  <Search size={14} className="text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 text-sm outline-none text-gray-700"
                  />
                </div>
                <button
                  onClick={() => setShowFilter(!showFilter)}
                  className="md:hidden flex items-center gap-1 border border-gray-200 rounded px-3 py-2 text-sm text-gray-600"
                >
                  <SlidersHorizontal size={14} /> Filter
                </button>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500 whitespace-nowrap">{filtered.length} results</span>
                <div className="relative">
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="border border-gray-200 rounded px-3 py-2 text-xs text-gray-700 outline-none appearance-none pr-7 cursor-pointer"
                  >
                    {sortOptions.map((s) => <option key={s}>{s}</option>)}
                  </select>
                  <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Mobile filter panel */}
            {showFilter && (
              <div className="md:hidden bg-white rounded p-4 mb-3">
                <h3 className="font-bold text-sm mb-2">Categories</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {categories.map((cat) => (
                    <button key={cat} onClick={() => { setSelectedCategory(cat); setShowFilter(false); }}
                      className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${selectedCategory === cat ? "bg-[#f57224] text-white border-[#f57224]" : "border-gray-200 text-gray-600"}`}>
                      {cat}
                    </button>
                  ))}
                </div>
                <h3 className="font-bold text-sm mb-2">Min Rating</h3>
                <div className="flex gap-2 flex-wrap">
                  {[0, 3, 4].map((r) => (
                    <button key={r} onClick={() => { setMinRating(r); setShowFilter(false); }}
                      className={`text-xs px-3 py-1.5 rounded-full border ${minRating === r ? "bg-[#f57224] text-white border-[#f57224]" : "border-gray-200 text-gray-600"}`}>
                      {r === 0 ? "All" : `${r}★+`}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="bg-white rounded p-12 text-center">
                <p className="text-gray-400 text-lg">No products found</p>
                <button onClick={() => { setSelectedCategory("All"); setSearchQuery(""); setMinRating(0); setPriceRange([0, 2000]); }}
                  className="mt-3 text-[#f57224] text-sm hover:underline">Clear filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[5px]">
                {filtered.map((p) => (
                  <div key={p.id} className="bg-white hover:shadow-md transition-shadow duration-200 flex flex-col group">
                    <Link href={`/product/${p.id}`} className="block">
                      <div className="relative w-full overflow-hidden bg-white" style={{ paddingTop: "100%" }}>
                        <img src={p.image} alt={p.name}
                          className="absolute inset-0 w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-300" />
                        {p.badge && (
                          <div className="absolute top-2 left-2 bg-[#F05024] text-white text-[9px] font-bold px-1 py-0.5 rounded-sm">
                            {p.badge}
                          </div>
                        )}
                        <div className="absolute top-2 right-2 bg-[#f57224] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-sm">
                          -{p.discount}%
                        </div>
                      </div>
                    </Link>

                    <div className="p-2 flex flex-col gap-1 flex-1">
                      <Link href={`/product/${p.id}`} className="block">
                        <p className="text-xs text-gray-700 line-clamp-2 leading-tight hover:text-[#f57224] transition-colors">{p.name}</p>
                      </Link>
                      <div className="flex items-baseline gap-1 flex-wrap mt-auto">
                        <span className="text-sm font-bold text-[#f57224]">৳{p.price}</span>
                        <span className="text-[10px] text-gray-400 line-through">৳{p.original}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <StarRating rating={p.rating} small />
                        <span className="text-[10px] text-gray-400">({p.reviews})</span>
                      </div>
                      <button
                        onClick={() => addToCart(p)}
                        className="mt-1 w-full bg-[#f57224] hover:bg-[#e06510] text-white text-xs font-semibold py-2 rounded transition-colors flex items-center justify-center gap-1"
                      >
                        <ShoppingCart size={12} /> Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
