import { Package, Truck, CreditCard } from "lucide-react";

const features = [
  {
    icon: <Package size={40} className="text-gray-700" />,
    title: "LazMall",
    desc: "100% Authentic Brands",
    img: (
      <div className="w-[90px] h-[60px] flex items-end justify-center">
        <svg viewBox="0 0 90 60" width="90" height="60" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="45" cy="50" rx="35" ry="4" fill="#e0e0e0" opacity="0.5" />
          <path d="M15 48 L15 20 L30 10 L55 8 L72 18 L72 48 Z" fill="#f0f0f0" stroke="#ddd" strokeWidth="1.5" />
          <path d="M15 20 L30 10 L55 8 L72 18" fill="none" stroke="#ddd" strokeWidth="1.5" />
          <rect x="22" y="28" width="14" height="18" rx="2" fill="#333" />
          <rect x="24" y="24" width="10" height="6" rx="1" fill="#555" />
          <circle cx="29" cy="34" r="2" fill="#fff" opacity="0.6" />
          <path d="M55 48 L55 25 L72 18 L72 48" fill="#e8e8e8" stroke="#ddd" strokeWidth="1" />
          <rect x="58" y="28" width="11" height="15" rx="1" fill="#f57224" opacity="0.3" />
          <rect x="62" y="20" width="5" height="9" rx="1" fill="#999" />
          <path d="M15 48 L72 48" stroke="#ddd" strokeWidth="1" />
          <ellipse cx="65" cy="44" rx="7" ry="3.5" fill="#333" />
          <ellipse cx="65" cy="44" rx="4" ry="2" fill="#555" />
          <ellipse cx="65" cy="44" rx="1.5" ry="0.8" fill="#f57224" />
          <ellipse cx="22" cy="46" rx="5" ry="2.5" fill="#333" />
          <ellipse cx="22" cy="46" rx="2.5" ry="1.3" fill="#555" />
        </svg>
      </div>
    ),
  },
  {
    icon: <Truck size={40} className="text-[#00b4d8]" />,
    title: "Free Shipping",
    desc: "Free & Fast Delivery",
    img: (
      <div className="w-[90px] h-[60px] flex items-center justify-center">
        <div className="w-16 h-16 rounded-2xl bg-[#00d4ff]/15 flex items-center justify-center">
          <svg viewBox="0 0 60 50" width="60" height="50" xmlns="http://www.w3.org/2000/svg">
            <text x="5" y="35" fontSize="34" fill="#00b4d8">🚚</text>
            <text x="38" y="20" fontSize="16" fill="#00d4ff">FREE</text>
          </svg>
        </div>
      </div>
    ),
  },
  {
    icon: <CreditCard size={40} className="text-[#5b7cfa]" />,
    title: "Top Up",
    desc: "Top Up, Bill, Coupon & eStore",
    img: (
      <div className="w-[90px] h-[60px] flex items-center justify-center">
        <div className="w-14 h-14 rounded-2xl bg-[#5b7cfa]/10 flex items-center justify-center">
          <svg viewBox="0 0 50 50" width="50" height="50" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="10" width="40" height="30" rx="5" fill="#5b7cfa" opacity="0.2" />
            <rect x="5" y="17" width="40" height="8" fill="#5b7cfa" opacity="0.5" />
            <rect x="10" y="30" width="12" height="4" rx="2" fill="#5b7cfa" opacity="0.7" />
            <path d="M35 12 L38 20 L46 20 L40 25 L42 33 L35 28 L28 33 L30 25 L24 20 L32 20 Z" fill="#5b7cfa" opacity="0.4" transform="translate(0,-3) scale(0.55) translate(28,18)" />
            <path d="M34 10 L34 25 M27 17.5 L41 17.5" stroke="#5b7cfa" strokeWidth="3" strokeLinecap="round" transform="translate(0,8)" />
          </svg>
        </div>
      </div>
    ),
  },
];

export default function FeatureRow() {
  return (
    <div className="grid grid-cols-3 gap-2 mb-2">
      {features.map((f, i) => (
        <a
          key={i}
          href="#"
          className="bg-white rounded-sm border border-gray-200 flex items-center gap-3 px-4 py-3 hover:shadow-md transition-shadow group"
        >
          <div className="flex flex-col">
            <span className="text-sm font-bold text-gray-900 group-hover:text-[#f57224] transition-colors">
              {f.title}
            </span>
            <span className="text-xs text-gray-500">{f.desc}</span>
          </div>
          <div className="ml-auto">{f.img}</div>
        </a>
      ))}
    </div>
  );
}
