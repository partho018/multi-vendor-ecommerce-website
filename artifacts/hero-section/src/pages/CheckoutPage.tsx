import { useState } from "react";
import { Link, useLocation } from "wouter";
import { CheckCircle, ChevronRight, MapPin, CreditCard, Package } from "lucide-react";
import { useCart } from "@/context/CartContext";
import TopNav from "@/components/TopNav";
import Header from "@/components/Header";

type Step = "address" | "payment" | "review" | "success";

const paymentMethods = [
  { id: "cod", label: "Cash on Delivery", icon: "💵" },
  { id: "visa", label: "Credit / Debit Card", icon: "💳" },
  { id: "wallet", label: "Lazada Wallet", icon: "👜" },
  { id: "tng", label: "Touch n Go eWallet", icon: "📱" },
];

function StepIndicator({ step }: { step: Step }) {
  const steps: { key: Step; label: string; icon: typeof MapPin }[] = [
    { key: "address", label: "Address", icon: MapPin },
    { key: "payment", label: "Payment", icon: CreditCard },
    { key: "review", label: "Review", icon: Package },
  ];
  const order: Step[] = ["address", "payment", "review", "success"];
  const current = order.indexOf(step);

  return (
    <div className="flex items-center justify-center gap-0 mb-6">
      {steps.map((s, i) => {
        const Icon = s.icon;
        const done = order.indexOf(s.key) < current;
        const active = s.key === step;
        return (
          <div key={s.key} className="flex items-center">
            <div className={`flex flex-col items-center gap-1`}>
              <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition-colors
                ${done ? "bg-green-500 text-white" : active ? "bg-[#f57224] text-white" : "bg-gray-200 text-gray-500"}`}>
                {done ? <CheckCircle size={18} /> : <Icon size={16} />}
              </div>
              <span className={`text-[10px] font-medium ${active ? "text-[#f57224]" : done ? "text-green-600" : "text-gray-400"}`}>
                {s.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className={`w-16 sm:w-24 h-0.5 mx-1 mb-4 ${done ? "bg-green-400" : "bg-gray-200"}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function CheckoutPage() {
  const [, navigate] = useLocation();
  const { items, subtotal, clearCart } = useCart();
  const [step, setStep] = useState<Step>("address");
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const [form, setForm] = useState({
    name: "", phone: "", email: "",
    address: "", city: "", postcode: "", state: "",
  });

  const delivery = subtotal > 500 ? 0 : 50;
  const discount = Math.floor(subtotal * 0.05);
  const total = subtotal - discount + delivery;

  const orderId = `LAZ${Date.now().toString().slice(-8)}`;

  const update = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));

  const handlePlaceOrder = () => {
    clearCart();
    setStep("success");
  };

  if (step === "success") {
    return (
      <div className="min-h-screen bg-[#f5f5f5]">
        <TopNav /><Header />
        <div className="max-w-[600px] mx-auto px-4 py-10">
          <div className="bg-white rounded p-8 text-center shadow-sm">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={44} className="text-green-500" />
            </div>
            <h2 className="text-2xl font-black text-gray-900 mb-2">Order Placed!</h2>
            <p className="text-gray-500 mb-1">Thank you for shopping with Lazada</p>
            <p className="text-[#f57224] font-bold text-lg mb-6">Order ID: {orderId}</p>

            <div className="bg-gray-50 rounded p-4 text-left mb-6 space-y-1.5">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Deliver to</span>
                <span className="font-medium text-gray-800">{form.name || "Customer"}, {form.city || "Dhaka"}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Payment</span>
                <span className="font-medium text-gray-800">{paymentMethods.find(p => p.id === paymentMethod)?.label}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Total Paid</span>
                <span className="font-bold text-[#f57224]">৳{total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Est. Delivery</span>
                <span className="font-medium text-gray-800">3–5 Business Days</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/account"
                className="bg-[#f57224] text-white px-6 py-3 rounded font-semibold hover:bg-[#e06510] transition-colors">
                Track Order
              </Link>
              <Link href="/"
                className="border border-[#f57224] text-[#f57224] px-6 py-3 rounded font-semibold hover:bg-orange-50 transition-colors">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <TopNav />
      <Header />

      <div className="max-w-[1100px] mx-auto px-2 py-3">
        {/* Breadcrumb */}
        <div className="text-xs text-gray-500 mb-3 flex items-center gap-1">
          <Link href="/" className="hover:text-[#f57224]">Home</Link>
          <ChevronRight size={12} />
          <Link href="/cart" className="hover:text-[#f57224]">Cart</Link>
          <ChevronRight size={12} />
          <span className="text-gray-800">Checkout</span>
        </div>

        <StepIndicator step={step} />

        <div className="flex flex-col lg:flex-row gap-3">
          {/* Left panel */}
          <div className="flex-1 min-w-0">
            {/* STEP 1: Address */}
            {step === "address" && (
              <div className="bg-white rounded p-5">
                <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin size={18} className="text-[#f57224]" /> Delivery Address
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-gray-600 mb-1 block">Full Name *</label>
                    <input value={form.name} onChange={(e) => update("name", e.target.value)}
                      placeholder="e.g. Rahim Khan"
                      className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm outline-none focus:border-[#f57224] transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-gray-600 mb-1 block">Phone Number *</label>
                    <input value={form.phone} onChange={(e) => update("phone", e.target.value)}
                      placeholder="e.g. 01700000000"
                      className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm outline-none focus:border-[#f57224] transition-colors" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-xs font-medium text-gray-600 mb-1 block">Email Address</label>
                    <input value={form.email} onChange={(e) => update("email", e.target.value)}
                      placeholder="e.g. rahim@email.com" type="email"
                      className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm outline-none focus:border-[#f57224] transition-colors" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-xs font-medium text-gray-600 mb-1 block">Full Address *</label>
                    <textarea value={form.address} onChange={(e) => update("address", e.target.value)}
                      placeholder="House no, Road no, Area..."
                      rows={3}
                      className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm outline-none focus:border-[#f57224] transition-colors resize-none" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-gray-600 mb-1 block">City *</label>
                    <select value={form.city} onChange={(e) => update("city", e.target.value)}
                      className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm outline-none focus:border-[#f57224] bg-white">
                      <option value="">Select city</option>
                      {["Dhaka", "Chittagong", "Sylhet", "Rajshahi", "Khulna", "Barisal", "Comilla"].map(c => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-gray-600 mb-1 block">Postcode</label>
                    <input value={form.postcode} onChange={(e) => update("postcode", e.target.value)}
                      placeholder="e.g. 1200"
                      className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm outline-none focus:border-[#f57224] transition-colors" />
                  </div>
                </div>
                <button onClick={() => setStep("payment")}
                  className="mt-6 w-full bg-[#f57224] hover:bg-[#e06510] text-white font-bold py-3.5 rounded flex items-center justify-center gap-2 transition-colors">
                  Continue to Payment <ChevronRight size={16} />
                </button>
              </div>
            )}

            {/* STEP 2: Payment */}
            {step === "payment" && (
              <div className="bg-white rounded p-5">
                <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CreditCard size={18} className="text-[#f57224]" /> Payment Method
                </h2>
                <div className="space-y-3">
                  {paymentMethods.map((pm) => (
                    <label key={pm.id}
                      className={`flex items-center gap-4 p-4 border-2 rounded cursor-pointer transition-colors ${paymentMethod === pm.id ? "border-[#f57224] bg-orange-50" : "border-gray-200 hover:border-gray-300"}`}>
                      <input type="radio" name="payment" value={pm.id}
                        checked={paymentMethod === pm.id}
                        onChange={() => setPaymentMethod(pm.id)}
                        className="accent-[#f57224]" />
                      <span className="text-2xl">{pm.icon}</span>
                      <div>
                        <p className="font-semibold text-sm text-gray-800">{pm.label}</p>
                        {pm.id === "cod" && <p className="text-xs text-gray-400">Pay when you receive your order</p>}
                        {pm.id === "visa" && <p className="text-xs text-gray-400">Visa, Mastercard, AMEX accepted</p>}
                      </div>
                    </label>
                  ))}
                </div>

                {paymentMethod === "visa" && (
                  <div className="mt-4 p-4 bg-gray-50 rounded space-y-3">
                    <div>
                      <label className="text-xs font-medium text-gray-600 mb-1 block">Card Number</label>
                      <input placeholder="1234 5678 9012 3456" maxLength={19}
                        className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm outline-none focus:border-[#f57224]" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs font-medium text-gray-600 mb-1 block">Expiry Date</label>
                        <input placeholder="MM / YY"
                          className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm outline-none focus:border-[#f57224]" />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-gray-600 mb-1 block">CVV</label>
                        <input placeholder="123" maxLength={4} type="password"
                          className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm outline-none focus:border-[#f57224]" />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-medium text-gray-600 mb-1 block">Name on Card</label>
                      <input placeholder="RAHIM KHAN"
                        className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm outline-none focus:border-[#f57224]" />
                    </div>
                  </div>
                )}

                <div className="flex gap-3 mt-6">
                  <button onClick={() => setStep("address")}
                    className="flex-1 border border-gray-200 text-gray-600 font-semibold py-3 rounded hover:bg-gray-50 transition-colors">
                    ← Back
                  </button>
                  <button onClick={() => setStep("review")}
                    className="flex-1 bg-[#f57224] hover:bg-[#e06510] text-white font-bold py-3 rounded flex items-center justify-center gap-2 transition-colors">
                    Review Order <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Review */}
            {step === "review" && (
              <div className="bg-white rounded p-5">
                <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Package size={18} className="text-[#f57224]" /> Review Your Order
                </h2>

                {/* Delivery info summary */}
                <div className="bg-gray-50 rounded p-3 mb-4 text-sm space-y-1">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Name</span>
                    <span className="font-medium">{form.name || "—"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Phone</span>
                    <span className="font-medium">{form.phone || "—"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Address</span>
                    <span className="font-medium text-right max-w-[200px]">{form.address || "—"}, {form.city || "—"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Payment</span>
                    <span className="font-medium">{paymentMethods.find(p => p.id === paymentMethod)?.label}</span>
                  </div>
                  <button onClick={() => setStep("address")} className="text-[#f57224] text-xs hover:underline">Edit details</button>
                </div>

                {/* Items */}
                <div className="space-y-3 mb-4">
                  {items.map(({ product: p, quantity }) => (
                    <div key={p.id} className="flex gap-3 items-start">
                      <img src={p.image} alt={p.name} className="w-14 h-14 object-contain border border-gray-100 rounded flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-800 line-clamp-2 leading-tight">{p.name}</p>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-xs text-gray-400">Qty: {quantity}</span>
                          <span className="text-sm font-bold text-[#f57224]">৳{(p.price * quantity).toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button onClick={() => setStep("payment")}
                    className="flex-1 border border-gray-200 text-gray-600 font-semibold py-3 rounded hover:bg-gray-50 transition-colors">
                    ← Back
                  </button>
                  <button onClick={handlePlaceOrder}
                    className="flex-1 bg-[#f57224] hover:bg-[#e06510] text-white font-bold py-3 rounded flex items-center justify-center gap-2 transition-colors">
                    Place Order ৳{total.toLocaleString()}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:w-[320px] flex-shrink-0">
            <div className="bg-white rounded p-4 sticky top-20">
              <h3 className="font-bold text-gray-900 mb-3">Order Summary</h3>
              <div className="max-h-48 overflow-y-auto space-y-2 mb-3">
                {items.map(({ product: p, quantity }) => (
                  <div key={p.id} className="flex items-center gap-2">
                    <img src={p.image} alt="" className="w-9 h-9 object-contain flex-shrink-0 border border-gray-100 rounded" />
                    <p className="text-xs text-gray-700 flex-1 line-clamp-1">{p.name}</p>
                    <span className="text-xs font-semibold text-gray-800 flex-shrink-0">×{quantity}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-100 pt-3 space-y-1.5 text-sm">
                <div className="flex justify-between text-gray-500">
                  <span>Subtotal</span><span>৳{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>Discount</span><span>-৳{discount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Delivery</span>
                  <span className={delivery === 0 ? "text-green-600 font-semibold" : ""}>{delivery === 0 ? "FREE" : `৳${delivery}`}</span>
                </div>
                <div className="flex justify-between font-bold text-gray-900 text-base pt-2 border-t border-gray-100 mt-2">
                  <span>Total</span>
                  <span className="text-[#f57224]">৳{total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
