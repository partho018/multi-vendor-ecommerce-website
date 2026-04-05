const brands = [
  {
    id: 1,
    name: "SweetDream Official",
    sub: "SweetDream Official",
    productImage: "/laz-p6.webp",
    logoImage: "/laz-logo6.avif",
  },
  {
    id: 2,
    name: "Popo",
    sub: "Popo",
    productImage: "/laz-p5.avif",
    logoImage: "/laz-logo5.avif",
  },
  {
    id: 3,
    name: "Karcher",
    sub: "Karcher",
    productImage: "/laz-p4.avif",
    logoImage: "/laz-logo4.avif",
  },
  {
    id: 4,
    name: "DOBOHT Sanitaryware",
    sub: "All for Sanitaryware",
    productImage: "/laz-p3.avif",
    logoImage: "/laz-logo3.avif",
  },
  {
    id: 5,
    name: "BOXY",
    sub: "BOXY",
    productImage: "/laz-p2.avif",
    logoImage: "/laz-logo2.avif",
  },
  {
    id: 6,
    name: "ARNO",
    sub: "ARNO",
    productImage: "/laz-p1.webp",
    logoImage: "/laz-logo1.avif",
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
            className="cursor-pointer group rounded bg-white shadow-sm hover:shadow-md transition-shadow duration-200 overflow-visible"
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
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[30%] z-10 bg-white border border-gray-200 rounded shadow-sm flex items-center justify-center overflow-hidden" style={{ width: "52px", height: "52px", padding: "6px" }}>
                <img
                  src={b.logoImage}
                  alt={b.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Text below */}
            <div className="pt-5 pb-5 px-2 text-center">
              <p className="text-sm font-semibold text-gray-800 leading-tight">{b.name}</p>
              <p className="text-xs text-gray-400 mt-0.5 truncate">{b.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
