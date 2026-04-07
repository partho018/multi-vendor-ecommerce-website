import { useState } from "react";
import { Link } from "wouter";
import { User, Package, Heart, MapPin, Settings, ChevronRight, Star, LogOut, Bell, Clock } from "lucide-react";
import TopNav from "@/components/TopNav";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Tab = "dashboard" | "orders" | "wishlist" | "address" | "settings";

const mockOrders = [
  { id: "LAZ87654321", date: "Apr 05, 2026", status: "Delivered", total: 835, items: 3, statusColor: "text-green-600 bg-green-50" },
  { id: "LAZ76543219", date: "Apr 01, 2026", status: "In Transit", total: 1200, items: 1, statusColor: "text-blue-600 bg-blue-50" },
  { id: "LAZ65432198", date: "Mar 28, 2026", status: "Processing", total: 420, items: 2, statusColor: "text-orange-600 bg-orange-50" },
  { id: "LAZ54321876", date: "Mar 20, 2026", status: "Delivered", total: 190, items: 1, statusColor: "text-green-600 bg-green-50" },
  { id: "LAZ43218765", date: "Mar 15, 2026", status: "Cancelled", total: 95, items: 1, statusColor: "text-red-600 bg-red-50" },
];

const mockWishlist = [
  { id: 15, name: "iPad Apple Tablet 10th Gen 10.9 inch Wi-Fi 64GB Silver", price: 1200, original: 2100, image: "/cat-8.avif", rating: 4.9 },
  { id: 9, name: "Karcher WD3 Wet & Dry Vacuum Cleaner 1000W 17L", price: 320, original: 680, image: "/laz-p4.avif", rating: 4.8 },
  { id: 23, name: "Samsung Galaxy A55 5G 8GB+256GB Official Warranty", price: 1580, original: 2200, image: "/cat-1.avif", rating: 4.8 },
];

const navItems: { key: Tab; label: string; icon: typeof User }[] = [
  { key: "dashboard", label: "Dashboard", icon: User },
  { key: "orders", label: "My Orders", icon: Package },
  { key: "wishlist", label: "Wishlist", icon: Heart },
  { key: "address", label: "Addresses", icon: MapPin },
  { key: "settings", label: "Settings", icon: Settings },
];

