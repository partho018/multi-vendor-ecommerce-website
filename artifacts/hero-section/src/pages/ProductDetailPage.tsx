import { useState } from "react";
import { Link, useParams } from "wouter";
import { ShoppingCart, Star, Shield, Truck, RotateCcw, Minus, Plus, Heart, ChevronRight } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import TopNav from "@/components/TopNav";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} className="w-4 h-4" viewBox="0 0 20 20"
          fill={s <= Math.floor(rating) ? "#f57224" : s - 0.5 <= rating ? "url(#half-detail)" : "#d1d5db"}>
          <defs>
            <linearGradient id="half-detail">
              <stop offset="50%" stopColor="#f57224" /><stop offset="50%" stopColor="#d1d5db" />
            </linearGradient>
          </defs>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const mockReviews = [
  { id: 1, name: "Rahim K.", rating: 5, date: "2 days ago", comment: "Excellent product! Very satisfied with the quality and fast delivery." },
  { id: 2, name: "Fatema B.", rating: 4, date: "1 week ago", comment: "Good value for money. Packaging was great. Slightly different shade than photo but overall happy." },
  { id: 3, name: "Karim M.", rating: 5, date: "2 weeks ago", comment: "Exactly as described. Will buy again!" },
];

export default function ProductDetailPage() {
  const params = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(params.id));
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImg, setSelectedImg] = useState(0);
  const [wishlisted, setWishlisted] = useState(false);
  const [addedMsg, setAddedMsg] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#f5f5f5]">
        <TopNav /><Header />
        <div className="max-w-[1200px] mx-auto px-4 py-20 text-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Product not found</h2>
          <Link href="/shop" className="text-[#f57224] hover:underline">← Back to Shop</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 6);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedMsg(true);
    setTimeout(() => setAddedMsg(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <TopNav />
      <Header />

      <div className="max-w-[1200px] mx-auto px-2 py-3">
        {/* Breadcrumb */}
        <div className="text-xs text-gray-500 mb-3 flex items-center gap-1 flex-wrap">
          <Link href="/" className="hover:text-[#f57224]">Home</Link>
          <ChevronRight size={12} />
          <Link href="/shop" className="hover:text-[#f57224]">Shop</Link>
          <ChevronRight size={12} />
          <Link href={`/shop`} className="hover:text-[#f57224]">{product.category}</Link>
          <ChevronRight size={12} />
          <span className="text-gray-800 truncate max-w-[200px]">{product.name}</span>
        </div>

        {/* Main product section */}
        <div className="bg-white rounded p-4 mb-3">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Images */}
            <div className="flex flex-col-reverse sm:flex-row gap-3 md:w-[420px] flex-shrink-0">
              {/* Thumbnails */}
              <div className="flex sm:flex-col gap-2 overflow-x-auto sm:overflow-visible">
                {product.images.map((img, i) => (
                  <button key={i} onClick={() => setSelectedImg(i)}
                    className={`flex-shrink-0 w-14 h-14 border-2 rounded overflow-hidden transition-colors ${selectedImg === i ? "border-[#f57224]" : "border-gray-200 hover:border-gray-300"}`}>
                    <img src={img} alt="" className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
              {/* Main image */}
              <div className="flex-1 relative aspect-square border border-gray-100 rounded overflow-hidden bg-white">
                <img src={product.images[selectedImg]} alt={product.name}
                  className="w-full h-full object-contain p-4" />
                {product.badge && (
                  <div className="absolute top-3 left-3 bg-[#F05024] text-white text-xs font-bold px-2 py-1 rounded-sm">
                    {product.badge}
                  </div>
                )}
                <button onClick={() => setWishlisted(!wishlisted)}
                  className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center hover:scale-110 transition-transform">
                  <Heart size={16} fill={wishlisted ? "#f57224" : "none"} className={wishlisted ? "text-[#f57224]" : "text-gray-400"} />
                </button>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="text-xs text-[#f57224] font-semibold mb-1">{product.brand}</div>
              <h1 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug mb-3">{product.name}</h1>

              {/* Rating + Sold */}
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-semibold text-gray-800">{product.rating}</span>
                  <StarRating rating={product.rating} />
                </div>
                <span className="text-gray-300">|</span>
                <span className="text-xs text-gray-500">{product.reviews.toLocaleString()} ratings</span>
                {product.sold && <><span className="text-gray-300">|</span><span className="text-xs text-gray-500">{product.sold.toLocaleString()} sold</span></>}
              </div>

              {/* Price */}
              <div className="bg-gray-50 rounded p-3 mb-4">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-3xl font-bold text-[#f57224]">৳{product.price.toLocaleString()}</span>
                  <span className="text-base text-gray-400 line-through">৳{product.original.toLocaleString()}</span>
                  <span className="bg-[#f57224] text-white text-xs font-bold px-2 py-0.5 rounded">-{product.discount}%</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">You save ৳{(product.original - product.price).toLocaleString()}</p>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed mb-4">{product.description}</p>

              {/* Quantity */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm text-gray-700 font-medium">Quantity:</span>
                <div className="flex items-center border border-gray-200 rounded">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-9 h-9 flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <Minus size={14} className="text-gray-600" />
                  </button>
                  <span className="w-10 text-center text-sm font-semibold">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}
                    className="w-9 h-9 flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <Plus size={14} className="text-gray-600" />
                  </button>
                </div>
                <span className="text-xs text-gray-500">{product.inStock ? "In Stock" : "Out of Stock"}</span>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <button onClick={handleAddToCart}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded font-semibold text-sm transition-all ${addedMsg ? "bg-green-500 text-white" : "bg-[#f57224] hover:bg-[#e06510] text-white"}`}>
                  <ShoppingCart size={16} />
                  {addedMsg ? "Added to Cart!" : "Add to Cart"}
                </button>
                <Link href="/checkout"
                  onClick={() => addToCart(product, quantity)}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded font-semibold text-sm border-2 border-[#f57224] text-[#f57224] hover:bg-orange-50 transition-colors">
                  Buy Now
                </Link>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-gray-600">
                <div className="flex items-center gap-2 bg-gray-50 rounded p-2">
                  <Truck size={14} className="text-[#3dbdb7] flex-shrink-0" />
                  <span>Free Delivery</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 rounded p-2">
                  <RotateCcw size={14} className="text-[#3dbdb7] flex-shrink-0" />
                  <span>7-Day Returns</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 rounded p-2">
                  <Shield size={14} className="text-[#3dbdb7] flex-shrink-0" />
                  <span>100% Authentic</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="bg-white rounded p-4 mb-3">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Customer Reviews</h2>
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Summary */}
            <div className="sm:w-40 flex-shrink-0 flex flex-col items-center justify-center bg-gray-50 rounded p-4">
              <span className="text-5xl font-black text-gray-900">{product.rating}</span>
              <StarRating rating={product.rating} />
              <span className="text-xs text-gray-500 mt-1">{product.reviews.toLocaleString()} reviews</span>
            </div>
            {/* Reviews list */}
            <div className="flex-1 divide-y divide-gray-100">
              {mockReviews.map((r) => (
                <div key={r.id} className="py-3">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-7 h-7 rounded-full bg-[#f57224] text-white text-xs flex items-center justify-center font-bold">
                      {r.name[0]}
                    </div>
                    <span className="text-sm font-semibold text-gray-800">{r.name}</span>
                    <span className="text-xs text-gray-400 ml-auto">{r.date}</span>
                  </div>
                  <div className="flex items-center gap-1 mb-1">
                    {[1,2,3,4,5].map((s) => (
                      <Star key={s} size={12} fill={s <= r.rating ? "#f57224" : "#d1d5db"} className={s <= r.rating ? "text-[#f57224]" : "text-gray-300"} />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">{r.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="bg-white rounded p-4">
            <h2 className="text-lg font-bold text-gray-900 mb-4">You May Also Like</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {relatedProducts.map((p) => (
                <Link key={p.id} href={`/product/${p.id}`}
                  className="group flex flex-col hover:shadow-md transition-shadow rounded overflow-hidden">
                  <div className="aspect-square bg-gray-50 flex items-center justify-center overflow-hidden">
                    <img src={p.image} alt={p.name} className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-2 bg-white">
                    <p className="text-xs text-gray-700 line-clamp-2 leading-tight mb-1">{p.name}</p>
                    <span className="text-sm font-bold text-[#f57224]">৳{p.price}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
