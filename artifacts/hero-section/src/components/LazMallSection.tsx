const brands = [
  {
    id: 1,
    name: "PRAN Official",
    sub: "PRAN Official",
    productImage: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=280&fit=crop",
    logoImage: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=60&h=60&fit=crop",
    logoBg: "#e8000d",
    logoText: "PR",
  },
  {
    id: 2,
    name: "ACI Limited",
    sub: "ACI",
    productImage: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=280&fit=crop",
    logoBg: "#005baa",
    logoText: "ACI",
  },
  {
    id: 3,
    name: "Bashundhara",
    sub: "Bashundhara Group",
    productImage: "https://images.unsplash.com/photo-1584556812952-905ffd0c611a?w=400&h=280&fit=crop",
    logoBg: "#1b5e20",
    logoText: "BG",
  },
  {
    id: 4,
    name: "Meril",
    sub: "Meril Beauty",
    productImage: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=280&fit=crop",
    logoBg: "#c62828",
    logoText: "ML",
  },
  {
    id: 5,
    name: "Fresh",
    sub: "Fresh Foods",
    productImage: "https://images.unsplash.com/photo-1571506165871-ee72a35bc9d4?w=400&h=280&fit=crop",
    logoBg: "#2e7d32",
    logoText: "FR",
  },
  {
    id: 6,
    name: "Olympic",
    sub: "Olympic Industries",
    productImage: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=280&fit=crop",
    logoBg: "#6a1b9a",
    logoText: "OL",
  },
];

export default function LazMallSection() {
  return (
    <div className="bg-white rounded-sm mt-3 px-5 py-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900">LazMall</h2>
        <a href="#" className="text-[#f57224] text-sm font-semibold hover:underline flex items-center gap-0.5">
          Shop More <span>›</span>
        </a>
      </div>

      {/* Brand cards */}
      <div className="grid grid-cols-6 gap-3">
        {brands.map((b) => (
          <div key={b.id} className="cursor-pointer group border border-transparent hover:border-gray-200 hover:shadow-md rounded transition-all duration-200">
            {/* Product image */}
            <div className="relative bg-gray-50 rounded-t overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <img
                src={b.productImage}
                alt={b.name}
                className="w-full h-full object-cover"
              />
              {/* Brand logo circle - overlapping bottom */}
              <div
                className="absolute bottom-[-18px] left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-2 border-white flex items-center justify-center shadow-sm"
                style={{ backgroundColor: b.logoBg }}
              >
                <span className="text-white text-[9px] font-black leading-none text-center">{b.logoText}</span>
              </div>
            </div>

            {/* Text below */}
            <div className="pt-6 pb-3 px-2 text-center">
              <p className="text-sm font-semibold text-gray-800 leading-tight">{b.name}</p>
              <p className="text-xs text-gray-400 mt-0.5 truncate">{b.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
