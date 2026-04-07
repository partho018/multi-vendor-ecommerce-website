import { Link } from "wouter";
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight, Tag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import TopNav from "@/components/TopNav";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CartPage() {
  const { items, removeFromCart, updateQty, subtotal } = useCart();
  const delivery = subtotal > 500 ? 0 : 50;
  const discount = Math.floor(subtotal * 0.05);
  const total = subtotal - discount + delivery;

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <TopNav />
      <Header />

      <div className="max-w-[1200px] mx-auto px-2 py-3">
        {/* Breadcrumb */}
        <div className="text-xs text-gray-500 mb-3 flex items-center gap-1">
          <Link href="/" className="hover:text-[#f57224]">Home</Link>
          <span>/</span>
          <span className="text-gray-800">Shopping Cart</span>
        </div>

        <h1 className="text-xl font-bold text-gray-900 mb-3">
          Shopping Cart <span className="text-gray-400 font-normal text-base">({items.length} {items.length === 1 ? "item" : "items"})</span>
        </h1>

        {items.length === 0 ? (
          <div className="bg-white rounded p-12 text-center">
            <ShoppingBag size={64} className="mx-auto text-gray-200 mb-4" />
            <p className="text-gray-500 text-lg font-medium mb-2">Your cart is empty</p>
            <p className="text-gray-400 text-sm mb-6">Add items to get started</p>
            <Link href="/shop"
              className="inline-flex items-center gap-2 bg-[#f57224] text-white px-8 py-3 rounded font-semibold hover:bg-[#e06510] transition-colors">
              Continue Shopping <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <>
            <div className="flex flex-col lg:flex-row gap-3">
              {/* Cart Items */}
              <div className="flex-1 min-w-0">
                {/* Free shipping banner */}
                {subtotal < 500 && (
                  <div className="bg-orange-50 border border-orange-200 rounded p-3 mb-3 flex items-center gap-2 text-sm">
                    <Tag size={14} className="text-[#f57224] flex-shrink-0" />
                    <span>Add <strong>৳{500 - subtotal}</strong> more for <strong>FREE delivery!</strong></span>
                  </div>
                )}
                {subtotal >= 500 && (
                  <div className="bg-green-50 border border-green-200 rounded p-3 mb-3 text-sm text-green-700">
                    🎉 You've qualified for <strong>FREE delivery!</strong>
                  </div>
                )}

                {/* Select all */}
                <div className="bg-white rounded p-3 mb-1">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span className="font-medium">{items.length} {items.length === 1 ? "item" : "items"} in cart</span>
                    <Link href="/shop" className="text-[#f57224] hover:underline text-xs">+ Add more items</Link>
                  </div>
                </div>

                {/* Items */}
                <div className="space-y-1">
                  {items.map(({ product: p, quantity }) => (
                    <div key={p.id} className="bg-white rounded p-3 sm:p-4">
                      <div className="flex gap-3">
                        <Link href={`/product/${p.id}`}>
                          <div className="w-20 h-20 sm:w-24 sm:h-24 border border-gray-100 rounded overflow-hidden flex-shrink-0 bg-white">
                            <img src={p.image} alt={p.name} className="w-full h-full object-contain p-1" />
                          </div>
                        </Link>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between gap-2">
                            <div className="flex-1 min-w-0">
                              {p.badge && (
                                <span className="inline-block bg-[#F05024] text-white text-[9px] font-bold px-1 py-0.5 rounded-sm mb-1">
                                  {p.badge}
                                </span>
                              )}
                              <Link href={`/product/${p.id}`}>
                                <p className="text-sm text-gray-800 leading-tight line-clamp-2 hover:text-[#f57224] transition-colors">{p.name}</p>
                              </Link>
                              <p className="text-xs text-gray-400 mt-0.5">{p.brand}</p>
                            </div>
                            <button onClick={() => removeFromCart(p.id)}
                              className="flex-shrink-0 text-gray-300 hover:text-red-400 transition-colors ml-2">
                              <Trash2 size={16} />
                            </button>
                          </div>

                          <div className="flex items-center justify-between mt-3 flex-wrap gap-2">
                            {/* Qty control */}
                            <div className="flex items-center border border-gray-200 rounded">
                              <button onClick={() => updateQty(p.id, quantity - 1)}
                                className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 text-gray-600 transition-colors">
                                <Minus size={12} />
                              </button>
                              <span className="w-9 text-center text-sm font-semibold">{quantity}</span>
                              <button onClick={() => updateQty(p.id, quantity + 1)}
                                className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 text-gray-600 transition-colors">
                                <Plus size={12} />
                              </button>
                            </div>

                            {/* Price */}
                            <div className="text-right">
                              <p className="text-base font-bold text-[#f57224]">৳{(p.price * quantity).toLocaleString()}</p>
                              {quantity > 1 && <p className="text-xs text-gray-400">৳{p.price} each</p>}
                              <p className="text-xs text-gray-400 line-through">৳{(p.original * quantity).toLocaleString()}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-3 flex justify-between items-center">
                  <Link href="/shop" className="text-sm text-[#f57224] hover:underline flex items-center gap-1">
                    ← Continue Shopping
                  </Link>
                </div>
              </div>

              {/* Order Summary - Desktop sidebar */}
              <div className="lg:w-[340px] flex-shrink-0">
                {/* Voucher */}
                <div className="bg-white rounded p-4 mb-3">
                  <h3 className="font-semibold text-sm text-gray-800 mb-2 flex items-center gap-1.5">
                    <Tag size={14} className="text-[#f57224]" /> Apply Voucher
                  </h3>
                  <div className="flex gap-2">
                    <input type="text" placeholder="Enter voucher code"
                      className="flex-1 border border-gray-200 rounded px-3 py-2 text-sm outline-none focus:border-[#f57224]" />
                    <button className="bg-[#f57224] text-white px-4 py-2 rounded text-sm font-semibold hover:bg-[#e06510] transition-colors">
                      Apply
                    </button>
                  </div>
                </div>

                {/* Summary */}
                <div className="bg-white rounded p-4 sticky top-20">
                  <h3 className="font-bold text-gray-900 mb-4">Order Summary</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal ({items.reduce((s, i) => s + i.quantity, 0)} items)</span>
                      <span>৳{subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-green-600">
                      <span>Discount (5%)</span>
                      <span>-৳{discount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Delivery Fee</span>
                      <span className={delivery === 0 ? "text-green-600 font-semibold" : ""}>
                        {delivery === 0 ? "FREE" : `৳${delivery}`}
                      </span>
                    </div>
                    <div className="border-t border-gray-100 pt-3 mt-3">
                      <div className="flex justify-between font-bold text-gray-900 text-base">
                        <span>Total</span>
                        <span className="text-[#f57224]">৳{total.toLocaleString()}</span>
                      </div>
                      <p className="text-xs text-green-600 mt-1">
                        You save ৳{(subtotal - total + delivery).toLocaleString()} on this order!
                      </p>
                    </div>
                  </div>

                  <Link href="/checkout"
                    className="mt-4 w-full bg-[#f57224] hover:bg-[#e06510] text-white font-bold py-3.5 rounded flex items-center justify-center gap-2 transition-colors">
                    Proceed to Checkout <ArrowRight size={16} />
                  </Link>

                  <div className="mt-3 flex items-center justify-center gap-4 text-xs text-gray-400">
                    <span>🔒 Secure Payment</span>
                    <span>|</span>
                    <span>🛡️ Buyer Protection</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile sticky checkout bar */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40 px-4 py-3">
              <div className="flex items-center justify-between gap-3 max-w-[1200px] mx-auto">
                <div>
                  <p className="text-xs text-gray-500">Total ({items.reduce((s, i) => s + i.quantity, 0)} items)</p>
                  <p className="text-lg font-black text-[#f57224]">৳{total.toLocaleString()}</p>
                  {discount > 0 && <p className="text-xs text-green-600">Save ৳{discount.toLocaleString()}</p>}
                </div>
                <Link href="/checkout"
                  className="flex-shrink-0 bg-[#f57224] hover:bg-[#e06510] text-white font-bold px-6 py-3 rounded flex items-center gap-2 transition-colors">
                  Checkout <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            {/* Spacer for sticky bar on mobile */}
            <div className="lg:hidden h-20" />
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}
