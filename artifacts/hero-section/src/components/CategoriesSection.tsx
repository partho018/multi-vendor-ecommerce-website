const categories = [
  { id: 1,  name: "Mobiles",                      image: "/cat-1.avif" },
  { id: 2,  name: "Women's Dresses",               image: "/cat-2.avif" },
  { id: 3,  name: "Power Banks",                   image: "/cat-3.avif" },
  { id: 4,  name: "Blouses & Shirts",              image: "/cat-4.avif" },
  { id: 5,  name: "Kitchen Organizers",            image: "/cat-5.avif" },
  { id: 6,  name: "Phone Cables & Converters",     image: "/cat-6.avif" },
  { id: 7,  name: "Wireless Earbuds",              image: "/cat-7.avif" },
  { id: 8,  name: "Tablets",                       image: "/cat-8.avif" },
  { id: 9,  name: "Women's Pants & Leggings",      image: "/cat-9.avif" },
  { id: 10, name: "Bed Sheets",                    image: "/cat-10.avif" },
  { id: 11, name: "Dried Fruit, Nuts & Seeds",     image: "/cat-11.avif" },
  { id: 12, name: "Christmas Decoration…",         image: "/cat-12.webp" },
  { id: 13, name: "Home Office Desks",             image: "/cat-13.avif" },
  { id: 14, name: "Stick Vacuum Cleaners",         image: "/cat-14.avif" },
  { id: 15, name: "Outdoor Lighting",              image: "/cat-15.avif" },
  { id: 16, name: "Smartwatch & Fitness Trackers", image: "/cat-1.avif" },
];

export default function CategoriesSection() {
  return (
    <div className="mt-3">
      <h2 className="text-xl font-bold text-gray-900 mb-2 px-1">Categories</h2>

      <div className="bg-white px-3 sm:px-5 py-4" style={{ borderRadius: "5px" }}>
        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="cursor-pointer group flex flex-col items-center border border-gray-200 hover:opacity-80 transition-opacity duration-200"
            >
              <div className="w-full bg-white overflow-hidden flex items-center justify-center" style={{ height: "80px" }}>
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="object-contain"
                  style={{ width: "64px", height: "64px" }}
                />
              </div>
              <div className="w-full py-1.5 px-1">
                <p className="text-[10px] sm:text-xs text-center text-gray-700 leading-tight line-clamp-2">
                  {cat.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