export default function AccountPage() {
  const [tab, setTab] = useState<Tab>("dashboard");
  const [profile, setProfile] = useState({
    name: "Rahim Khan", email: "rahim@email.com",
    phone: "01700000000", gender: "Male",
  });

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <TopNav />
      <Header />

      <div className="max-w-[1200px] mx-auto px-2 py-3">
        {/* Breadcrumb */}
        <div className="text-xs text-gray-500 mb-3 flex items-center gap-1">
          <Link href="/" className="hover:text-[#f57224]">Home</Link>
          <span>/</span>
          <span className="text-gray-800">My Account</span>
        </div>

        <div className="flex flex-col md:flex-row gap-3">
          {/* Sidebar */}
          <div className="md:w-[240px] flex-shrink-0">
            {/* Profile card */}
            <div className="bg-white rounded p-4 mb-3">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#f57224] to-[#ff3c6b] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl font-black">{profile.name[0]}</span>
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-gray-900 truncate">{profile.name}</p>
                  <p className="text-xs text-gray-400 truncate">{profile.email}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star size={10} className="text-[#f57224]" fill="#f57224" />
                    <span className="text-[10px] text-gray-500">Lazada Member</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Nav */}
            <div className="bg-white rounded overflow-hidden mb-3">
              {navItems.map(({ key, label, icon: Icon }) => (
                <button key={key} onClick={() => setTab(key)}
                  className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-colors border-l-2 ${tab === key ? "border-[#f57224] bg-orange-50 text-[#f57224] font-semibold" : "border-transparent text-gray-600 hover:bg-gray-50"}`}>
                  <div className="flex items-center gap-3">
                    <Icon size={16} />
                    <span>{label}</span>
                  </div>
                  <ChevronRight size={14} className="text-gray-300" />
                </button>
              ))}
              <div className="border-t border-gray-100">
                <button className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-400 hover:bg-red-50 transition-colors">
                  <LogOut size={16} /><span>Sign Out</span>
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white rounded p-4">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">My Stats</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Orders", value: "5" },
                  { label: "Wishlist", value: "3" },
                  { label: "Reviews", value: "12" },
                  { label: "Vouchers", value: "4" },
                ].map((s) => (
                  <div key={s.label} className="text-center bg-gray-50 rounded p-2">
                    <p className="text-xl font-black text-[#f57224]">{s.value}</p>
                    <p className="text-[10px] text-gray-500">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* DASHBOARD */}
            {tab === "dashboard" && (
              <div className="space-y-3">
                <div className="bg-white rounded p-5">
                  <h2 className="text-lg font-bold text-gray-900 mb-4">Welcome back, {profile.name.split(" ")[0]}! 👋</h2>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                    {[
                      { label: "Total Orders", value: "5", icon: Package, color: "text-blue-500 bg-blue-50" },
                      { label: "Pending", value: "1", icon: Clock, color: "text-orange-500 bg-orange-50" },
                      { label: "Wishlist Items", value: "3", icon: Heart, color: "text-red-500 bg-red-50" },
                      { label: "Notifications", value: "2", icon: Bell, color: "text-purple-500 bg-purple-50" },
                    ].map((s) => {
                      const Icon = s.icon;
                      return (
                        <div key={s.label} className="bg-gray-50 rounded p-3 flex flex-col items-center gap-1.5">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${s.color}`}>
                            <Icon size={18} />
                          </div>
                          <p className="text-xl font-black text-gray-900">{s.value}</p>
                          <p className="text-[10px] text-gray-500 text-center">{s.label}</p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Recent orders */}
                  <h3 className="font-bold text-gray-800 mb-3 text-sm">Recent Orders</h3>
                  <div className="space-y-2">
                    {mockOrders.slice(0, 3).map((o) => (
                      <div key={o.id} className="flex items-center justify-between bg-gray-50 rounded p-3">
                        <div>
                          <p className="text-sm font-semibold text-gray-800">{o.id}</p>
                          <p className="text-xs text-gray-400">{o.date} · {o.items} items</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${o.statusColor}`}>{o.status}</span>
                          <span className="text-sm font-bold text-[#f57224]">৳{o.total.toLocaleString()}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button onClick={() => setTab("orders")} className="mt-3 text-sm text-[#f57224] hover:underline">
                    View all orders →
                  </button>
                </div>

                {/* Quick links */}
                <div className="bg-white rounded p-4">
                  <h3 className="font-bold text-gray-800 mb-3 text-sm">Quick Actions</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { label: "Shop Now", href: "/shop", bg: "bg-[#f57224]", text: "text-white" },
                      { label: "My Cart", href: "/cart", bg: "bg-white border border-[#f57224]", text: "text-[#f57224]" },
                      { label: "Track Order", href: "#", bg: "bg-white border border-gray-200", text: "text-gray-700" },
                      { label: "Get Help", href: "#", bg: "bg-white border border-gray-200", text: "text-gray-700" },
                    ].map((a) => (
                      <Link key={a.label} href={a.href}
                        className={`text-center py-2.5 rounded text-sm font-semibold ${a.bg} ${a.text} hover:opacity-90 transition-opacity`}>
                        {a.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ORDERS */}
            {tab === "orders" && (
              <div className="bg-white rounded p-5">
                <h2 className="text-lg font-bold text-gray-900 mb-4">My Orders</h2>
                <div className="space-y-3">
                  {mockOrders.map((o) => (
                    <div key={o.id} className="border border-gray-100 rounded p-4 hover:border-gray-200 transition-colors">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <p className="font-bold text-sm text-gray-900">{o.id}</p>
                          <p className="text-xs text-gray-400">{o.date} · {o.items} item{o.items > 1 ? "s" : ""}</p>
                        </div>
                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${o.statusColor}`}>{o.status}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-base font-black text-[#f57224]">৳{o.total.toLocaleString()}</span>
                        <div className="flex gap-2">
                          {o.status === "Delivered" && (
                            <button className="text-xs border border-[#f57224] text-[#f57224] px-3 py-1.5 rounded hover:bg-orange-50 transition-colors">
                              Buy Again
                            </button>
                          )}
                          <button className="text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded hover:bg-gray-200 transition-colors">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* WISHLIST */}
            {tab === "wishlist" && (
              <div className="bg-white rounded p-5">
                <h2 className="text-lg font-bold text-gray-900 mb-4">My Wishlist ({mockWishlist.length})</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {mockWishlist.map((item) => (
                    <div key={item.id} className="border border-gray-100 rounded overflow-hidden hover:shadow-md transition-shadow">
                      <Link href={`/product/${item.id}`}>
                        <div className="aspect-square bg-gray-50 flex items-center justify-center overflow-hidden">
                          <img src={item.image} alt={item.name} className="w-full h-full object-contain p-3" />
                        </div>
                      </Link>
                      <div className="p-3">
                        <Link href={`/product/${item.id}`}>
                          <p className="text-sm text-gray-700 line-clamp-2 hover:text-[#f57224] transition-colors">{item.name}</p>
                        </Link>
                        <div className="flex items-baseline gap-1 mt-1">
                          <span className="font-bold text-[#f57224]">৳{item.price}</span>
                          <span className="text-xs text-gray-400 line-through">৳{item.original}</span>
                        </div>
                        <div className="flex gap-2 mt-2">
                          <Link href={`/product/${item.id}`}
                            className="flex-1 text-center bg-[#f57224] text-white text-xs font-semibold py-2 rounded hover:bg-[#e06510] transition-colors">
                            Add to Cart
                          </Link>
                          <button className="text-gray-400 hover:text-red-400 transition-colors px-2">
                            <Heart size={16} fill="currentColor" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ADDRESS */}
            {tab === "address" && (
              <div className="bg-white rounded p-5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold text-gray-900">My Addresses</h2>
                  <button className="text-sm bg-[#f57224] text-white px-4 py-2 rounded font-semibold hover:bg-[#e06510] transition-colors">
                    + Add New
                  </button>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "Home", address: "House 12, Road 5, Dhanmondi, Dhaka 1205", default: true },
                    { label: "Office", address: "Tower 7, Gulshan Avenue, Gulshan 1, Dhaka 1212", default: false },
                  ].map((a) => (
                    <div key={a.label} className="border border-gray-100 rounded p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-bold text-sm text-gray-900">{a.label}</span>
                            {a.default && <span className="text-xs bg-[#f57224] text-white px-2 py-0.5 rounded-full">Default</span>}
                          </div>
                          <p className="text-sm text-gray-500">{a.address}</p>
                          <p className="text-sm text-gray-500">Phone: 01700000000</p>
                        </div>
                        <div className="flex gap-2">
                          <button className="text-xs text-[#f57224] hover:underline">Edit</button>
                          {!a.default && <button className="text-xs text-gray-400 hover:text-red-400">Delete</button>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SETTINGS */}
            {tab === "settings" && (
              <div className="bg-white rounded p-5">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Account Settings</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-gray-600 mb-1 block">Full Name</label>
                      <input value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                        className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm outline-none focus:border-[#f57224]" />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-gray-600 mb-1 block">Email</label>
                      <input value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                        className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm outline-none focus:border-[#f57224]" />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-gray-600 mb-1 block">Phone</label>
                      <input value={profile.phone} onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                        className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm outline-none focus:border-[#f57224]" />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-gray-600 mb-1 block">Gender</label>
                      <select value={profile.gender} onChange={(e) => setProfile({ ...profile, gender: e.target.value })}
                        className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm outline-none focus:border-[#f57224] bg-white">
                        <option>Male</option><option>Female</option><option>Prefer not to say</option>
                      </select>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-4">
                    <h3 className="font-semibold text-sm text-gray-800 mb-3">Change Password</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-medium text-gray-600 mb-1 block">Current Password</label>
                        <input type="password" placeholder="••••••••"
                          className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm outline-none focus:border-[#f57224]" />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-gray-600 mb-1 block">New Password</label>
                        <input type="password" placeholder="••••••••"
                          className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm outline-none focus:border-[#f57224]" />
                      </div>
                    </div>
                  </div>

                  <button className="bg-[#f57224] hover:bg-[#e06510] text-white font-bold px-8 py-3 rounded transition-colors">
                    Save Changes
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
