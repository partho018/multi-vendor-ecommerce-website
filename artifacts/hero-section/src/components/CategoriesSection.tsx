const categories = [
  { id: 1,  name: "Mobiles",                    image: "/flash-p6.avif" },
  { id: 2,  name: "Women's Dresses",             image: "/laz-p2.avif" },
  { id: 3,  name: "Power Banks",                 image: "/flash-p2.webp" },
  { id: 4,  name: "Blouses & Shirts",            image: "/laz-p2.avif" },
  { id: 5,  name: "Kitchen Organizers",          image: "/flash-p3.avif" },
  { id: 6,  name: "Phone Cables & Converters",   image: "/flash-p6.avif" },
  { id: 7,  name: "Wireless Earbuds",            image: "/flash-p5.avif" },
  { id: 8,  name: "Tablets",                     image: "/flash-p1.avif" },
  { id: 9,  name: "Women's Pants & Leggings",    image: "/laz-p2.avif" },
  { id: 10, name: "Bed Sheets",                  image: "/laz-p6.webp" },
  { id: 11, name: "Dried Fruit, Nuts & Seeds",   image: "/flash-p1.avif" },
  { id: 12, name: "Christmas Decoration &\u2026", image: "/laz-p1.webp" },
  { id: 13, name: "Home Office Desks",           image: "/laz-p3.avif" },
  { id: 14, name: "Stick Vacuum Cleaners",       image: "/laz-p4.avif" },
  { id: 15, name: "Outdoor Lighting",            image: "/flash-p4.webp" },
  { id: 16, name: "Smartwatch & Fitness Trackers", image: "/laz-p5.avif" },
];

export default function CategoriesSection() {
  return (
    <div className="mt-3 bg-white px-5 py-4">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Categories</h2>

      <div className="grid grid-cols-8 gap-3">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="cursor-pointer group flex flex-col items-center"
          >
            {/* Image box */}
            <div className="w-full aspect-square bg-gray-100 rounded overflow-hidden mb-2 group-hover:shadow-md transition-shadow duration-200">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-contain"
              />
            </div>
            {/* Label */}
            <p className="text-xs text-center text-gray-700 leading-tight line-clamp-2">
              {cat.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
