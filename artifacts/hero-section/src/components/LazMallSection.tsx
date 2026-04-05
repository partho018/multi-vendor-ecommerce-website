const brands = [
  {
    id: 1,
    name: "SweetDream Official",
    sub: "SweetDream Official",
    productImage: "/laz-p6.webp",
    logoText: "SweetDream",
  },
  {
    id: 2,
    name: "Popo",
    sub: "Popo",
    productImage: "/laz-p5.avif",
    logoText: "Popo",
  },
  {
    id: 3,
    name: "Karcher",
    sub: "Karcher",
    productImage: "/laz-p4.avif",
    logoText: "KÄRCHER",
  },
  {
    id: 4,
    name: "DOBOHT Sanitaryware",
    sub: "All for Sanitaryware",
    productImage: "/laz-p3.avif",
    logoText: "DOBOHT",
  },
  {
    id: 5,
    name: "BOXY",
    sub: "BOXY",
    productImage: "/laz-p2.avif",
    logoText: "BOXY",
  },
  {
    id: 6,
    name: "ARNO",
    sub: "ARNO",
    productImage: "/laz-p1.webp",
    logoText: "Arno",
  },
];

export default function LazMallSection() {
  return (
    <div className="mt-3 px-5 py-4">
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
          <div
            key={b.id}
            className="cursor-pointer group rounded hover:shadow-md transition-all duration-200 overflow-visible"
          >
            {/* Product image area */}
            <div className="relative bg-white rounded-t overflow-visible" style={{ paddingBottom: "24px" }}>
              <div className="aspect-square bg-white flex items-center justify-center overflow-hidden rounded-t">
                <img
                  src={b.productImage}
                  alt={b.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Brand logo badge - overlapping bottom border */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 bg-white border border-gray-200 rounded px-2 py-1 shadow-sm min-w-[56px] flex items-center justify-center">
                <span className="text-[10px] font-bold text-gray-700 whitespace-nowrap">{b.logoText}</span>
              </div>
            </div>

            {/* Divider line */}
            <div className="border-t border-gray-100" />

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
