const brands = [
  {
    id: 1,
    name: "ARNO",
    sub: "ARNO",
    productImage: "/laz-p1.webp",
    logoBg: "#b8860b",
    logoText: "AR",
  },
  {
    id: 2,
    name: "Karcher",
    sub: "Karcher",
    productImage: "/laz-p2.avif",
    logoBg: "#f5c400",
    logoText: "KR",
  },
  {
    id: 3,
    name: "DOBOHT Sanitaryware",
    sub: "All for Sanitaryware",
    productImage: "/laz-p3.avif",
    logoBg: "#1565c0",
    logoText: "DB",
  },
  {
    id: 4,
    name: "BOXY",
    sub: "BOXY",
    productImage: "/laz-p4.avif",
    logoBg: "#212121",
    logoText: "BX",
  },
  {
    id: 5,
    name: "Popo",
    sub: "Popo",
    productImage: "/laz-p5.avif",
    logoBg: "#e65100",
    logoText: "PP",
  },
  {
    id: 6,
    name: "SweetDream Official",
    sub: "SweetDream Official",
    productImage: "/laz-p6.webp",
    logoBg: "#6a1b9a",
    logoText: "SD",
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
